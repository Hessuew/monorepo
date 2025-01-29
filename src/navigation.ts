import cholesterolPassport from '~/assets/images/infographic/Cholesterol passport for adolescents to halt the world’s deadliest disease – atherosclerosis.webp';
import imgAndrew from '~/assets/images/navigation/Andrew Agbaje RT 2022.webp';
import imgVideosAndPodcasts from '~/assets/images/navigation/Smoking During Childhood.webp';
import type { MenuLink } from './components/widgets/Header.astro';
import { getPermalink } from './utils/permalinks';

export const headerData: { links: Array<MenuLink> } = {
  links: [
    {
      text: 'Core People',
      links: [
        {
          image: {
            src: imgAndrew,
            alt: 'Principal Investigator, Andrew Agbaje',
          },
          text: 'Principal Investigator',
          href: getPermalink('/people/principal-investigator'),
          description: 'Meet our research leader',
        },
        {
          text: 'Team',
          href: getPermalink('/people/team'),
          icon: 'tabler:users-group',
          description: 'Dedicated research team',
        },
        {
          text: 'Collaborators',
          href: getPermalink('/people/collaborators'),
          icon: 'tabler:world',
          description: 'Research partners worldwide',
        },
        {
          text: 'Funders',
          href: getPermalink('/people/funders'),
          icon: 'tabler:cash',
          description: 'Research funding partners',
        },
      ],
    },
    {
      text: 'Materials',
      links: [
        {
          text: 'Key Articles',
          href: getPermalink('/materials/key-articles'),
          icon: 'tabler:key',
          description: 'Few seminal results',
        },
        {
          text: 'Thesis',
          href: getPermalink('/materials/thesis'),
          description: 'Doctoral dissertations',
          icon: 'tabler:school',
        },
        {
          text: 'Publications',
          href: getPermalink('/materials/publications'),
          icon: 'tabler:book',
          description: 'Complete list of publications',
        },
        {
          image: {
            src: imgVideosAndPodcasts,
            alt: 'Videos and Podcasts',
          },
          text: 'Videos and Podcasts',
          href: getPermalink('/materials/videos-and-podcasts'),
          description: 'Multimedia research content',
        },
        {
          image: {
            src: cholesterolPassport,
            alt: 'Infographic',
          },
          text: 'Infographics',
          href: getPermalink('/materials/infografics'),
          description: 'Visual research summaries',
        },
        {
          text: 'Press Releases',
          href: getPermalink('/materials/press-releases'),
          icon: 'tabler:tag-starred',
          description: 'Media coverage highlights',
        },
      ],
    },
    {
      text: 'Waist/Height Calculator',
      href: getPermalink('/waist-height-calculator'),
    },
    {
      text: 'Call to Action',
      href: getPermalink('/call-to-action'),
    },
    {
      text: 'Non-academic',
      href: getPermalink('/non-academic'),
    },
  ],
};
