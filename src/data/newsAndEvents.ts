import imgAgbajeCorsiMadrid from '~/assets/images/news-and-events/agbaje-douglas-corsi-esc-madrid-2025.webp';
import imgAgbajeZorzanelliMadrid from '~/assets/images/news-and-events/agbaje-zorzanelli-rocha-esc-madrid-2025.webp';
import imgAgbajeAsnExecutive from '~/assets/images/news-and-events/andrew-agbaje-asn-foundation-executive-2025.webp';
import imgAgbajeCatiaMartins1 from '~/assets/images/news-and-events/andrew-agbaje-catia-martins-networking-1.webp';
import imgAgbajeCatiaMartins2 from '~/assets/images/news-and-events/andrew-agbaje-catia-martins-networking-2.webp';
import imgAgbajeEcoMalaga from '~/assets/images/news-and-events/andrew-agbaje-eco-malaga-2025.webp';
import imgAgbajeEcoVenice from '~/assets/images/news-and-events/andrew-agbaje-eco-venice-2024.webp';
import imgAgbajeEndoAward from '~/assets/images/news-and-events/andrew-agbaje-endo-outstanding-abstract-2024.webp';
import imgAgbajeFinkelsteinAward from '~/assets/images/news-and-events/andrew-agbaje-julia-finkelstein-award-2025.webp';
import imgAgbajeMoustaidMoussaSuskind from '~/assets/images/news-and-events/andrew-agbaje-naima-moustaid-moussa-robert-suskind-2025.webp';
import imgAgbajeNutritionPresentation from '~/assets/images/news-and-events/andrew-agbaje-nutrition-presentation-2025.webp';
import imgCorsiAhaNewOrleans from '~/assets/images/news-and-events/douglas-corsi-aha-scientific-sessions-new-orleans-2025.webp';
import imgCorsiEscMadrid1 from '~/assets/images/news-and-events/douglas-corsi-esc-madrid-presentation-1.webp';
import imgCorsiEscMadrid2 from '~/assets/images/news-and-events/douglas-corsi-esc-madrid-presentation-2.webp';
import imgCorsiEscMadrid3 from '~/assets/images/news-and-events/douglas-corsi-esc-madrid-presentation-3.webp';
import imgCorsiFusterForum from '~/assets/images/news-and-events/douglas-corsi-fuster-prevention-forum-june-2026.webp';
import imgMahidereEcoIstanbul1 from '~/assets/images/news-and-events/mahidere-ali-european-congress-obesity-istanbul-1.webp';
import imgMahidereEcoIstanbul2 from '~/assets/images/news-and-events/mahidere-ali-european-congress-obesity-istanbul-2.webp';
import type { ImageMetadata } from 'astro';

interface NewsAndEvent {
  id: string;
  dateLabel: string;
  datetime: string;
  caption: string;
  images: ImageMetadata[];
}

