import videoAgbaje from '~/assets/images/videosAndPodcasts/Agbaje Video.mp4';
import imgEp205 from '~/assets/images/videosAndPodcasts/EP 205 Kids Fitness with Prof Agbaje.webp';
import imgNewseriaInterview from '~/assets/images/videosAndPodcasts/Newseria Interview.webp';
import imgNNFoundationAward from '~/assets/images/videosAndPodcasts/NN Foundation Award.webp';
import imgPhysicalActivity from '~/assets/images/videosAndPodcasts/physical_activity_slow_and_steady_wins_the_race.webp';
import { groupByYear } from '~/utils/dataProcessing';
import type { ImageMetadata } from 'astro';
import { parseISO } from 'date-fns';

interface MediaItem {
  title: string;
  date: string;
  videoId: string;
  platform: 'Youtube' | 'Vimeo' | 'Doccheck' | 'Soundcloud' | 'Spotify' | 'Local';
  author?: string;
  trackUrl?: string;
  poster?: ImageMetadata;
  video?: string;
  videoQuality?: 'max' | 'hq';
}

export const videosAndPodcasts: MediaItem[] = [
  {
    title: 'Persistent tobacco smoking from childhood may cause heart damage by the mid-twenties',
    date: '2025-01-04',
    videoId: 'anc8vUbEt4w',
    platform: 'Youtube',
  },
  {
    title: 'EP 205: How to Get Kids to be Fitter with Prof. Andrew Agbaje',
    date: '2024-12-26',
    videoId: '1ceO3mrEzqFmGgofOnbM3s',
    platform: 'Spotify',
    author: 'The Parent Equation',
    poster: imgEp205,
  },
  {
    title: 'Breaking Boundaries in Finland:Nigerian Immigrant Prof. Andrew Agbaje on Combating Childhood Obesity',
    date: '2024-10-31',
    videoId: 'SutOHglfCUU',
    platform: 'Youtube',
  },
  {
    title: 'Smoking during childhood and early adulthood could damage your heart in real-time, study says',
    date: '2024-12-12',
    videoId: '6npbHcqbWrU',
    platform: 'Youtube',
  },
  {
    title: 'ENDO 2024 Press Conference: Sedentary Time and Liver Damage in Children',
    date: '2024-06-01',
    videoId: '1n85Kj7kjfU',
    platform: 'Youtube',
  },
  {
    title: 'European Congress on Obesity 2024: EASO Pre-conference Interview',
    date: '2024-05-11',
    videoId: '944938770/8269ce30e4',
    platform: 'Vimeo',
    poster: imgNNFoundationAward,
  },
  {
    title: 'CTV News: Sedentariness and Heart Damage',
    date: '2024-05-07',
    videoId: 'X36zEtdqU-o',
    platform: 'Youtube',
  },
  {
    title: 'American Heart Association: Environmental Exposure and Pediatric Cardiology',
    date: '2024-04-15',
    videoId: 'QVhTdHjSOQo',
    platform: 'Youtube',
  },
  {
    title: 'Endocrine Society US Podcast on Childhood Sedentariness and Lipids',
    date: '2024-04-12',
    videoId: 'jPY3Gv9zLpI',
    platform: 'Youtube',
  },
  {
    title: 'BBC World News: Waist-to-Height Ratio in Assessing Childhood Obesity',
    date: '2024-03-19',
    videoId: 'OiA9HlVHsuw',
    platform: 'Youtube',
  },
  {
    title: 'BBC Point West News on Assessing Childhood Obesity',
    date: '2024-03-19',
    videoId: 'AuFbnDornog',
    platform: 'Youtube',
    videoQuality: 'hq',
  },
  {
    title: 'University of Eastern Finland Video Interview on Sedentariness',
    date: '2024-01-24',
    videoId: 'oNIDOECJkLw',
    platform: 'Youtube',
  },
  {
    title: 'University of Eastern Finland Podcast Interview on Sedentariness',
    date: '2024-01-24',
    videoId: '1714264971',
    platform: 'Soundcloud',
    author: 'University of Eastern Finland',
    trackUrl: 'uniuef/childhood-sedentariness-is-a-real-health-threat-light-exercise-is-the-overlooked-antidote',
  },
  {
    title: 'BBC Radio Devon LIVE interview on Dyslipidemia and Cardiac Damage',
    date: '2024-01-19',
    videoId: 'Xm1B-ZkP6Bo',
    platform: 'Youtube',
    videoQuality: 'hq',
  },
  {
    title: 'DocCheck Interview on Slow and Steady Wins the Race- Light Physical Activity',
    date: '2023-09-12',
    videoId: '6066-physical-activity-slow-and-steady-wins-the-race',
    platform: 'Doccheck',
    poster: imgPhysicalActivity,
  },
  {
    title: 'Newseria Interview on Sedentary time and Premature Cardiac Damage',
    date: '2023-08-10',
    videoId: 'newseria-interview-2023',
    video: videoAgbaje,
    platform: 'Local',
    poster: imgNewseriaInterview,
  },
];

// Get unique platforms for filter buttons
export const platforms = [...new Set(videosAndPodcasts.map((item) => item.platform))];

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
