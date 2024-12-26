type Award = {
  title: string;
  subtitle: string;
  details?: string;
  location?: string | null;
  icon?: string;
};

export const recentAwards2024: Award[] = [
  {
    title: 'EASO New Investigator Award',
    subtitle: 'EASO-Novo Nordisk Foundation New Investigator Award in Childhood Obesity',
    details: 'Prize: 300,000 Danish Kroner (€40,000 / $44,000)',
    location: null,
    icon: 'tabler:microscope',
  },
  {
    title: 'Young Investigator Award',
    subtitle: 'Journal of Human Hypertension Young Investigator Award in Hypertension Research',
    location: null,
    icon: 'tabler:heart-rate-monitor',
  },
  {
    title: 'Early Career Award',
    subtitle: 'European Society of Cardiology Early Career Investigator Award 2024',
    location: null,
    icon: 'tabler:arrow-big-up-lines',
  },
  {
    title: 'Paul Dudley White Scholar',
    subtitle: 'American Heart Association International Scholar Award 2024',
    location: null,
    icon: 'tabler:award',
  },
  {
    title: 'ESC Top Reviewer',
    subtitle: 'European Society of Cardiology Top Reviewer Award 2024',
    location: 'London, UK',
    icon: 'tabler:file-check',
  },
  {
    title: 'Outstanding Abstract',
    subtitle: 'Endocrine Society Outstanding Abstract Award, ENDO 2024',
    location: 'Boston, US',
    icon: 'tabler:dna',
  },
  {
    title: 'Career Development Lecture',
    subtitle: 'British Society for Endocrinology Career Development Award',
    location: 'Cardiff, UK',
    icon: 'tabler:stairs-up',
  },
];

type Position = {
  title: string;
  subtitle: string;
  date?: string;
  details?: string;
  description?: string;
  icon?: string;
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
    subtitle:
      'The FNYAM title represents a community of distinguished professionals who have shown a high level of achievement, evidenced by strong performance in at least science or research.',
  },
  {
    title: 'Fellow of the American Heart Association (FAHA) 2024',
    subtitle:
      'The FAHA title is an honorific designation that recognizes scientific and professional accomplishments and contributions, volunteer leadership and service supporting the overall AHA mission: To be a relentless force for a world of longer, healthier lives.',
  },
  {
    title: 'Fellow of the European Society of Cardiology (FESC) 2023',
    subtitle:
      'The FESC title honours individuals who have distinguished themselves in the cardiovascular field. A unique and prestigious title, recognising excellence and lifetime achievement.',
  },
];

export const pastAwards: Award[] = [
  {
    title: 'Barrett-Connor Award',
    subtitle: 'Elizabeth Barrett-Connor Research Award 2023, AHA Council on Epidemiology and Prevention',
    icon: 'tabler:trophy',
  },
  {
    title: 'Paul Dudley White Scholar',
    subtitle: 'American Heart Association International Scholar Award 2023',
    icon: 'tabler:award',
  },
  {
    title: 'Best Poster Award',
    subtitle: 'Novo Nordisk Foundation Scientific Conference on Prevention of Childhood Obesity 2023',
    icon: 'tabler:presentation',
  },
  {
    title: 'EJPC Top Reviewer',
    subtitle: 'European Journal of Preventive Cardiology Reviewer of the Year 2022/2023',
    icon: 'tabler:file-check',
  },
  {
    title: 'Communicator of the Year',
    subtitle: 'University of Eastern Finland Outstanding Communication Award 2022',
    icon: 'tabler:message-circle',
  },
  {
    title: 'Young Investigator Fellow',
    subtitle: 'European Society of Cardiology Fellowship Award 2022',
    icon: 'tabler:star',
  },
  {
    title: 'Paul Dudley White Scholar',
    subtitle: 'American Heart Association International Scholar Award 2022',
    icon: 'tabler:award',
  },
  {
    title: 'Stamler Research Award',
    subtitle: 'Jeremiah and Rose Stamler Research Award 2022, American Heart Association',
    icon: 'tabler:medal',
  },
  {
    title: 'Paul Dudley White Scholar',
    subtitle: 'American Heart Association International Scholar Award 2021',
    icon: 'tabler:award',
  },
  {
    title: 'Stamler Research Award',
    subtitle: 'Jeremiah and Rose Stamler Research Award 2021, American Heart Association',
    icon: 'tabler:medal',
  },
];

type Achievement = {
  title: string;
  subtitle: string;
  year: string;
  details: string;
  icon?: string;
};

export const academicAchievements: Achievement[] = [
  {
    title: 'Clinical Research',
    subtitle: 'Harvard University, Boston, US',
    year: '2020',
    details: 'Distinction, summa cum laude, (1000/1000 points)',
    icon: 'tabler:certificate-2',
  },
  {
    title: 'Masters in Public Health/Epidemiology',
    subtitle: 'University of Eastern Finland, Kuopio, Finland',
    year: '2018',
    details: 'Distinction, summa cum laude, (5/5 points)',
    icon: 'tabler:school',
  },
  {
    title: 'Psychiatry/Mental Health',
    subtitle: 'University of Benin, Benin City, Edo State, Nigeria',
    year: '2014',
    details: 'Distinction, summa cum laude, (5/5 points)',
    icon: 'tabler:brain',
  },
  {
    title: 'ELF/Total Undergraduate Scholarship Award',
    subtitle: 'Medical Studies',
    year: '2009-2012',
    details: '4000 US dollars',
    icon: 'tabler:coin',
  },
];
