import imgAndrew from '~/assets/images/team/Andrew Headshot.webp';
import imgBasil from '~/assets/images/team/Basil Apaokwueze.webp';
import imgBenedict from '~/assets/images/team/Benedict Michelle.webp';
import imgDouglas from '~/assets/images/team/Douglas Corsi.webp';
import imgShogade from '~/assets/images/team/Dr Tolu Shogade.webp';
import imgEugene from '~/assets/images/team/Eugene Enimah.webp';
import imgFemaleHeadshot from '~/assets/images/team/Female headshot.webp';
import imgJuhani from '~/assets/images/team/Juhani_Helsinki.webp';
import imgMahidere from '~/assets/images/team/Mahidere Ali.webp';
import imgSamuel from '~/assets/images/team/Samuel Barmi.webp';
import imgSenbanjo from '~/assets/images/team/Senbanjo Odunayo Image.webp';
import imgTomi from '~/assets/images/team/Tomi Pekka Tuomainen.webp';
import type { ImageMetadata } from 'astro';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  url?: string;
  urlText?: string;
  image?: {
    src: string | ImageMetadata;
    alt: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Andrew Agbaje',
    title: 'Principal Investigator',
    description:
      'MD, MPH, PhD, FACC, FESC, FAHA, FNYAM, Professor (associate) of Clinical Epidemiology and Child Health',
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
    name: 'Douglas Corsi',
    title: 'Doctoral (PhD) Researcher',
    description: 'MD, Internal Medicine Resident, New Jersey, United States',
    url: 'https://www.linkedin.com/in/douglas-corsi-9a330471/',
    image: {
      src: imgDouglas,
      alt: 'Douglas Corsi',
    },
  },
  {
    name: 'Mahidere Ali',
    title: 'Project Researcher',
    description: 'MD, MPH',
    url: 'https://fi.linkedin.com/in/mahidere-wondiye-ali-175213211',
    image: {
      src: imgMahidere,
      alt: 'Mahidere Ali',
    },
  },
  {
    name: 'Idowu Senbanjo',
    title: 'Doctoral (PhD) Researcher',
    description:
      'Professor of Paediatrics and Child Health, MBChB, MSc, PGD (Boston), FWACP, Cert Paediatric Gastroenterology (South Africa)',
    url: 'https://lasucom.edu.ng/professor-idowu-odunayo-senbanjo/',
    image: {
      src: imgSenbanjo,
      alt: 'Idowu Senbanjo',
    },
  },
  {
    name: 'Tolu Shogade',
    title: 'Doctoral (PhD) Researcher',
    description: 'MBChB, MWACP, FMCP, FESC, Consultant/Specialist in Internal Medicine',
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
    name: 'Eugene Enimah',
    title: 'Doctoral (PhD) Researcher',
    description: 'BSC, OD, MOptom, MPH',
    url: 'https://fi.linkedin.com/in/eugene-enimah-252483103',
    image: {
      src: imgEugene,
      alt: 'Eugene Enimah',
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
    name: 'Basil Apaokwueze',
    title: 'Alumni',
    description: 'MBBS, MPH, Pediatric Resident (Research) Children\'s National Hospital, Washington D.C, US <br /> (MPH thesis completed in May 2025)',
    url: 'https://www.linkedin.com/in/basil-apaokwueze-515313185/?originalSubdomain=ng',
    image: {
      src: imgBasil,
      alt: 'Basil Apaokwueze',
    },
  },
  {
    name: 'Viivi Heijari',
    title: 'Alumni',
    description: 'Bachelors thesis in Biomedicine <br /> (Completed May 2024)',
    image: {
      src: imgFemaleHeadshot,
      alt: 'Female headshot',
    },
  },
  {
    name: 'Juhani Juusola',
    title: 'Senior developer',
    description: 'Architecture, design, db admin, testing',
    url: 'https://cherubim-it.com/',
    urlText: 'Cherubim IT',
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
  urlText: member.urlText,
  image: member.image,
}));
