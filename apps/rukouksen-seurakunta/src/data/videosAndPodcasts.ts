import { groupByYear } from '~/utils/dataProcessing';
import type { ImageMetadata } from 'astro';
import { parseISO } from 'date-fns';

interface MediaItem {
  title: string;
  date: string;
  description: string;
  videoId: string;
  platform: 'Youtube' | 'Vimeo' | 'Doccheck' | 'Soundcloud' | 'Spotify' | 'Other';
  author?: string;
  trackUrl?: string;
  poster?: ImageMetadata;
  video?: string;
  videoQuality?: 'max' | 'hq';
  subject: 'commandingBattalions' | 'wisdom' | 'testimonies' | 'jesus_fest' | 'other';
}

export const videosAndPodcasts: MediaItem[] = [
  {
    title: 'podcast #12',
    date: '2025-06-03',
    description: 'podcast12.description',
    videoId: 'NcqQGksE80Q',
    subject: 'jesus_fest',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #11',
    date: '2025-06-03',
    description: 'podcast11.description',
    videoId: 'aSpwSIwTMz8',
    subject: 'jesus_fest',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #10',
    date: '2025-06-03',
    description: 'podcast10.description',
    videoId: 'gd75ZNI_-f4',
    subject: 'jesus_fest',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #9',
    date: '2025-06-03',
    description: 'podcast9.description',
    videoId: 'wzfASjzIL3Q',
    subject: 'jesus_fest',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #8',
    date: '2025-05-01',
    description: 'podcast8.description',
    videoId: 'b-4aKCp9vhs',
    subject: 'wisdom',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #7',
    date: '2025-05-01',
    description: 'podcast7.description',
    videoId: 'lajnP-FNL7w',
    subject: 'wisdom',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #6',
    date: '2025-05-01',
    description: 'podcast6.description',
    videoId: 'ouqbEqcltuo',
    subject: 'wisdom',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #5',
    date: '2025-04-22',
    description: 'podcast5.description',
    videoId: '1nfP1v75Lgo',
    subject: 'other',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #4',
    date: '2025-04-22',
    description: 'podcast4.description',
    videoId: 'D0EpiWthjmQ',
    subject: 'other',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #3',
    date: '2025-04-17',
    description: 'podcast3.description',
    videoId: 'icXtHWpkaAY',
    subject: 'testimonies',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #2',
    date: '2025-03-22',
    description: 'podcast2.description',
    videoId: 'DSr7BV9cn5I',
    subject: 'wisdom',
    videoQuality: 'hq',
    platform: 'Youtube',
  },
  {
    title: 'podcast #1',
    date: '2025-03-22',
    description: 'podcast1.description',
    videoId: 'asqmiQW7hY0',
    subject: 'commandingBattalions',
    platform: 'Youtube',
  },
];

// Get unique subjects for filter buttons
export const subjects = [...new Set(videosAndPodcasts.map((item) => item.subject))];

// Group publications by year and sort within each year by date
export const videosAndPodcastsByYear = groupByYear(videosAndPodcasts);

// Sort publications within each year by date
Object.keys(videosAndPodcastsByYear).forEach((year) => {
  videosAndPodcastsByYear[Number(year)].sort((a, b) => {
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);
    return dateB.getTime() - dateA.getTime();
  });
});

// Sort years in descending order
export const sortedYears = Object.keys(videosAndPodcastsByYear)
  .map(Number)
  .sort((a, b) => b - a);
