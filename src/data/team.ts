import imgAndrew from '~/assets/images/team/Andrew Headshot.webp';
import imgBasil from '~/assets/images/team/Basil Apaokwueze.webp';
import imgBenedict from '~/assets/images/team/Benedict Michelle.webp';
import imgShogade from '~/assets/images/team/Dr Tolu Shogade.webp';
import imgFemaleHeadshot from '~/assets/images/team/Female headshot.webp';
import imgJuhani from '~/assets/images/team/Juhani Juusola.webp';
import imgMounir from '~/assets/images/team/Mounir Ould Setti.webp';
import imgSamuel from '~/assets/images/team/Samuel Barmi.webp';
import imgSenbanjo from '~/assets/images/team/Senbanjo Odunayo Image.webp';
import imgTomi from '~/assets/images/team/Tomi Pekka Tuomainen.webp';
import type { ImageMetadata } from 'astro';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  url?: string;
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
    url: 'https://uefconnect.uef.fi/en/andrew.agbaje/#information',
    image: {
      src: imgAndrew,
      alt: 'Andrew Agbaje',
    },
  },
  {
    name: 'Tomi -Pekka Tuomainen',
    title: 'Senior Researcher',
    description: 'MD, PhD, Professor of Epidemiology',
    url: 'https://uefconnect.uef.fi/en/tomi-pekka.tuomainen/#information',
    image: {
      src: imgTomi,
      alt: 'Tomi -Pekka Tuomainen',
    },
  },
  {
    name: 'Mounir Ould Setti',
    title: 'Post-doctoral Researcher',
    description: 'MD, MPH, PhD',
    url: 'https://www.linkedin.com/in/mounir-ould-setti/',
    image: {
      src: imgMounir,
      alt: 'Mounir Ould Setti',
    },
  },
  {
    name: 'Idowu Senbanjo',
    title: 'Doctoral (PhD) Researcher',
    description:
      'MBChB, MSc, PGD (Boston), FWACP, Cert Paediatric Gastroenterology (South Africa), Professor of Paediatrics and Child Health',
    url: 'https://lasucom.edu.ng/professor-idowu-odunayo-senbanjo/',
    image: {
      src: imgSenbanjo,
      alt: 'Idowu Senbanjo',
    },
  },
  {
    name: 'Tolu Shogade',
    title: 'Doctoral (PhD) Researcher',
    description: 'MBChB, MWACP, FMCP, Consultant/Specialist in Internal Medicine',
    url: 'https://esc365.escardio.org/person/432748',
    image: {
      src: imgShogade,
      alt: 'Tolu Shogade',
    },
  },
  {
    name: 'Benedict Michelle',
    title: 'Doctoral (PhD) Researcher',
    description: 'MD, MPH',
    url: 'https://www.linkedin.com/in/dr-michelle-benedict-5988bb47/',
    image: {
      src: imgBenedict,
      alt: 'Benedict Michelle',
    },
  },
  {
    name: 'Samuel Barmi',
    title: 'Doctoral (PhD) Researcher',
    description: 'RN, MPH',
    url: 'https://www.linkedin.com/in/samuel-barmi-8a66b9161/',
    image: {
      src: imgSamuel,
      alt: 'Samuel Barmi',
    },
  },
  {
    name: 'Basil Apaokwueze',
    title: "Master's degree candidate",
    description: 'MBBS, MPH candidate',
    url: 'https://www.linkedin.com/in/basil-apaokwueze-515313185/?originalSubdomain=ng',
    image: {
      src: imgBasil,
      alt: 'Basil Apaokwueze',
    },
  },
  {
    name: 'Ada Korhonen',
    title: 'MD candidate',
    description: 'MD candidate',
    image: {
      src: imgFemaleHeadshot,
      alt: 'Female headshot',
    },
  },
  {
    name: 'Viivi Heijari',
    title: 'Alumni',
    description: 'Bachelors thesis in Biomedicine (Completed May 2024)',
    image: {
      src: imgFemaleHeadshot,
      alt: 'Female headshot',
    },
  },
  {
    name: 'Juhani Juusola',
    title: 'IT Specialist, Creator of the website',
    description: 'Design, web, mobile, server <br /> React, React Native, Node.js, MySQL, Tailwind',
    image: {
      src: imgJuhani,
      alt: 'Juhani Juusola',
    },
  },
];

export const items = teamMembers.map((member) => ({
  title: member.name,
  subtitle: member.title,
  description: member.description,
  url: member.url,
  image: member.image,
}));
