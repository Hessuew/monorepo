import manifest from '~/assets/favicons/site.webmanifest.json';

const icons = import.meta.glob<string>('../assets/favicons/android-icon-*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function GET() {
  return new Response(
    JSON.stringify({
      ...manifest,
      icons: manifest.icons.map((icon) => ({
        ...icon,
        src: icons[`../assets/favicons${icon.src}`],
      })),
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } }
  );
}
