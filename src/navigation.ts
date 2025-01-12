import cholesterolPassport from '~/assets/images/infographic/Cholesterol passport for adolescents to halt the world’s deadliest disease – atherosclerosis.webp';
import imgAndrew from '~/assets/images/navigation/Andrew Agbaje RT 2022.webp';
import imgVideosAndPodcasts from '~/assets/images/navigation/Smoking During Childhood.webp';
import { getPermalink } from './utils/permalinks';

export const headerData = {
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
        },
        {
          text: 'Team',
          href: getPermalink('/people/team'),
        },
        {
          text: 'Collaborators',
          href: getPermalink('/people/collaborators'),
        },
        {
          text: 'Funders',
          href: getPermalink('/people/funders'),
        },
      ],
    },
    {
      text: 'Materials',
      links: [
        {
          text: 'Key Articles',
          href: getPermalink('/materials/key-articles'),
        },
        {
          text: 'Thesis',
          href: getPermalink('/materials/thesis'),
        },
        {
          text: 'Publications',
          href: getPermalink('/materials/publications'),
        },
        {
          image: {
            src: imgVideosAndPodcasts,
            alt: 'Videos and Podcasts',
          },
          text: 'Videos and Podcasts',
          href: getPermalink('/materials/videos-and-podcasts'),
        },
        {
          image: {
            src: cholesterolPassport,
            alt: 'Infographic',
          },
          text: 'Infographics',
          href: getPermalink('/materials/infografics'),
        },
        {
          text: 'Press Releases',
          href: getPermalink('/materials/press-releases'),
        },
      ],
    },
    {
      text: 'Waist/Height Calculator',
      href: getPermalink('/waist-height-calculator'),
    },
    {
      text: 'Non-academic',
      href: getPermalink('/non-academic'),
    },
  ],
};