export const newsAndEvents: NewsAndEvent[] = [
  {
    id: 'douglas-corsi-fuster-prevention-forum-2026',
    dateLabel: 'June 2026',
    datetime: '2026-06',
    caption:
      'Dr. Douglas R. Corsi, with the inaugural cohort of the American College of Cardiology inaugural Fuster Prevention Forum, ACC Heart House, Washington, DC, June 2026.',
    images: [imgCorsiFusterForum],
  },
  {
    id: 'mahidere-ali-european-congress-obesity-2026',
    dateLabel: 'May 2026',
    datetime: '2026-05',
    caption:
      'Dr. Mahidere Ali, presenting an abstract at the European Congress on Obesity in Istanbul, Turkey, May 2026.',
    images: [imgMahidereEcoIstanbul1, imgMahidereEcoIstanbul2],
  },
  {
    id: 'douglas-corsi-aha-scientific-sessions-2025',
    dateLabel: 'November 2025',
    datetime: '2025-11',
    caption:
      'Dr. Douglas Corsi, presenting an abstract at the American Heart Association Scientific Sessions in New Orleans, US, November 2025.',
    images: [imgCorsiAhaNewOrleans],
  },
  {
    id: 'agbaje-zorzanelli-rocha-esc-congress-2025',
    dateLabel: 'August 2025',
    datetime: '2025-08',
    caption:
      'Prof. Agbaje and Dr. V. Zorzanelli Rocha (Brazil) co-chaired an abstract session at the European Society of Cardiology Congress in Madrid, Spain, August 2025.',
    images: [imgAgbajeZorzanelliMadrid],
  },
  {
    id: 'agbaje-corsi-esc-congress-2025',
    dateLabel: 'August 2025',
    datetime: '2025-08',
    caption:
      'Prof. Agbaje and Dr. Douglas Corsi at the European Society of Cardiology Congress in Madrid, Spain, August 2025.',
    images: [imgAgbajeCorsiMadrid],
  },
  {
    id: 'douglas-corsi-esc-congress-presentation-2025',
    dateLabel: 'August 2025',
    datetime: '2025-08',
    caption:
      'Dr. Douglas Corsi, presenting an abstract at the European Society of Cardiology Congress in Madrid, Spain, August 2025.',
    images: [imgCorsiEscMadrid1, imgCorsiEscMadrid2, imgCorsiEscMadrid3],
  },
  {
    id: 'andrew-agbaje-eco-session-2025',
    dateLabel: 'May 2025',
    datetime: '2025-05',
    caption:
      'Prof. Andrew Agbaje chaired the European Society of Cardiology and European Association for the Study of Obesity Congress Session in Malaga, Spain, May 2025.',
    images: [imgAgbajeEcoMalaga],
  },
  {
    id: 'andrew-agbaje-julia-finkelstein-awards-2025',
    dateLabel: 'June 2025',
    datetime: '2025-06',
    caption:
      'Prof. Andrew Agbaje and Prof. Julia Finkelstein, inaugural Fleming Quaade and Henrick Dam awardees of the American Society for Nutrition, Orlando, Florida, US, June 2025.',
    images: [imgAgbajeFinkelsteinAward],
  },
  {
    id: 'catia-martins-networking-nutrition-2025',
    dateLabel: 'June 2025',
    datetime: '2025-06',
    caption: 'Networking discussion with Prof. Catia Martins at NUTRITION 2025, Orlando, Florida, US, June 2025.',
    images: [imgAgbajeCatiaMartins1, imgAgbajeCatiaMartins2],
  },
  {
    id: 'andrew-agbaje-presentation-nutrition-2025',
    dateLabel: 'June 2025',
    datetime: '2025-06',
    caption: 'Prof. Agbaje’s presentation at NUTRITION 2025 in Orlando, Florida, US, June 2025.',
    images: [imgAgbajeNutritionPresentation],
  },
  {
    id: 'andrew-agbaje-asn-foundation-executive-2025',
    dateLabel: 'June 2025',
    datetime: '2025-06',
    caption:
      'Prof. Andrew Agbaje with the American Society for Nutrition Foundation Executive and Profs David Allison and Arne Astrup in Orlando, Florida, US, June 2025.',
    images: [imgAgbajeAsnExecutive],
  },
  {
    id: 'asn-president-agbaje-suskind-discussion-2025',
    dateLabel: 'June 2025',
    datetime: '2025-06',
    caption:
      'Discussion between 2025/2026 President of the American Society for Nutrition Prof. Naïma Moustaïd-Moussa, Prof. Agbaje, and Dr. Robert Suskind at NUTRITION 2025 in Orlando, US.',
    images: [imgAgbajeMoustaidMoussaSuskind],
  },
  {
    id: 'andrew-agbaje-eco-venice-2024',
    dateLabel: '2024',
    datetime: '2024',
    caption: 'Prof. Andrew Agbaje’s presentation at the European Congress on Obesity in Venice, Italy, 2024.',
    images: [imgAgbajeEcoVenice],
  },
  {
    id: 'andrew-agbaje-endo-award-2024',
    dateLabel: '2024',
    datetime: '2024',
    caption:
      'Prof. Andrew Agbaje received an outstanding abstract award at the Endocrine Society Congress, ENDO 2024, in Boston, US.',
    images: [imgAgbajeEndoAward],
  },
];
