import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Core People',
      links: [
        {
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
          text: 'Thesis',
          href: getPermalink('/materials/thesis'),
        },
        {
          text: 'Publications',
          href: getPermalink('/materials/publications'),
        },
        {
          text: 'Videos and Podcasts',
          href: getPermalink('/materials/videos-and-podcasts'),
        },
        {
          text: 'Infografics',
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
