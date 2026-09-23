import { Fragment } from 'react';
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from 'react-email';

export interface WeekStat {
  label: string;
  range: string;
  visits: number;
}

export interface MonthlyStatsEmailProps {
  monthLabel: string;
  periodLabel: string;
  previousPeriodLabel: string;
  weeks: Array<WeekStat>;
  totalVisits: number;
  previousMonthVisits: number;
  calculatorVisits: number;
}

const TOP_BACKGROUND = 'https://resend-attachments.s3.amazonaws.com/wGMsU0uJgk6yncV';
const BOTTOM_BACKGROUND = 'https://resend-attachments.s3.amazonaws.com/qnZCbW5asfsjdtB';
const LOGO_URL = 'https://resend-attachments.s3.amazonaws.com/fmGjSagnYWthZlT';

export const MonthlyStatsEmail = ({
  monthLabel,
  periodLabel,
  previousPeriodLabel,
  weeks,
  totalVisits,
  previousMonthVisits,
  calculatorVisits,
}: MonthlyStatsEmailProps) => {
  const weekRows: Array<Array<WeekStat>> = [];
  for (let i = 0; i < weeks.length; i += 4) {
    weekRows.push(weeks.slice(i, i + 4));
  }

  return (
    <Html>
      <Head />
      <Preview>urFIT-child website statistics — {monthLabel}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={{ ...topSection, backgroundImage: `url('${TOP_BACKGROUND}')` }}>
            <div style={header}>
              <table align='center' role='presentation'>
                <tbody>
                  <tr>
                    <td align='center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Img src={LOGO_URL} alt='Cherubim IT' width='36' height='36' style={logo} />
                      <Heading style={h1}>Cherubim IT</Heading>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Text style={text}>Hello dear brother,</Text>
            <Text style={{ ...text, marginBottom: '2rem' }}>
              Here is your monthly summary of visits to urfit-child.com — including how many visitors used the
              waist-to-height calculator.
            </Text>
          </Section>

          <Section style={statsSection}>
            <Heading style={h2}>Website Visitors — {monthLabel}</Heading>
            <table role='presentation' cellPadding='0' cellSpacing='0' style={statsTable}>
              <tbody>
                {weekRows.map((row, rowIndex) => (
                  <Fragment key={rowIndex}>
                    <tr>
                      {row.map((week) => (
                        <th key={week.label} style={th}>
                          {week.label}
                          <br />
                          <span style={thRange}>{week.range}</span>
                        </th>
                      ))}
                    </tr>
                    <tr>
                      {row.map((week) => (
                        <td key={week.label} style={td}>
                          <strong>{week.visits.toLocaleString('en-US')}</strong> visits
                        </td>
                      ))}
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>

            <table role='presentation' cellPadding='0' cellSpacing='0' style={{ ...statsTable, width: '72%' }}>
              <tbody>
                <tr>
                  <th style={{ ...th, paddingTop: '2rem' }}>
                    Calculator
                    <br />
                    <span style={thRange}>({periodLabel})</span>
                  </th>
                  <th style={{ ...th, paddingTop: '2rem' }}>
                    Total
                    <br />
                    <span style={thRange}>({periodLabel})</span>
                  </th>
                  <th style={{ ...th, paddingTop: '2rem' }}>
                    Previous Month
                    <br />
                    <span style={thRange}>({previousPeriodLabel})</span>
                  </th>
                </tr>
                <tr>
                  <td style={td}>
                    <strong>{calculatorVisits.toLocaleString('en-US')}</strong> visits
                  </td>
                  <td style={td}>
                    <strong>{totalVisits.toLocaleString('en-US')}</strong> visits
                  </td>
                  <td style={td}>
                    <strong>{previousMonthVisits.toLocaleString('en-US')}</strong> visits
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section style={{ ...bottomSection, backgroundImage: `url('${BOTTOM_BACKGROUND}')` }}>
            <Text style={{ ...text, padding: '0rem 2rem 1rem 2rem', margin: 0 }}>
              Your website’s quality is our priority — month after month. If you have any requests, updates, or need
              support, feel free to get in touch with us anytime.
            </Text>
            <div style={footer}>
              <Text style={footerText}>Best regards,</Text>
              <Text style={footerName}>Cherubim IT</Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#000000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: '13px',
};

const container = {
  backgroundColor: '#000000',
  margin: '0 auto',
  maxWidth: '600px',
};

const topSection = {
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% auto',
  color: '#ffffff',
  padding: '2rem 2rem 0rem 2rem',
};

const header = {
  paddingBottom: '1rem',
  paddingTop: '1.5rem',
};

const logo = {
  marginRight: '0.75rem',
};

const h1 = {
  color: '#ffffff',
  fontSize: '1.75rem',
  fontWeight: '700',
  margin: '0',
  marginTop: '0.5rem',
};

const h2 = {
  color: '#ffffff',
  fontSize: '1.25rem',
  fontWeight: '600',
  marginBottom: '1rem',
};

const text = {
  color: '#e5e7eb',
  marginBottom: '1rem',
};

const statsSection = {
  backgroundColor: '#000000',
  padding: '0rem 2rem 2rem 2rem',
};

const statsTable = {
  borderCollapse: 'collapse' as const,
  color: '#d1d5db',
  fontSize: '13px',
  textAlign: 'center' as const,
  width: '100%',
};

const th = {
  fontWeight: 'normal' as const,
  paddingBottom: '0.5rem',
};

const thRange = {
  color: '#9ca3af',
};

const td = {
  paddingBottom: '0.5rem',
};

const bottomSection = {
  backgroundPosition: 'bottom center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% auto',
};

const footer = {
  borderTop: '1px solid #374151',
  color: '#9ca3af',
  margin: '0rem 2rem',
  padding: '2rem 0rem 4rem 0rem',
};

const footerText = {
  margin: '0',
};

const footerName = {
  fontWeight: '600',
  margin: '0',
};