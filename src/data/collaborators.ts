// Import collaborator images
import imgVlachopoulos from '~/assets/images/collaborators/Dr. Dimitris Vlachopoulos.webp';
import imgSaner from '~/assets/images/collaborators/Dr. med. Christoph Saner.webp';
import imgSartorio from '~/assets/images/collaborators/Dr. Sartorio.webp';
import imgZachariah from '~/assets/images/collaborators/Justin Zachariah MD.webp';
import imgKaarniranta from '~/assets/images/collaborators/Kaarniranta_Kai.webp';
import imgLewandowski from '~/assets/images/collaborators/Prof Adam Lewandowski.webp';
import imgSummerbell from '~/assets/images/collaborators/Prof Carolyn Summerbell.webp';
import imgOjji from '~/assets/images/collaborators/Prof Dike Bevis Ojji.webp';
import imgMitchell from '~/assets/images/collaborators/Prof Gary F Mitchell.webp';
import imgBarker from '~/assets/images/collaborators/Prof. Alan R. Barker.jpeg';
import imgOdili from '~/assets/images/collaborators/Prof. Augustine Odili.webp';
import imgMagnussen from '~/assets/images/collaborators/Prof. Costan Magnussen.webp';
import imgWilliams from '~/assets/images/collaborators/Prof. Craig Williams.webp';
import imgLlyodJones from '~/assets/images/collaborators/Prof. Donald M. Llyod-Jones.webp';
import imgHenderson from '~/assets/images/collaborators/Prof. Mélanie Henderson.jpeg';
import imgLeeson from '~/assets/images/collaborators/Prof. Paul Leeson.webp';
import imgBaynard from '~/assets/images/collaborators/Prof. Tracy Baynard.webp';
import imgPerng from '~/assets/images/collaborators/Prof. Wei Perng.webp';
import imgOberhoffer from '~/assets/images/collaborators/Renate Oberhoffer-Fritz.webp';
import type { ImageMetadata } from 'astro';

interface Collaborator {
  name: string;
  title: string;
  affiliation: string;
  profileUrl?: string;
  image?: {
    src: string | ImageMetadata;
    alt: string;
  };
}

