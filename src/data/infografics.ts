import img25 from '~/assets/images/infographic/Accelerometer Sedentary Time.webp';
import img1 from '~/assets/images/infographic/Arterial Stiffness Adolescence Impact.webp';
import img13 from '~/assets/images/infographic/Arterial Stiffness Heart Damage.webp';
import img6 from '~/assets/images/infographic/Arterial Stiffness Insulin Resistance HDL.webp';
import img10 from '~/assets/images/infographic/Arterial Stiffness Metabolic Syndrome.webp';
import img3 from '~/assets/images/infographic/Atherosclerosis Lipid Screening Intervention.webp';
import img8 from '~/assets/images/infographic/Blood Pressure Risk in Adolescents.webp';
import img23 from '~/assets/images/infographic/Breaking Every Hour of Sedentary.webp';
import img7 from '~/assets/images/infographic/Cardiac Hypertrophy Cutpoints.webp';
import img11 from '~/assets/images/infographic/Childhood Light Activity Reduces Inflammation.webp';
import img14 from '~/assets/images/infographic/Childhood Obesity Light Activity.webp';
import img15 from '~/assets/images/infographic/Childhood Sedentariness and Cholesterol.webp';
import img20 from '~/assets/images/infographic/Childhood Sedentariness and Diabetes.webp';
import img21 from '~/assets/images/infographic/Childhood Sedentariness Heart Damage.webp';
import img19 from '~/assets/images/infographic/Childhood Sedentariness Vascular Damage.webp';
import img22 from '~/assets/images/infographic/Childhood Sedentariness.webp';
import img16 from '~/assets/images/infographic/Cholesterol Heart Damage Study.webp';
import img12 from '~/assets/images/infographic/Cholesterol passport for adolescents to halt the world’s deadliest disease – atherosclerosis.webp';
import img5 from '~/assets/images/infographic/Insulin Resistance Mid Adolescence.webp';
import img4 from '~/assets/images/infographic/Low-Grade Inflammation Atherosclerosis.webp';
import img24 from '~/assets/images/infographic/Persistent Tobacco Smoking.webp';
import img9 from '~/assets/images/infographic/Sedentary Time Adolescents Heart.webp';
import img26 from '~/assets/images/infographic/Sedentary Time Tobacco Study 2503 Children.webp';
import img17 from '~/assets/images/infographic/Teenagers Insulin Resistance Risk.webp';
import img2 from '~/assets/images/infographic/Weight Gain Childhood Vascular Health.webp';
import img18 from '~/assets/images/waist-to-height-calculator/Waist to Height Ratio vs BMI Press Release.webp';
import type { ImageMetadata } from 'astro';
import { getYear, parseISO } from 'date-fns';

interface InfoGrafic {
  title: string;
  date: string;
  url?: string;
  doi?: string;
  description?: string;
  type: 'physical-activity' | 'cardiovascular-health' | 'body-composition' | 'blood-pressure' | 'metabolic-health';
  image: {
    src: string | ImageMetadata;
    alt: string;
  };
}

