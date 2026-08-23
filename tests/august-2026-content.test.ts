import { readdir, readFile } from 'node:fs/promises';
import { describe, expect, test } from 'bun:test';

const read = (path: string) => readFile(new URL(path, import.meta.url), 'utf8');

const pressReleaseUrls = [
  'https://www.sciencedaily.com/releases/2026/07/260729051534.htm',
  'https://www.heart.org/en/news/2026/05/18/as-world-cup-buzz-builds-here-is-how-to-keep-soccer-healthy-and-safe-for-kids-and-teens#',
  'https://www.uef.fi/en/article/for-future-heart-health-excess-body-fat-in-late-teens-may-be-more-important-than-during-childhood',
  'https://www.medscape.com/viewarticle/childhood-adiposity-rebound-challenged-bmi-fallacy-2026a1000cpt',
  'https://nutrition.org/study-challenges-decades-old-puzzle-about-childhood-body-fat/',
  'https://www.thesun.co.uk/health/38815420/heart-issues-attack-age-start-earlier/',
  'https://www.healthday.com/healthpro-news/cardiovascular-diseases/waist-to-height-ratio-predicts-hypertension-better-than-body-mass-index',
  'https://www.drugs.com/news/waist-height-ratio-predicts-hypertension-better-than-body-mass-index-129737.html',
  'https://www.thecardiologyadvisor.com/news/waist-to-height-ratio-predicts-hypertension-better-than-body-mass-index/',
  'https://www.sciencealert.com/a-simple-calculation-may-predict-high-blood-pressure-better-than-bmi-can',
  'https://health.yahoo.com/conditions/cardiovascular/articles/simple-calculation-may-predict-high-120008699.html',
  'https://www.netmums.com/info/forget-bmi-this-simple-waist-to-height-ratio-test-could-spot-dangerous-blood-pressure-problems-much-earlier',
  'https://www.mirror.co.uk/news/health/one-thing-can-reverse-high-37210063',
];

describe('August 2026 content contracts', () => {
  test('contains every supplied press-release URL exactly once', async () => {
    const source = await read('../src/data/pressReleases.ts');

    for (const url of pressReleaseUrls) {
      expect(source.split(url)).toHaveLength(2);
    }
  });

  test('places the three collaborators in positions 3, 4, and 5 and attaches their images', async () => {
    const full = await read('../src/data/collaborators.ts');
    const source = full.split('export const collaborators')[1];
    const names = [...source.matchAll(/name: '([^']+)'/g)].map((match) => match[1]);

    expect(names.slice(2, 5)).toEqual(['Prof. Melania Manco', 'Prof. Jami Josefson', 'Dr. Kozeta Miliku']);
    expect(full).toContain("import imgManco from '~/assets/images/collaborators/melania-manco.png';");
    expect(full).toContain("import imgJosefson from '~/assets/images/collaborators/josefsonjami24_epi.webp';");
    expect(full).toContain("import imgMiliku from '~/assets/images/collaborators/Miliku Kozeta.webp';");
    expect(source).toContain('src: imgManco');
    expect(source).toContain('src: imgJosefson');
    expect(source).toContain('src: imgMiliku');
  });

  test('keeps all 18 event photos mapped across 14 source-ordered events with fill-and-crop carousel', async () => {
    const [source, page, carousel] = await Promise.all([
      read('../src/data/newsAndEvents.ts'),
      read('../src/pages/news-and-events.astro'),
      read('../src/components/widgets/NewsAndEventsCarousel.tsx'),
    ]);
    const eventArrays = [...source.matchAll(/images: \[([^\]]+)\]/g)];
    const imageCount = eventArrays.reduce(
      (total, [, images]) => total + images.split(',').filter((image) => image.trim()).length,
      0
    );
    const assets = await readdir(new URL('../src/assets/images/news-and-events/', import.meta.url));

    expect(eventArrays).toHaveLength(14);
    expect(imageCount).toBe(18);
    expect(assets.filter((asset) => asset.endsWith('.webp'))).toHaveLength(18);
    expect(page).toContain('images: [{ url: newsAndEvents[0].images[0] }]');
    expect(page).not.toContain('image: newsAndEvents[0].images[0]');
    expect(page).toContain('NewsAndEventsCarousel');
    expect(page).not.toContain('object-contain');
    expect(carousel).toContain('object-cover');
    expect(carousel).toContain('Previous photo');
    expect(carousel).toContain('Next photo');
  });

  test('exposes safe DINA navigation and the News and Events route', async () => {
    const navigation = await read('../src/navigation.ts');

    expect(navigation).toContain("href: 'https://christ-dina.org'");
    expect(navigation).toContain("target: '_blank'");
    expect(navigation).toContain("rel: 'noopener noreferrer'");
    expect(navigation).toContain("getPermalink('/news-and-events')");
  });

  test('keeps the requested team order and role labels', async () => {
    const source = (await read('../src/data/team.ts')).split('const teamMembers')[1];
    const names = [...source.matchAll(/name: '([^']+)'/g)].map((match) => match[1]);
    const ahunsiPosition = source.indexOf("name: 'Ahunsi Adeniran'");

    expect(names[8]).toBe('Basil Apaokwueze');
    expect(names[11]).toBe('Ahunsi Adeniran');
    expect(source).toContain("title: 'MD, MPH, PhD candidate'");
    expect(source.slice(ahunsiPosition, ahunsiPosition + 120)).toContain("title: 'Alumni'");
  });

  test('keeps the remaining supplied publication, media, thesis, and editorial metadata', async () => {
    const [videos, publications, infographics, thesis, editorial] = await Promise.all([
      read('../src/data/videosAndPodcasts.ts'),
      read('../src/data/publications.ts'),
      read('../src/data/infografics.ts'),
      read('../src/pages/materials/thesis.astro'),
      read('../src/components/widgets/principal-investigator/Editorial.astro'),
    ]);

    expect(videos).toContain("videoId: '4UAYX4ubMVM'");
    expect(videos).toContain("videoId: 'qyIGhXff8dk'");
    expect(videos).toContain('researchers-debunk-childhood-obesity-theory.webp');
    expect(publications).toContain("doi: '10.1093/ejendo/lvag044'");
    expect(infographics).toContain("doi: '10.1093/ejendo/lvag044'");
    expect(infographics).toContain("doi: '10.1016/j.tjnut.2026.101437'");
    expect(thesis).toContain(
      'Sex and Adiposity-based Associations of Accelerometer-measured Physical Activity and Apolipoprotein B: The'
    );
    expect(thesis).toContain('Published: June 18, 2026');
    expect(editorial).toContain("impactFactor: '8.8'");
    expect(editorial).toContain("impactFactor: '10.0'");
    expect(editorial).toContain("impactFactor: '9.9'");
  });
});
