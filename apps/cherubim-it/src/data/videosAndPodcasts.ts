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
  subject: 'commandingBattalions' | 'wisdom' | 'other';
}

export const videosAndPodcasts: MediaItem[] = [
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
