// Import collaborator images
import imgBarker from '~/assets/images/collaborators/Prof. Alan R. Barker.jpeg';
import imgBaynard from '~/assets/images/collaborators/Prof. Tracy Baynard.webp';
import imgOdili from '~/assets/images/collaborators/Prof. Augustine Odili.webp';
import imgLlyodJones from '~/assets/images/collaborators/Prof. Donald M. Llyod-Jones.webp';
import imgMagnussen from '~/assets/images/collaborators/Prof. Costan Magnussen.webp';
import imgLewandowski from '~/assets/images/collaborators/Prof. Adam Lewandowski.webp';
import imgPerng from '~/assets/images/collaborators/Prof. Wei Perng.webp';
import imgHenderson from '~/assets/images/collaborators/Prof. Mélanie Henderson.jpeg';
import imgOberhoffer from '~/assets/images/collaborators/Renate Oberhoffer-Fritz.webp';
import imgWilliams from '~/assets/images/collaborators/Prof. Craig Williams.webp';
import imgSaner from '~/assets/images/collaborators/Dr. med. Christoph Saner.webp';
import imgVlachopoulos from '~/assets/images/collaborators/Dr. Dimitris Vlachopoulos.webp';
import imgZachariah from '~/assets/images/collaborators/Justin Zachariah MD.webp';
import imgLeeson from '~/assets/images/collaborators/Prof. Paul Leeson.webp';
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
    name: 'Prof. Gary F. Mitchell',
    title: 'MD',
    affiliation: 'Cardiovascular Engineering Inc. Norwood, MA 02062, United States',
  },
  {
    name: 'Prof. Justin Zacharias',
    title: 'MD, MPH, Associate Professor in Pediatric Cardiology',
    affiliation: "Department of Pediatrics, Texas Children's Hospital, Baylor College of Medicine, Houston, Texas, US",
    profileUrl: 'https://www.texaschildrens.org/find-a-doctor/justin-p-v-zachariah-md-mph',
    image: {
      src: imgZachariah,
      alt: 'Professor Justin Zacharias',
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
    title: 'DPhil, FESC, Associate Professor of Cardiovascular Science',
    affiliation:
      'British Heart Foundation Intermediate Research Fellow, Deputy Director of the Oxford Cardiovascular Clinical Research Facility, Oxford University, UK',
    // profileUrl: 'https://www.rdm.ox.ac.uk/people/adam-lewandowski',
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

// 1. Prof. Alan R. Barker, PhD, Associate Professor in Paediatric Physiology and Health, Children's Health and Exercise
// Research Centre, University of Exeter, UK
// https://experts.exeter.ac.uk/1337-alan-barker
// 2.
// Prof. Gary F. Mitchell, MD, Cardiovascular Engineering Inc. Norwood, MA 02062, United States 3. Prof. Justin
// Zacharias, MD, MPH, Associate Professor in Pediatric Cardiology, Department of Pediatrics, Texas Children's Hospital,
// Baylor College of Medicine, Houston, Texas, US
// https://www.texaschildrens.org/find-a-doctor/justin-p-v-zachariah-md-mph
// 4. Prof. Tracy Baynard, PhD, Professor,
// Department of Exercise and Health Sciences, Manning College of Nursing & Health Sciences, University of Massachusetts,
// Boston, US
// https://www.umb.edu/academics/cnhs/faculty_staff/faculty/tracy_baynard
// 5. Prof. Augustine Odili, MD, PhD,
// Professor of Preventive Cardiology, Department of Epidemiology, Circulatory Health Research Laboratory, College of
// Health Sciences, University of Abuja, Nigeria.
// https://www.hsph.harvard.edu/profile/augustine-odili/
// 6. Prof. Donald
// M. Llyod-Jones, MD, ScM, President of the American Heart Association 2021-2022, Professor of Preventive Medicine
// (Epidemiology), Medicine (Cardiology) and Pediatrics. Northwestern University Feinberg School of Medicine, Chicago,
// IL, USA.
// https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=16679
// 7. Prof. Costan Magnussen,
// PhD, Associate Professor in Cardiovascular Epidemiology, The Baker Heart and Diabetes Institute, Australia; Research
// Centre of Applied and Preventive Cardiovascular Medicine, University of Turku, Turku, Finland; Centre for Population
// Health Research, Turku University Hospital, University of Turku, Turku, Finland.
// https://baker.edu.au/research/staff/costan-magnussen
// 8. Prof. Paul Leeson MD, PhD, Professor of Cardiovascular
// Medicine, Head of Oxford Cardiovascular Clinical Research Facility, Consultant Physician, University of Oxford, UK
// https://www.rdm.ox.ac.uk/people/paul-leeson
// 9. Prof. Adam Lewandowski DPhil, FESC, Associate Professor of
// Cardiovascular Science, British Heart Foundation Intermediate Research Fellow, Deputy Director of the Oxford
// Cardiovascular Clinical Research Facility, Oxford University, UK
// https://www.rdm.ox.ac.uk/people/adam-lewandowski
// 10.
// Prof. Wei Perng, PhD MPH, Associate Professor of Epidemiology, Colorado School of Public Health Associate Director of
// Research Training & Education, Lifecourse Epidemiology of Adiposity & Diabetes (LEAD) Center, Denver, Colorado, US
// 11.
// Prof. Mélanie Henderson, MD, FRCPC, PhD, Head, Research Axis ‐ Metabolic and Cardiovascular Health, CHU Sainte‐Justine
// Pediatric Endocrinologist, CHU Sainte‐Justine Clinical Associate Professor, Department of Pediatrics, Faculty of
// Medicine, Université de Montréal; Clinical Associate Professor ‐ Secondary Affiliation, Médecine sociale et
// préventive, Université de Montréal; Adjunct Professor, Epidemiology, Biostatistics & Occupational Health, McGill
// University
// 12. Prof. Dr. Renate Oberhoffer-Fritz, Professor of Pediatric Cardiology, Chair of Pediatric Prevention,
// Dean Faculty of Sport and Health Sciences, Technical University Munich, Germany
// 13. Prof. Craig Williams, PhD,
// Director of the Children's Health & Exercise Research Centre (CHERC), Professor of Paediatric Physiology and Health,
// Public Health and Sports Sciences, University of Exeter Medical School Faculty of Life and Health Sciences, St. Luke's
// Campus, University of Exeter, UK
// https://experts.exeter.ac.uk/192-craig-williams
// 14. Dr. med. Christoph Saner, MD, PhD, Pediatric Endocrinologist and Senior
// Physician, Department of Pediatrics, Inselspital, Bern University Hospital, University of Bern, Bern, Switzerland and
// Honorary Research Fellow Murdoch Children`s Research Institute Parkville, Australia
// http://www.kinderklinik.insel.ch/de/unser-angebot/details/person/detail/christoph-saner
// 15. Dr. Dimitris Vlachopoulos,
// PhD, FHEA, Senior Lecturer, Pediatric Exercise and Health, Children's Health and Exercise Research Centre - Public
// Health and Sports Sciences department Faculty of Health and Life Sciences - University of Exeter Medical School,
// Exeter, UK
// https://experts.exeter.ac.uk/26701-dimitris-vlachopoulos
