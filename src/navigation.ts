import imgAndrew from '~/assets/images//navigation/Andrew Agbaje RT 2022.webp';
import imgAndrewCraig from '~/assets/images//principalInvestigator/Andrew Craig Dimitri Alan.webp';
import cholesterolPassport from '~/assets/images/infographic/Cholesterol passport for adolescents to halt the world’s deadliest disease – atherosclerosis.webp';
import imgVideosAndPodcasts from '~/assets/images/navigation/Smoking During Childhood.webp';
import imgOrangeSparks from '~/assets/images/non-academic/Orange Sparks.webp';
import type { MenuLink } from './components/widgets/Header.astro';
import { getPermalink } from './utils/permalinks';

export const headerData: { links: Array<MenuLink> } = {
  links: [
    {
      text: 'People',
      links: [
        {
          text: 'Team',
          href: getPermalink('/people/team'),
          icon: 'tabler:users-group',
          description: 'Dedicated research team',
        },
        {
          image: {
            src: imgAndrewCraig,
            alt: 'Alan, Dimitris, Andrew and Craig',
          },
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
        {
          text: 'Principal Investigator',
          href: getPermalink('/people/principal-investigator'),
          icon: 'tabler:user-circle',
          image: {
            src: imgAndrew,
            alt: 'Agbaje headshot',
          },
          description: 'Lead researcher and project coordinator',
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
          icon: 'tabler:video',
        },
        {
          image: {
            src: cholesterolPassport,
            alt: 'Infographic',
          },
          text: 'Infographics',
          href: getPermalink('/materials/infografics'),
          description: 'Visual research summaries',
          icon: 'tabler:presentation',
        },
        {
          text: 'Press Releases',
          href: getPermalink('/materials/press-releases'),
          icon: 'tabler:tag-starred',
          description: 'Media coverage highlights',
        },
      ],
    },
    // {
    //   text: 'Waist to height ratio (WHtR)',
    //   href: getPermalink('/waist-height-calculator'),
    //   description: 'Waist-to-height ratio tool',
    //   icon: 'tabler:calculator',
    // },
    // {
    // text: 'Call to Action',
    // links: [
    {
      text: 'Call to Action',
      href: getPermalink('/call-to-action'),
      description: 'Practical applications',
      icon: 'tabler:speakerphone',
    },
    {
      image: {
        src: imgOrangeSparks,
        alt: 'Orange Sparks',
      },
      text: 'Non-academic',
      href: getPermalink('/non-academic'),
      description: 'Beyond scientific research',
      icon: 'tabler:flame',
    },
    // ],
    // },
  ],
};
