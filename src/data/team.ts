import imgAndrew from '~/assets/images/team/Andrew Headshot.webp';
import imgBasil from '~/assets/images/team/Basil Apaokwueze.webp';
import imgBenedict from '~/assets/images/team/Benedict Michelle.webp';
import imgShogade from '~/assets/images/team/Dr Tolu Shogade.webp';
import imgMounir from '~/assets/images/team/Mounir Ould Setti.webp';
import imgSamuel from '~/assets/images/team/Samuel Barmi.webp';
import imgSenbanjo from '~/assets/images/team/Senbanjo Odunayo Image.webp';
import imgTomi from '~/assets/images/team/Tomi Pekka Tuomainen.webp';
import type { ImageMetadata } from 'astro';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image?: {
    src: string | ImageMetadata;
    alt: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Andrew Agbaje',
    title: 'Principal Investigator',
    description: 'MD, MPH, PhD, FESC, FAHA, FNYAM, Professor (associate) of Clinical Epidemiology and Child Health',
    image: {
      src: imgAndrew,
      alt: 'Andrew Agbaje',
    },
  },
  {
    name: 'Tomi -Pekka Tuomainen',
    title: 'Senior Researcher',
    description: 'MD, PhD, Professor of Epidemiology',
    image: {
      src: imgTomi,
      alt: 'Tomi -Pekka Tuomainen',
    },
  },
  {
    name: 'Mounir Ould Setti',
    title: 'Post-doctoral Researcher',
    description: 'MD, MPH, PhD',
    image: {
      src: imgMounir,
      alt: 'Mounir Ould Setti',
    },
  },
  {
    name: 'Idowu Senbanjo',
    title: 'Doctoral (PhD) Researcher',
    description:
      'MBChB, MSc, PGD (Boston), FWACP, Cert Paediatric Gastroenterology (South Africa), Consultant/Specialist in Paediatric Gastroenterologist/Nutritionist',
    image: {
      src: imgSenbanjo,
      alt: 'Idowu Senbanjo',
    },
  },
  {
    name: 'Tolu Shogade',
    title: 'Doctoral (PhD) Researcher',
    description: 'MBChB, MWACP, FMCP, Consultant/Specialist in Internal Medicine',
    image: {
      src: imgShogade,
      alt: 'Tolu Shogade',
    },
  },
  {
    name: 'Benedict Michelle',
    title: 'Doctoral (PhD) Researcher',
    description: 'MD, MPH',
    image: {
      src: imgBenedict,
      alt: 'Benedict Michelle',
    },
  },
  {
    name: 'Samuel Barmi',
    title: 'Doctoral (PhD) Researcher',
    description: 'RN, MPH',
    image: {
      src: imgSamuel,
      alt: 'Samuel Barmi',
    },
  },
  {
    name: 'Basil Apaokwueze',
    title: "Master's degree candidate",
    description: 'MBBS, MPH candidate',
    image: {
      src: imgBasil,
      alt: 'Basil Apaokwueze',
    },
  },
  {
    name: 'Ada Korhonen',
    title: 'MD candidate',
    description: 'MD candidate',
  },
  {
    name: 'Viivi Heijari',
    title: 'Alumni',
    description: 'Bachelors thesis in Biomedicine (Completed May 2024)',
  },
];

export const items = teamMembers.map((member) => ({
  title: member.name,
  subtitle: member.title,
  description: member.description,
  image: member.image,
}));
