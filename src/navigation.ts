import imgAndrew from '~/assets/images//principalInvestigator/Agbaje ESC Congress London.webp';
import imgAndrewCraig from '~/assets/images//principalInvestigator/Andrew Craig Dimitri Alan.webp';
import cholesterolPassport from '~/assets/images/infographic/Cholesterol passport for adolescents to halt the world’s deadliest disease – atherosclerosis.webp';
import imgVideosAndPodcasts from '~/assets/images/navigation/Smoking During Childhood.webp';
import imgOrangeSparks from '~/assets/images/non-academic/Orange Sparks.webp';
import imgFESC from '~/assets/images/principalInvestigator/FESC ESC 2024 Agbaje.webp';
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
      ],
    },
    {
      text: 'Lead',
      href: getPermalink('/people/principal-investigator'),
      links: [
        {
          text: 'About',
          href: getPermalink('/people/principal-investigator'),
          icon: 'tabler:user-circle',
          description: 'The Principal Investigator',
        },
        {
          image: {
            src: imgAndrew,
            alt: 'Agbaje at the ESC congress, London',
          },
          text: 'Academic',
          href: getPermalink('/people/principal-investigator#academic'),
          icon: 'tabler:certificate',
          description: 'Academic qualifications and achievements',
        },
        {
          image: {
            src: imgFESC,
            alt: 'FESC ESC 2024 Agbaje',
          },
          text: 'Awards and Honours',
          href: getPermalink('/people/principal-investigator#awards-and-honours'),
          icon: 'tabler:trophy',
          description: 'Recognition and accolades',
        },
        {
          text: 'Editorial Board',
          href: getPermalink('/people/principal-investigator#editorial'),
          icon: 'tabler:edit',
          description: 'Journal editorial positions',
        },
        {
          text: 'Affiliations',
          href: getPermalink('/people/principal-investigator#affiliations'),
          icon: 'tabler:building',
          description: 'Institutional connections',
        },
        {
          text: 'Memberships',
          href: getPermalink('/people/principal-investigator#memberships'),
          icon: 'tabler:id-badge',
          description: 'Professional society memberships',
        },
        // {
        //   text: 'Contact',
        //   href: '/people/principal-investigator#contact',
        //   icon: 'tabler:mail',
        //   description: 'Get in touch',
        // },
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
      text: 'Waist/Height Calc',
      href: getPermalink('/waist-height-calculator'),
      description: 'Waist-to-height ratio tool',
      icon: 'tabler:calculator',
    },
    {
      text: 'Call to Action',
      links: [
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
      ],
    },
  ],
};