export const collaborators: Collaborator[] = [
  {
    name: 'Prof. Kai Kaarniranta',
    title: 'MD, PhD, Professor of Ophthalmology',
    affiliation: 'University of Eastern Finland and Chief physician, Department of Ophthalmology, Kuopio University Hospital, Finland',
    profileUrl: 'https://www.uef.fi/en/article/passion-for-better-vision-an-interview-with-kai-kaarniranta',
    image: {
      src: imgKaarniranta,
      alt: 'Prof. Kai Kaarniranta',
    },
  },
  {
    name: 'Prof. Justin Zachariah',
    title: 'MD, MPH, Associate Professor in Pediatric Cardiology',
    affiliation: "Department of Pediatrics, Texas Children's Hospital, Baylor College of Medicine, Houston, Texas, US",
    profileUrl: 'https://www.texaschildrens.org/find-a-doctor/justin-p-v-zachariah-md-mph',
    image: {
      src: imgZachariah,
      alt: 'Professor Justin Zachariah',
    },
  },
  {
    name: 'Prof. Dike Bevis Ojji',
    title: 'MD. PhD. Professor of Preventive Cardiology, Principal Investigator of Cardiovascular Research unit',
    affiliation:
      'College of Health Sciences, University of Abuja and University of Abuja Teaching Hospital, Gwagwalada, Abuja, Nigeria',
    profileUrl: 'https://health.uct.ac.za/cape-heart-institute/contacts/dike-ojjie',
    image: {
      src: imgOjji,
      alt: 'Prof. Dike Bevis Ojji',
    },
  },
  {
    name: 'Dr. Sartorio Alessandro',
    title: 'MD.',
    affiliation: 'Medical Director of the Auxo-endocrinological Experimental Research Laboratory, Italy.',
    profileUrl: 'https://www.auxologico.com/dr-alessandro-sartorio',
    image: {
      src: imgSartorio,
      alt: 'Dr. Sartorio Alessandro',
    },
  },
  {
    name: 'Prof. Gary F. Mitchell',
    title: 'MD',
    affiliation: 'Cardiovascular Engineering Inc. Norwood, MA 02062, United States',
    profileUrl: 'https://scholar.google.com/citations?user=GrKW5wwAAAAJ&hl=en',
    image: {
      src: imgMitchell,
      alt: 'Professor Gary Mitchell',
    },
  },
  {
    name: 'Prof. Carolyn Summerbell',
    title: 'PhD, Professor of Nutrition',
    affiliation: 'Department of Sport and Exercise Sciences, Durham University, UK',
    profileUrl: 'https://www.durham.ac.uk/staff/carolyn-summerbell/',
    image: {
      src: imgSummerbell,
      alt: 'Professor Carolyn Summerbell',
    },
  },
  {
    name: 'Prof. Alan R. Barker',
    title: 'PhD, Associate Professor in Paediatric Physiology and Health',
    affiliation: "Children's Health and Exercise Research Centre, University of Exeter, UK",
    profileUrl: 'https://experts.exeter.ac.uk/1337-alan-barker',
    image: {
      src: imgBarker,
      alt: 'Professor Alan Barker',
    },
  },
  {
    name: 'Prof. Tracy Baynard',
    title: 'PhD, Professor',
    affiliation:
      'Department of Exercise and Health Sciences, Manning College of Nursing & Health Sciences, University of Massachusetts, Boston, US',
    // profileUrl: 'https://www.umb.edu/academics/cnhs/faculty_staff/faculty/tracy_baynard',
    profileUrl: 'https://www.umb.edu/directory/tracybaynard/',
    image: {
      src: imgBaynard,
      alt: 'Professor Tracy Baynard',
    },
  },
  {
    name: 'Prof. Augustine Odili',
    title: 'MD, PhD, Professor of Preventive Cardiology',
    affiliation:
      'Department of Epidemiology, Circulatory Health Research Laboratory, College of Health Sciences, University of Abuja, Nigeria',
    profileUrl: 'https://www.hsph.harvard.edu/profile/augustine-odili/',
    image: {
      src: imgOdili,
      alt: 'Professor Augustine Odili',
    },
  },
  {
    name: 'Prof. Donald M. Llyod-Jones',
    title: 'MD, ScM, President of the American Heart Association 2021-2022',
    affiliation:
      'Professor of Preventive Medicine (Epidemiology), Medicine (Cardiology) and Pediatrics, Northwestern University Feinberg School of Medicine, Chicago, IL, USA',
    profileUrl: 'https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=16679',
    image: {
      src: imgLlyodJones,
      alt: 'Professor Donald M. Llyod-Jones',
    },
  },
  {
    name: 'Prof. Costan Magnussen',
    title: 'PhD, Associate Professor in Cardiovascular Epidemiology',
    affiliation:
      'The Baker Heart and Diabetes Institute, Australia; Research Centre of Applied and Preventive Cardiovascular Medicine, University of Turku, Finland',
    profileUrl: 'https://baker.edu.au/research/staff/costan-magnussen',
    image: {
      src: imgMagnussen,
      alt: 'Professor Costan Magnussen',
    },
  },
  {
    name: 'Prof. Paul Leeson',
    title: 'MD, PhD, Professor of Cardiovascular Medicine',
    affiliation:
      'Head of Oxford Cardiovascular Clinical Research Facility, Consultant Physician, University of Oxford, UK',
    profileUrl: 'https://www.rdm.ox.ac.uk/people/paul-leeson',
    image: {
      src: imgLeeson,
      alt: 'Professor Paul Leeson',
    },
  },
  {
    name: 'Prof. Adam Lewandowski',
    title: 'Deputy Chief Scientist for UK Biobank and an Associate Professor of Cardiovascular Science',
    affiliation: 'The Clinical Trial Service Unit and Epidemiological Studies Unit (CTSU)',
    profileUrl: 'https://www.ctsu.ox.ac.uk/team/adam-lewandowski',
    image: {
      src: imgLewandowski,
      alt: 'Professor Adam Lewandowski',
    },
  },
  {
    name: 'Prof. Wei Perng',
    title: 'PhD MPH, Associate Professor of Epidemiology',
    affiliation:
      'Colorado School of Public Health Associate Director of Research Training & Education, Lifecourse Epidemiology of Adiposity & Diabetes (LEAD) Center, Denver, Colorado, US',
    profileUrl: 'https://coloradosph.cuanschutz.edu/resources/directory/directory-profile/Perng-Wei-UCD6001647278',
    image: {
      src: imgPerng,
      alt: 'Professor Wei Perng',
    },
  },
  {
    name: 'Prof. Mélanie Henderson',
    title: 'MD, FRCPC, PhD',
    affiliation:
      'Head, Research Axis ‐ Metabolic and Cardiovascular Health, CHU Sainte‐Justine Pediatric Endocrinologist, Faculty of Medicine, Université de Montréal',
    profileUrl: 'https://www.chusj.org/Biography?id=bafe6470-e632-4e2f-bb6e-9a9937d7cc97&lang=en',
    image: {
      src: imgHenderson,
      alt: 'Professor Mélanie Henderson',
    },
  },
  {
    name: 'Prof. Dr. Renate Oberhoffer-Fritz',
    title: 'Professor of Pediatric Cardiology',
    affiliation:
      'Chair of Pediatric Prevention, Dean Faculty of Sport and Health Sciences, Technical University Munich, Germany',
    profileUrl: 'https://www.professoren.tum.de/en/oberhoffer-renate',
    image: {
      src: imgOberhoffer,
      alt: 'Professor Dr. Renate Oberhoffer-Fritz',
    },
  },
  {
    name: 'Prof. Craig Williams',
    title: "PhD, Director of the Children's Health & Exercise Research Centre (CHERC)",
    affiliation:
      'Professor of Paediatric Physiology and Health, Public Health and Sports Sciences, University of Exeter Medical School Faculty of Life and Health Sciences, UK',
    profileUrl: 'https://experts.exeter.ac.uk/192-craig-williams',
    image: {
      src: imgWilliams,
      alt: 'Professor Craig Williams',
    },
  },
  {
    name: 'Dr. med. Christoph Saner',
    title: 'MD, PhD, Pediatric Endocrinologist and Senior Physician',
    affiliation:
      'Department of Pediatrics, Inselspital, Bern University Hospital, University of Bern, Switzerland and Honorary Research Fellow Murdoch Children`s Research Institute Parkville, Australia',
    profileUrl: 'http://www.kinderklinik.insel.ch/de/unser-angebot/details/person/detail/christoph-saner',
    image: {
      src: imgSaner,
      alt: 'Dr. med. Christoph Saner',
    },
  },
  {
    name: 'Dr. Dimitris Vlachopoulos',
    title: 'PhD, FHEA, Senior Lecturer',
    affiliation:
      "Pediatric Exercise and Health, Children's Health and Exercise Research Centre - Public Health and Sports Sciences department Faculty of Health and Life Sciences - University of Exeter Medical School, UK",
    profileUrl: 'https://experts.exeter.ac.uk/26701-dimitris-vlachopoulos',
    image: {
      src: imgVlachopoulos,
      alt: 'Dr. Dimitris Vlachopoulos',
    },
  },
];

export const items = collaborators.map((collaborator) => ({
  title: collaborator.name,
  subtitle: collaborator.title,
  description: collaborator.affiliation,
  image: collaborator.image,
  url: collaborator.profileUrl,
}));
