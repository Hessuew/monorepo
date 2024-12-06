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
          text: 'Press Releases',
          href: getPermalink('/materials/press-releases'),
        },
      ],
    },
    {
      text: 'Waist/Height Calculator',
      href: getPermalink('/other/waist-height-calculator'),
    },
    {
      text: 'Non-academic',
      href: getPermalink('/other/non-academic'),
    },
    // {
    //   text: 'Other',
    //   links: [
    //     {
    //       text: 'Editor/Reviewer',
    //       href: getPermalink('/editor-reviewer'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};
