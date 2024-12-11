interface MediaItem {
  title: string;
  date: string;
  videoId: string;
  platform: 'youtube' | 'vimeo' | 'doccheck' | 'soundcloud';
  author?: string;
  trackUrl?: string;
}

export const videosAndPodcasts: MediaItem[] = [
  {
    title: 'ENDO 2024 Press Conference: Sedentary Time and Liver Damage in Children',
    date: '01.06.2024',
    videoId: '1n85Kj7kjfU',
    platform: 'youtube',
  },
  {
    title: 'European Congress on Obesity 2024: EASO Pre-conference Interview',
    date: '11.05.2024',
    videoId: '944938770/8269ce30e4',
    platform: 'vimeo',
  },
  {
    title: 'CTV News: Sedentariness and Heart Damage',
    date: '07.05.2024',
    videoId: 'X36zEtdqU-o',
    platform: 'youtube',
  },
  {
    title: 'American Heart Association: Environmental Exposure and Pediatric Cardiology',
    date: '15.4.2024',
    videoId: 'QVhTdHjSOQo',
    platform: 'youtube',
  },
  {
    title: 'Endocrine Society US Podcast on Childhood Sedentariness and Lipids',
    date: '12.4.2024',
    videoId: 'jPY3Gv9zLpI',
    platform: 'youtube',
  },
  {
    title: 'BBC World News: Waist-to-Height Ratio in Assessing Childhood Obesity',
    date: '19.3.2024',
    videoId: 'OiA9HlVHsuw',
    platform: 'youtube',
  },
  {
    title: 'BBC Point West News on Assessing Childhood Obesity',
    date: '19.3.2024',
    videoId: 'AuFbnDornog',
    platform: 'youtube',
  },
  {
    title: 'University of Eastern Finland Video Interview on Sedentariness',
    date: '24.1.2024',
    videoId: 'oNIDOECJkLw',
    platform: 'youtube',
  },
  {
    title: 'BBC Radio Devon LIVE interview on Dyslipidemia and Cardiac Damage',
    date: '19.1.2024',
    videoId: 'Xm1B-ZkP6Bo',
    platform: 'youtube',
  },
  {
    title: 'University of Eastern Finland Podcast Interview on Sedentariness',
    date: '24.1.2024',
    videoId: '1714264971',
    platform: 'soundcloud',
    author: 'University of Eastern Finland',
    trackUrl: 'childhood-sedentariness-is-a-real-health-threat-light-exercise-is-the-overlooked-antidote',
  },
  {
    title: 'DocCheck Interview on Slow and Steady Wins the Race- Light Physical Activity',
    date: '12.9.2023',
    videoId: '6066-physical-activity-slow-and-steady-wins-the-race',
    platform: 'doccheck',
  },
];

// Get unique platforms for filter buttons
export const platforms = [...new Set(videosAndPodcasts.map((item) => item.platform))];
