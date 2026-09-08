import type { MenuLink } from './components/widgets/Header.astro';
import { getPermalink } from './utils/permalinks';

export const headerData: { links: Array<MenuLink> } = {
  links: [
    {
      text: 'aboutUs',
      href: getPermalink('#meista'),
    },
    {
      text: 'testimonies',
      href: getPermalink('#todistuksia'),
    },
    {
      separator: true,
      icon: 'tabler:calendar-time',
      text: 'events',
      href: getPermalink('/jesus-fest'),
    },
    {
      separator: true,
      icon: 'tabler:brand-youtube',
      text: 'videos',
      href: getPermalink('/rukouksen-seurakunta-videot'),
    },
  ],
};
