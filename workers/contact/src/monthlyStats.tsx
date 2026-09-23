import { Resend } from 'resend';
import { MonthlyStatsEmail } from './emails/MonthlyStatsEmail';
import type { WeekStat } from './emails/MonthlyStatsEmail';

export interface StatsEnv {
  RESEND_API_KEY: string;
  CF_ACCOUNT_ID: string;
  CF_ANALYTICS_API_TOKEN: string;
  CF_WEB_ANALYTICS_SITE_TAG: string;
  REPORT_RECIPIENTS: string;
}

const SITE_HOST = 'urfit-child.com';
const CALCULATOR_PATHS = new Set(['/waist-height-calculator', '/waist-height-calculator/']);
const GRAPHQL_ENDPOINT = 'https://api.cloudflare.com/client/v4/graphql';

const STATS_QUERY = `
  query MonthlyStats(
    $accountTag: String!
    $siteTag: String!
    $host: String!
    $monthStart: Time!
    $monthEnd: Time!
    $prevStart: Time!
  ) {
    viewer {
      accounts(filter: { accountTag: $accountTag }) {
        daily: rumPageloadEventsAdaptiveGroups(
          limit: 62
          filter: { siteTag: $siteTag, requestHost: $host, datetime_geq: $monthStart, datetime_lt: $monthEnd }
        ) {
          sum { visits }
          dimensions { date }
        }
        paths: rumPageloadEventsAdaptiveGroups(
          limit: 500
          filter: { siteTag: $siteTag, requestHost: $host, datetime_geq: $monthStart, datetime_lt: $monthEnd }
          orderBy: [count_DESC]
        ) {
          sum { visits }
          dimensions { requestPath }
        }
        previous: rumPageloadEventsAdaptiveGroups(
          limit: 1
          filter: { siteTag: $siteTag, requestHost: $host, datetime_geq: $prevStart, datetime_lt: $monthStart }
        ) {
          sum { visits }
        }
      }
    }
  }
`;

interface RumGroup<D> {
  sum: { visits: number };
  dimensions?: D;
}

interface StatsResponse {
  data?: {
    viewer?: {
      accounts?: Array<{
        daily?: Array<RumGroup<{ date: string }>>;
        paths?: Array<RumGroup<{ requestPath: string }>>;
        previous?: Array<RumGroup<Record<string, never>>>;
      }>;
    };
  };
  errors?: Array<{ message: string }>;
}

const dayFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

const formatRange = (start: Date, end: Date): string => `${dayFormatter.format(start)} – ${dayFormatter.format(end)}`;

interface MonthPeriod {
  start: Date;
  end: Date;
}

const previousMonthPeriod = (firedAt: Date): { current: MonthPeriod; previous: MonthPeriod } => {
  const year = firedAt.getUTCFullYear();
  const month = firedAt.getUTCMonth();
  return {
    current: {
      start: new Date(Date.UTC(year, month - 1, 1)),
      end: new Date(Date.UTC(year, month, 1)),
    },
    previous: {
      start: new Date(Date.UTC(year, month - 2, 1)),
      end: new Date(Date.UTC(year, month - 1, 1)),
    },
  };
};

const buildWeeks = (period: MonthPeriod): Array<WeekStat> => {
  const daysInMonth = Math.round((period.end.getTime() - period.start.getTime()) / 86_400_000);
  const weeks: Array<WeekStat> = [];

  for (let start = 1; start <= daysInMonth; start += 7) {
    const end = Math.min(start + 6, daysInMonth);
    const rangeStart = new Date(Date.UTC(period.start.getUTCFullYear(), period.start.getUTCMonth(), start));
    const rangeEnd = new Date(Date.UTC(period.start.getUTCFullYear(), period.start.getUTCMonth(), end));
    weeks.push({ label: `Week ${weeks.length + 1}`, range: formatRange(rangeStart, rangeEnd), visits: 0 });
  }

  return weeks;
};

const fetchRumStats = async (env: StatsEnv, current: MonthPeriod, previous: MonthPeriod) => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.CF_ANALYTICS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: STATS_QUERY,
      variables: {
        accountTag: env.CF_ACCOUNT_ID,
        siteTag: env.CF_WEB_ANALYTICS_SITE_TAG,
        host: SITE_HOST,
        monthStart: current.start.toISOString(),
        monthEnd: current.end.toISOString(),
        prevStart: previous.start.toISOString(),
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Cloudflare GraphQL request failed with status ${response.status}`);
  }

  const payload: StatsResponse = await response.json();
  if (payload.errors?.length) {
    throw new Error(`Cloudflare GraphQL errors: ${payload.errors.map((e) => e.message).join('; ')}`);
  }

  const account = payload.data?.viewer?.accounts?.[0];
  if (!account) {
    throw new Error('Cloudflare GraphQL returned no account analytics data');
  }

  return account;
};

export const handleScheduled = async (event: ScheduledEvent, env: StatsEnv): Promise<void> => {
  const { current, previous } = previousMonthPeriod(new Date(event.scheduledTime));
  const account = await fetchRumStats(env, current, previous);

  const weeks = buildWeeks(current);
  let totalVisits = 0;
  for (const group of account.daily ?? []) {
    const day = Number(group.dimensions?.date?.split('-')[2]);
    const visits = group.sum.visits ?? 0;
    totalVisits += visits;
    const weekIndex = Number.isFinite(day) ? Math.min(Math.floor((day - 1) / 7), weeks.length - 1) : -1;
    if (weekIndex >= 0) weeks[weekIndex].visits += visits;
  }

  const calculatorVisits = (account.paths ?? [])
    .filter((group) => CALCULATOR_PATHS.has(group.dimensions?.requestPath ?? ''))
    .reduce((sum, group) => sum + (group.sum.visits ?? 0), 0);

  const previousMonthVisits = account.previous?.[0]?.sum.visits ?? 0;

  const recipients = (env.REPORT_RECIPIENTS ?? '')
    .split(',')
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  if (!recipients.length) {
    throw new Error('REPORT_RECIPIENTS is not configured on the contact-form worker');
  }

  const resend = new Resend(env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: 'Cherubim IT <reports@cherubim-it.com>',
    to: recipients,
    subject: `urFIT-child website statistics — ${monthFormatter.format(current.start)}`,
    react: (
      <MonthlyStatsEmail
        monthLabel={monthFormatter.format(current.start)}
        periodLabel={formatRange(current.start, new Date(current.end.getTime() - 86_400_000))}
        previousPeriodLabel={formatRange(previous.start, new Date(previous.end.getTime() - 86_400_000))}
        weeks={weeks}
        totalVisits={totalVisits}
        previousMonthVisits={previousMonthVisits}
        calculatorVisits={calculatorVisits}
      />
    ),
  });

  if (error) {
    throw new Error(`Failed to send monthly statistics email: ${error.message}`);
  }
};