export const infografics: InfoGrafic[] = [
  {
    title:
      'Accelerometer-based sedentary time and physical activity with incident and progressive tobacco smoking in 2503 children: A 13-year mediation and temporal longitudinal study',
    date: '2025-02-01',
    type: 'cardiovascular-health',
    description: `In 1931 children followed up from age 10 to 24 years, persistent tobacco smoking from childhood through young adulthood caused structural and functional heart damage. Tobacco smoking excessively increases heart mass during growth from adolescence to young adulthood. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/persistent-tobacco-smoking-from-childhood-may-cause-heart-damage-by-the-mid-twenties',
    doi: '10.1016/j.brat.2024.104674',
    image: {
      src: img26,
      alt: 'Sedentary Time Tobacco Study 2503 Children',
    },
  },
  {
    title: 'Incidental and Progressive Tobacco Smoking in Childhood and Subsequent Risk of Premature Cardiac Damage',
    date: '2024-12-11',
    type: 'cardiovascular-health',
    description: `In 1931 children followed up from age 10 to 24 years, persistent tobacco smoking from childhood through young adulthood caused structural and functional heart damage. Tobacco smoking excessively increases heart mass during growth from adolescence to young adulthood. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/persistent-tobacco-smoking-from-childhood-may-cause-heart-damage-by-the-mid-twenties',
    doi: '10.1016/j.jacc.2024.09.1229',
    image: {
      src: img24,
      alt: 'Persistent tobacco smoking',
    },
  },
  {
    title:
      'Lean Mass Longitudinally Confounds Sedentary Time and Physical Activity With Blood Pressure Progression in 2513 Children',
    date: '2024-11-13',
    type: 'physical-activity',
    url: 'https://www.uef.fi/en/article/breaking-every-hour-of-sedentary-time-with-10-mins-of-light-exercise-significantly-reduced-blood',
    description:
      'In 2513 children followed up from age 11 to 24 years, increased sedentary time from childhood through young adulthood significantly increased systolic blood pressure. However, a simulation replacing 10 minutes every hour of sedentary time in childhood, adolescence, and young adulthood with 10 minutes of light physical activity resulted in a cumulative reduction of systolic blood pressure by -3 mmHg. Image: Andrew Agbaje.',
    doi: '10.1002/jcsm.13639',
    image: {
      src: img23,
      alt: 'Breaking every hour of sedentary time',
    },
  },
  {
    title:
      'Accelerometer-based sedentary time and physical activity from childhood through young adulthood with progressive cardiac changes: a 13-year longitudinal study.',
    date: '2024-07-05',
    type: 'physical-activity',
    description: `A follow-up of 1682 children from ages 11 through 24 years showed that increased sedentariness from childhood through young adulthood may cause worsening premature heart damage. Image: Andrew Agbaje.
About Children of the 90s 

Based at the University of Bristol, Children of the 90s, also known as the Avon Longitudinal Study of Parents and Children (ALSPAC), is a long-term health research project that enrolled more than 14,000 pregnant women in 1991 and 1992.  It has been following the health and development of the parents, their children and now their grandchildren in detail ever since. It receives core funding from the Medical Research Council, the Wellcome Trust and the University of Bristol.`,
    url: 'https://www.uef.fi/en/article/aha-names-andrew-agbajes-study-among-biggest-advances-in-cardiovascular-research-for-2024',
    doi: '10.1093/eurjpc/zwae129',
    image: {
      src: img25,
      alt: 'Accelerometer-based sedentary time',
    },
  },
  {
    title:
      'Accelerometer-based sedentary time and physical activity with MASLD and liver cirrhosis in 2684 British adolescents',
    date: '2024-06-03',
    type: 'physical-activity',
    description: `In 2684 children followed up from age 11 to 24 years, increased sedentariness from childhood increased the risk of severe fatty liver diseases and liver cirrhosis. Light physical activity effectively reversed the risk of premature liver damage. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/childhood-sedentariness-can-cause-severe-fatty-liver-disease-and-liver-cirrhosis',
    doi: '10.1038/s44355-024-00002-y',
    image: {
      src: img22,
      alt: 'Childhood sedentariness can cause severe fatty liver disease and liver cirrhosis',
    },
  },
  {
    title:
      'Accelerometer-based Sedentary Time and Physical Activity from Childhood through Young Adulthood with Progressive Cardiac Changes: A 13-Year Longitudinal Study',
    date: '2024-05-07',
    type: 'physical-activity',
    description: ``,
    url: 'https://www.uef.fi/en/article/childhood-sedentariness-linked-to-premature-heart-damage-light-physical-activity-reversed-the-risk',
    doi: '10.1093/eurjpc/zwae129',
    image: {
      src: img21,
      alt: 'Childhood sedentariness linked to premature heart damage',
    },
  },
  {
    title:
      'The Interactive Effects of Sedentary Time, Physical Activity, and Fat Mass on Insulin Resistance in the Young Population',
    date: '2024-03-05',
    type: 'physical-activity',
    description: `In 792 children followed up from age 11 to 24 years, increased sedentariness from childhood through young adulthood worsened insulin concentration, especially in children and adolescents with overweight and obesity. Light physical activity reduced excessive insulin and lowered insulin resistance. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/childhood-sedentariness-causes-excessive-insulin-raising-the-risk-of-type-2-diabetes',
    doi: '10.1210/clinem/dgae135',
    image: {
      src: img20,
      alt: 'Childhood sedentariness causes excessive insulin, raising the risk of type 2 diabetes',
    },
  },
  {
    title:
      'Accelerometer-based sedentary time, light physical activity, and moderate-to-vigorous physical activity from childhood with arterial stiffness and carotid IMT progression: A 13-year longitudinal study of 1339 children',
    date: '2024-03-21',
    type: 'physical-activity',
    description: `In 1339 children followed up from age 11 to 24 years, increased sedentariness from childhood through young adulthood accelerated premature vascular damage. Light physical activity reduced arterial stiffness, and increasing time in light physical activity would confer more vascular health benefits. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/childhood-sedentariness-accelerates-premature-vascular-damage',
    doi: '10.1111/apha.14132',
    image: {
      src: img19,
      alt: 'Childhood sedentariness accelerates premature vascular damage',
    },
  },
  {
    title:
      'Waist-circumference-to-height-ratio had better longitudinal agreement with DEXA-measured fat mass than BMI in 7237 children',
    date: '2024-03-05',
    type: 'body-composition',
    description: `Waist circumference-to-height ratio may be universally adopted, as non-invasive and inexpensive fat mass overweight and obesity surveillance, monitoring, and prevention initiatives in routine paediatric healthcare practice, also in low-resource settings. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/waist-to-height-ratio-detects-fat-obesity-in-children-and-adolescents-significantly-better-than-bmi',
    doi: '10.1038/s41390-024-03112-8',
    image: {
      src: img18,
      alt: 'Waist-​to-height ratio detects fat obesity in children and adolescents significantly better than BMI',
    },
  },
  {
    title:
      'DEXA-based Fat Mass with the Risk of Worsening Insulin Resistance in Adolescents: A 9-Year Temporal and Mediation Study',
    date: '2024-01-04',
    type: 'body-composition',
    description: ``,
    url: 'https://www.uef.fi/en/article/increased-body-and-abdominal-fat-caused-insulin-resistance-already-in-teenagers-raising-type-2',
    doi: 'doi.org/10.1210/clinem/dgae004',
    image: {
      src: img17,
      alt: 'Increased body and abdominal fat caused insulin resistance already in teenagers, raising type 2 diabetes risk',
    },
  },
  {
    title:
      'Increasing lipids with risk of worsening cardiac damage in 1595 adolescents: A 7-year longitudinal and mediation study',
    date: '2023-12-27',
    type: 'cardiovascular-health',
    description: `Increased cholesterol levels in adolescence potentially cause heart damage in adolescence and young adulthood, however, light physical activity can significantly reduce cholesterol levels. An adolescent cholesterol passport similar to a vaccination card tracks cholesterol levels during a once-in-10-year visit to a primary health center. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/elevated-cholesterol-in-adolescence-causes-premature-heart-damage-in-a-seven-year-follow-up',
    doi: '10.1016/j.atherosclerosis.2023.117440',
    image: {
      src: img16,
      alt: 'Elevated cholesterol in adolescence causes premature heart damage in a seven-year follow-up',
    },
  },
  {
    title:
      'Associations of Sedentary Time and Physical Activity from Childhood with Lipids: A 13-Year Mediation and Temporal Study',
    date: '2023-12-14',
    type: 'physical-activity',
    description: `Increased sedentary time from childhood through young adulthood may potentially cause elevated cholesterol and dyslipidaemia in adolescence and young adulthood, however, light physical activity can significantly reverse worsening dyslipidaemia. The increase in fat mass from childhood remarkably dampened the effect of moderate-to-vigorous physical activity on lowering cholesterol. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/childhood-sedentariness-causes-elevated-cholesterol-but-light-physical-activity-may-neutralize-it',
    doi: '10.1210/clinem/dgad688',
    image: {
      src: img15,
      alt: 'Childhood sedentariness causes elevated cholesterol but light physical activity may neutralize it',
    },
  },
  {
    title:
      'Effects of accelerometer-based sedentary time and physical activity on DEXA-measured fat mass in 6059 children',
    date: '2023-12-12',
    type: 'physical-activity',
    description: `Increased sedentary time from 6 hours/day in childhood to 9 hours/day in young adulthood may potentially cause a significant increase in total body fat mass and trunk fat mass during growth from childhood to young adulthood. However, engaging in at least 3 hours/day of light physical activity may be more effective than 60 minutes/day of moderate-to-vigorous physical activity in reversing and preventing worsening fat mass obesity. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/light-physical-activity-shows-great-promise-in-reversing-childhood-obesity-caused-by-being-sedentary',
    doi: '10.1038/s41467-023-43316-w',
    image: {
      src: img14,
      alt: 'Light physical activity shows great promise in reversing childhood obesity caused by being sedentary',
    },
  },
  {
    title:
      'Arterial Stiffness but not Carotid Intima-Media Thickness Progression Precede Premature Structural and Functional Cardiac Damage in Youth: A 7-Year Temporal and Mediation Longitudinal Study',
    date: '2023-08-03',
    type: 'cardiovascular-health',
    description: `Arterial stiffness may cause premature cardiac damage in youth, but decreasing blood pressure and insulin resistance may reduce this effect by fifty percent. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/arterial-stiffness-may-cause-and-worsen-heart-damage-among-adolescents-by-increasing-blood-pressure',
    doi: '10.1016/j.atherosclerosis.2023.117197',
    image: {
      src: img13,
      alt: 'Arterial stiffness may cause and worsen heart damage among adolescents by increasing blood pressure and insulin resistance',
    },
  },
  {
    title:
      "Adolescents Cholesterol Passport: A Universal Pediatric Lipid Screening Tool to Combat Atherosclerosis - the World's Deadliest Scourge",
    date: '2023-06-28',
    type: 'cardiovascular-health',
    description: `A dialogue between a teenager and a preventive health nurse during visit for cholesterol screening and collection of cholesterol passport. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/cholesterol-passport-for-adolescents-to-halt-the-worlds-deadliest-disease-atherosclerosis',
    doi: '10.3389/fped.2023.1228483',
    image: {
      src: img12,
      alt: 'Cholesterol passport for adolescents to halt the world’s deadliest disease – atherosclerosis',
    },
  },
  {
    title:
      'Longitudinal Mediating effect of Fatmass and Lipids on Sedentary Time, Light PA, and MVPA with Inflammation in Youth',
    date: '2023-06-13',
    type: 'physical-activity',
    description: `Increased sedentary time from childhood through young adulthood may potentially cause increased inflammation in young adulthood, however, light physical activity but not moderate-to-vigorous physical activity can significantly reverse worsening inflammation. The increase in fat mass from childhood did not explain the adverse effect of sedentary time on inflammation. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/light-physical-activity-from-childhood-is-more-effective-than-mvpa-in-reducing-inflammation-caused',
    doi: '10.1210/clinem/dgad354',
    image: {
      src: img11,
      alt: 'Light physical activity from childhood is more effective than MVPA in reducing inflammation caused by being sedentary',
    },
  },
  {
    title:
      'Arterial stiffness preceding metabolic syndrome in 3,862 adolescents: a mediation and temporal causal longitudinal birth cohort study',
    date: '2023-05-17',
    type: 'cardiovascular-health',
    description: `The presence of any three of high blood pressure, high trunk fat mass, high fasting glucose, high fasting triglyceride and low fasting high-density lipoprotein cholesterol describes metabolic syndrome. Arterial stiffness in adolescents measured with carotid-femoral pulse wave velocity may potentially cause metabolic syndrome in young adulthood via an increase in fasting insulin resistance and low-density lipoprotein cholesterol. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/arterial-stiffness-may-cause-metabolic-syndrome-in-adolescents-via-an-increase-in-fasting-insulin',
    doi: '10.1152/ajpheart.00126.2023',
    image: {
      src: img10,
      alt: 'Arterial stiffness may cause metabolic syndrome in adolescents via an increase in fasting insulin and LDL-​cholesterol',
    },
  },
  {
    title:
      'Associations of accelerometer-based sedentary time, light physical activity and moderate-to-vigorous physical activity with resting cardiac structure and function in adolescents according to sex, fat mass, lean mass, BMI, and hypertensive status',
    date: '2023-04-10',
    type: 'physical-activity',
    description: `An average of 8 hours of sedentary time/day may increase cardiac mass three-fold more than spending 49 minutes/day of moderate-to-vigorous physical activity-related increase in cardiac mass. Decreasing sedentary time should be prioritized among adolescents. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/sedentary-time-may-significantly-enlarge-adolescents-heart',
    doi: '10.1111/sms.14365',
    image: {
      src: img9,
      alt: 'Sedentary time may significantly enlarge adolescents’ heart',
    },
  },
  {
    title: 'Elevated Blood Pressure and Worsening Cardiac Damage During Adolescence',
    date: '2023-06-01',
    type: 'blood-pressure',
    description: `Elevated blood pressure and hypertension may cause premature cardiac damage in youth. Blood pressure screening and prevention are urgently needed in the young population. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/blood-pressure-greater-than-130-85-mmhg-can-cause-heart-damage-in-adolescents-the-risk-gets-doubled',
    doi: '10.1016/j.jpeds.2023.02.018',
    image: {
      src: img8,
      alt: 'Blood pressure greater than 130/85 mmHg can cause heart damage in adolescents – the risk gets doubled in 7 years',
    },
  },
  {
    title:
      'Longitudinal Left Ventricular Mass Indexing for DEXA-Measured Lean Mass and Fat Mass: Novel Normative Reference Centiles in Post-Pubertal Adolescents and Young Adults',
    date: '2023-03-23',
    type: 'cardiovascular-health',
    description: `New cutpoints for identifying adolescents and young adults at risk of an enlarged heart and premature cardiac damage. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/researchers-suggest-novel-cutpoints-for-diagnosing-cardiac-hypertrophy-in-adolescents-and-young',
    doi: '10.1152/ajpheart.00045.2023',
    image: {
      src: img7,
      alt: 'Researchers suggest novel cutpoints for diagnosing cardiac hypertrophy in adolescents and young adults',
    },
  },
  {
    title:
      'Effect of Arterial Stiffness and Carotid Intima-Media Thickness Progression on the Risk of Dysglycemia, Insulin Resistance, and Dyslipidemia: a Temporal Causal Longitudinal Study',
    date: '2022-01-18',
    type: 'cardiovascular-health',
    description: `Higher arterial stiffness seems to independently cause hyperinsulinemia and insulin resistance among adolescents and young adults. The prevention of the risk factors for the development of young-onset type 2 diabetes among the young population may include strategies to reduce arterial stiffness. Image Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/arterial-stiffness-in-adolescence-may-potentially-cause-insulin-resistance-and-low-hdl-cholesterol',
    doi: '10.1161/HYPERTENSIONAHA.121.18754',
    image: {
      src: img6,
      alt: 'Arterial stiffness in adolescence may potentially cause insulin resistance and low HDL-​cholesterol in young adulthood',
    },
  },
  {
    title:
      'Cumulative insulin resistance and hyperglycaemia with arterial stiffness and carotid IMT progression in 1779 adolescents: A 9-Year Longitudinal Cohort Study',
    date: '2023-03-10',
    type: 'metabolic-health',
    description: `Over a 9-year follow-up period from mid-adolescence to young adulthood, insulin resistance decreased during growth from ages 15 through 17 years but increased from ages 17 through 24 years. The decrease in insulin resistance seemed to protect against worsening arterial stiffness, a sign of premature vascular damage. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/natural-drop-in-insulin-resistance-in-mid-adolescence-protects-against-worsening-arterial-stiffness',
    doi: '10.1152/ajpendo.00008.2023',
    image: {
      src: img5,
      alt: 'Natural drop in insulin resistance in mid-​adolescence protects against worsening arterial stiffness if sustained',
    },
  },
  {
    title:
      'Temporal longitudinal associations of carotid-femoral pulse wave velocity and carotid intima-media thickness with resting heart rate and inflammation in youth',
    date: '2023-03-10',
    type: 'cardiovascular-health',
    description: `Over a 7-year follow-up period from adolescence to young adulthood, increased low-grade inflammation was causally associated with increased arterial stiffness and carotid intima-media thickness, which are signs of premature vascular damage and subclinical atherosclerosis. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/low-grade-inflammation-may-cause-arterial-stiffness-and-preclinical-atherosclerosis-in-otherwise',
    doi: '10.1152/japplphysiol.00701.2022',
    image: {
      src: img4,
      alt: 'Low-grade inflammation may cause arterial stiffness and preclinical atherosclerosis in otherwise healthy adolescents',
    },
  },
  {
    title:
      'Cumulative Dyslipidemia with Arterial Stiffness and Carotid IMT Progression in Asymptomatic Adolescents: A Simulated Intervention Longitudinal Study Using Temporal Inverse Allocation Model',
    date: '2023-01-01',
    type: 'cardiovascular-health',
    description: `Over a 9-year follow-up period from adolescence to young adulthood, elevated lipid and dyslipidemia levels were associated with worsening subclinical atherosclerosis. However, using a temporal inverse allocation model recently developed for simulating treatment intervention, the study revealed that an attempt at lowering cholesterol in young adulthood may be too late and ineffective in stopping atherosclerosis progression. Age 17 years appear to be the golden opportunity to treat and stop atherosclerosis progression in a general population of asymptomatic adolescents.  Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/atherosclerosis-may-be-stopped-if-lipid-screening-and-dyslipidemia-intervention-begin-in-adolescence',
    doi: '10.1016/j.atherosclerosis.2022.11.011',
    image: {
      src: img3,
      alt: 'Atherosclerosis may be stopped if lipid screening and dyslipidemia intervention begin in adolescence',
    },
  },
  {
    title:
      'Cumulative muscle mass and blood pressure but not fat mass drives arterial stiffness and carotid intima-media thickness progression in the young population and is unrelated to vascular organ damage',
    date: '2022-10-14',
    type: 'body-composition',
    description: `During growth from childhood (9 years) to young adulthood (24 years), body fat mass tripled as children gained weight. However, this increase in body fat was not associated with signs of subclinical atherosclerosis progression likely due to the significant increase in muscle mass. A muscle mass-to-fat mass ratio of 4:1 (MM4-FM1) may promote excellent vascular health from childhood. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/weight-gain-from-childhood-with-optimal-muscle-to-fat-mass-ratio-may-be-a-sign-of-excellent-vascular',
    doi: '10.1038/s41440-022-01065-1',
    image: {
      src: img2,
      alt: 'Weight gain from childhood with optimal muscle-to-fat mass ratio may be a sign of excellent vascular health',
    },
  },
  {
    title:
      'Effects of Arterial Stiffness and Carotid Intima-Media Thickness Progression on the Risk of Overweight/Obesity and Elevated Blood Pressure/Hypertension: a Cross-Lagged Cohort Study',
    date: '2022-10-17',
    type: 'cardiovascular-health',
    description: `Atherosclerotic traits referred to as arterial stiffness seem to independently cause elevated blood pressure and hypertension among adolescents and young adults. The prevention and treatment of hypertension among the young population should include strategies to decrease arterial stiffness. Image: Andrew Agbaje.`,
    url: 'https://www.uef.fi/en/article/arterial-stiffness-in-adolescence-may-potentially-cause-hypertension-and-obesity-in-young-adulthood',
    doi: '10.1161/HYPERTENSIONAHA.121.18449',
    image: {
      src: img1,
      alt: 'Arterial stiffness in adolescence may potentially cause hypertension and obesity in young adulthood',
    },
  },
];

export const infographicTypes = [...new Set(infografics.map((item) => item.type))];

// Group infographic items by year
export const itemsByYear = infografics.reduce(
  (acc, item) => {
    const date = parseISO(item.date);
    const year = getYear(date);
    acc[year] = [...(acc[year] || []), item];
    return acc;
  },
  {} as Record<number, typeof infografics>
);

// Sort infografics within each year by date
Object.keys(itemsByYear).forEach((year) => {
  itemsByYear[Number(year)].sort((a, b) => {
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);
    return dateB.getTime() - dateA.getTime();
  });
});

// Sort years in descending order
export const sortedYears = Object.keys(itemsByYear)
  .map(Number)
  .sort((a, b) => b - a);
