type Award = {
  title: string;
  subtitle: string;
  details?: string;
  location?: string | null;
};

export const recentAwards2024: Award[] = [
  {
    title: 'EASO-Novo Nordisk Foundation New Investigator Award 2024',
    subtitle: 'New Investigator Award in Childhood Obesity',
    details: 'Prize: 300,000 Danish Kroner (€40,000 / $44,000)',
    location: null,
  },
  {
    title: 'Journal of Human Hypertension Young Investigator Award',
    subtitle: '2023 Award presented in 2024',
    location: null,
  },
  {
    title: 'Early Career Investigator Award 2024',
    subtitle: 'Preventive Cardiovascular Medicine Research Award of the American Heart Association',
    location: null,
  },
  {
    title: 'Paul Dudley White International Scholar Award 2024',
    subtitle: 'American Heart Association',
    location: null,
  },
  {
    title: 'ESC Top Reviewer Award 2024',
    subtitle: 'European Society of Cardiology',
    location: 'London, UK',
  },
  {
    title: 'Endocrine Society Outstanding Abstract Award',
    subtitle: 'ENDO 2024',
    location: 'Boston, US',
  },
  {
    title: 'Career Development Lecture',
    subtitle: 'Artery Society 2024 Meeting',
    location: 'Cardiff, UK',
  },
];

type Position = {
  title: string;
  subtitle?: string;
  date?: string;
  details?: string;
  description?: string;
};

export const fellowshipsAndPositions: Position[] = [
  {
    title: 'Docent in Clinical Epidemiology and Child Health',
    subtitle: 'Faculty of Health Sciences, University of Eastern Finland',
    date: 'March 2024',
  },
  {
    title: 'Associate Editor',
    subtitle: 'Journal of Cachexia, Sarcopenia and Muscle',
    details: 'Impact Factor 9.4',
  },
  {
    title: 'Fellow of the New York Academy of Medicine (FNYAM) 2024',
    description:
      'The FNYAM title represents a community of distinguished professionals who have shown a high level of achievement, evidenced by strong performance in at least science or research.',
  },
  {
    title: 'Fellow of the American Heart Association (FAHA) 2024',
    description:
      'The FAHA title is an honorific designation that recognizes scientific and professional accomplishments and contributions, volunteer leadership and service supporting the overall AHA mission: To be a relentless force for a world of longer, healthier lives.',
  },
  {
    title: 'Fellow of the European Society of Cardiology (FESC) 2023',
    description:
      'The FESC title honours individuals who have distinguished themselves in the cardiovascular field. A unique and prestigious title, recognising excellence and lifetime achievement.',
  },
];

export const pastAwards: Award[] = [
  {
    title: 'Elizabeth Barrett-Connor Research Award 2023',
    subtitle: "Early Career Investigators of the American Heart Association's Council on Epidemiology and Prevention",
  },
  {
    title: 'Paul Dudley White International Scholar Award 2023',
    subtitle: 'American Heart Association',
  },
  {
    title: 'Best Poster Prize Award 2023',
    subtitle:
      'Post-Doctoral Research, Novo Nordisk Foundation Scientific Conference on Prevention of Childhood Obesity',
  },
  {
    title: 'Reviewer of the Year Award 2022/2023',
    subtitle: 'European Journal of Preventive Cardiology / Oxford University Press',
  },
  {
    title: 'Communicator of the Year Award 2022',
    subtitle: 'University of Eastern Finland',
  },
  {
    title: 'Young Investigator Fellowship Award 2022',
    subtitle: 'European Atherosclerosis Society',
  },
  {
    title: 'Paul Dudley White International Scholar Award 2022',
    subtitle: 'American Heart Association',
  },
  {
    title: 'Jeremiah and Rose Stamler Research Award 2022',
    subtitle: 'New Investigators at the Epi Lifestyle Annual Scientific Sessions of the American Heart Association',
  },
  {
    title: 'Paul Dudley White International Scholar Award 2021',
    subtitle: 'American Heart Association',
  },
  {
    title: 'Jeremiah and Rose Stamler Research Award 2021',
    subtitle: 'New Investigators at the Epi Lifestyle Annual Scientific Sessions of the American Heart Association',
  },
];

type Achievement = {
  title: string;
  subtitle: string;
  year: string;
  details: string;
};

export const academicAchievements: Achievement[] = [
  {
    title: 'Clinical Research',
    subtitle: 'Harvard University, Boston, US',
    year: '2020',
    details: 'Distinction, summa cum laude, (1000/1000 points)',
  },
  {
    title: 'Masters in Public Health/Epidemiology',
    subtitle: 'University of Eastern Finland, Kuopio, Finland',
    year: '2018',
    details: 'Distinction, summa cum laude, (5/5 points)',
  },
  {
    title: 'Psychiatry/Mental Health',
    subtitle: 'University of Benin, Benin City, Edo State, Nigeria',
    year: '2014',
    details: 'Distinction, summa cum laude, (5/5 points)',
  },
  {
    title: 'ELF/Total Undergraduate Scholarship Award',
    subtitle: 'Medical Studies',
    year: '2009-2012',
    details: '4000 US dollars',
  },
];
