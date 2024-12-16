import type { ImageMetadata } from 'astro';
import imgAndrew from '~/assets/images/principalInvestigator/Andrew Agbaje RT 2022.webp';
import imgTomi from '~/assets/images/team/Tomi Pekka Tuomainen.webp';
import imgSenbanjo from '~/assets/images/team/Senbanjo Odunayo Image.webp';
import imgMounir from '~/assets/images/team/Mounir Ould Setti.webp';
import imgBenedict from '~/assets/images/team/Benedict Michelle.webp';

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
    title: 'Principal investigator',
    description: 'MD, MPH, PhD, Professor (associate) of Clinical Epidemiology and Child Health',
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
    title: 'Doctoral (PhD) Candidate',
    description:
      'MBChB, MSc, PGD (Boston), FWACP, Cert Paediatric Gastroenterology (South Africa), Consultant/Specialist in Paediatric Gastroenterologist/Nutritionist',
    image: {
      src: imgSenbanjo,
      alt: 'Idowu Senbanjo',
    },
  },
  {
    name: 'Tolu Shogade',
    title: 'Doctoral (PhD) Candidate',
    description: 'MBChB, MWACP, FMCP, Consultant/Specialist in Internal Medicine',
  },
  {
    name: 'Samuel Barmi',
    title: 'Doctoral (PhD) Candidate',
    description: 'RN, MPH',
  },
  {
    name: 'Benedict Michelle',
    title: 'Doctoral (PhD) Candidate',
    description: 'MD, MPH',
    image: {
      src: imgBenedict,
      alt: 'Benedict Michelle',
    },
  },
  {
    name: 'Basil Apaokwueze',
    title: "Master's degree and MD candidate",
    description: 'MBBS, MPH candidate',
  },
  {
    name: 'Ada Korhonen',
    title: "Master's degree and MD candidate",
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
