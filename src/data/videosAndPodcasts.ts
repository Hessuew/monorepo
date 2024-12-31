import type { ImageMetadata } from 'astro';
import { parseISO, getYear } from 'date-fns';
import imgNNFoundationAward from '~/assets/images/videosAndPodcasts/NN Foundation Award.webp';
import imgPhysicalActivity from '~/assets/images/videosAndPodcasts/physical_activity_slow_and_steady_wins_the_race.webp';

interface MediaItem {
  title: string;
  date: string;
  videoId: string;
  platform: 'youtube' | 'vimeo' | 'doccheck' | 'soundcloud';
  author?: string;
  trackUrl?: string;
  poster?: ImageMetadata;
  videoQuality?: 'max' | 'hq';
}

export const videosAndPodcasts: MediaItem[] = [
  {
    title: 'Smoking during childhood and early adulthood could damage your heart in real-time, study says',
    date: '2024-12-12',
    videoId: '6npbHcqbWrU',
    platform: 'youtube',
  },
  {
    title: 'ENDO 2024 Press Conference: Sedentary Time and Liver Damage in Children',
    date: '2024-06-01',
    videoId: '1n85Kj7kjfU',
    platform: 'youtube',
  },
  {
    title: 'European Congress on Obesity 2024: EASO Pre-conference Interview',
    date: '2024-05-11',
    videoId: '944938770/8269ce30e4',
    platform: 'vimeo',
    poster: imgNNFoundationAward,
  },
  {
    title: 'CTV News: Sedentariness and Heart Damage',
    date: '2024-05-07',
    videoId: 'X36zEtdqU-o',
    platform: 'youtube',
  },
  {
    title: 'American Heart Association: Environmental Exposure and Pediatric Cardiology',
    date: '2024-04-15',
    videoId: 'QVhTdHjSOQo',
    platform: 'youtube',
  },
  {
    title: 'Endocrine Society US Podcast on Childhood Sedentariness and Lipids',
    date: '2024-04-12',
    videoId: 'jPY3Gv9zLpI',
    platform: 'youtube',
  },
  {
    title: 'BBC World News: Waist-to-Height Ratio in Assessing Childhood Obesity',
    date: '2024-03-19',
    videoId: 'OiA9HlVHsuw',
    platform: 'youtube',
  },
  {
    title: 'BBC Point West News on Assessing Childhood Obesity',
    date: '2024-03-19',
    videoId: 'AuFbnDornog',
    platform: 'youtube',
    videoQuality: 'hq',
  },
  {
    title: 'University of Eastern Finland Video Interview on Sedentariness',
    date: '2024-01-24',
    videoId: 'oNIDOECJkLw',
    platform: 'youtube',
  },
  {
    title: 'University of Eastern Finland Podcast Interview on Sedentariness',
    date: '2024-01-24',
    videoId: '1714264971',
    platform: 'soundcloud',
    author: 'University of Eastern Finland',
    trackUrl: 'uniuef/childhood-sedentariness-is-a-real-health-threat-light-exercise-is-the-overlooked-antidote',
  },
  {
    title: 'BBC Radio Devon LIVE interview on Dyslipidemia and Cardiac Damage',
    date: '2024-01-19',
    videoId: 'Xm1B-ZkP6Bo',
    platform: 'youtube',
    videoQuality: 'hq',
  },
  {
    title: 'DocCheck Interview on Slow and Steady Wins the Race- Light Physical Activity',
    date: '2023-09-12',
    videoId: '6066-physical-activity-slow-and-steady-wins-the-race',
    platform: 'doccheck',
    poster: imgPhysicalActivity,
  },
];

// Get unique platforms for filter buttons
export const platforms = [...new Set(videosAndPodcasts.map((item) => item.platform))];

// Group media items by year
export const mediaItemsByYear = videosAndPodcasts.reduce(
  (acc, item) => {
    const date = parseISO(item.date);
    const year = getYear(date);
    acc[year] = [...(acc[year] || []), item];
    return acc;
  },
  {} as Record<number, typeof videosAndPodcasts>
);

// Sort years in descending order
export const sortedYears = Object.keys(mediaItemsByYear)
  .map(Number)
  .sort((a, b) => b - a);
