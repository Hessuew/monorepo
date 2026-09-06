import { expect, test } from 'bun:test';
import flame from '../workers/flamethefreeze/src/index';
import subscribe from '../workers/subscribe/src/index';
import contact from '../workers/contact/src/index';

for (const [name, app, route, domain] of [
  ['flame', flame, '/files/sample.pdf', 'flamethefreeze'],
  ['subscribe', subscribe, '/subscribe', 'urfit-child'],
  ['contact', contact, '/contact', 'cherubim-it'],
] as const) {
  test(`${name} allows its own Pages preview and isolates other projects`, async () => {
    for (const origin of [`https://branch.${domain}.pages.dev`, 'https://unrelated.pages.dev', `https://${domain}.pages.dev.attacker.example`]) {
      const response = await app.request(route, { method: 'OPTIONS', headers: { Origin: origin, 'Access-Control-Request-Method': 'POST' } });
      expect(response.status).toBe(204);
      expect(response.headers.get('access-control-allow-origin')).toBe(origin === `https://branch.${domain}.pages.dev` ? origin : null);
    }
  });
}
for (const [app, route] of [[subscribe, '/subscribe'], [contact, '/contact']] as const) {
  test(`${route} rejects untrusted submissions before external services`, async () => {
    const response = await app.request(route, { method: 'POST', headers: { Origin: 'https://unrelated.pages.dev', 'X-Requested-With': 'XMLHttpRequest' } });
    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({ success: false, message: 'Invalid request' });
  });
}
for (const [name, app] of [['flame', flame], ['subscribe', subscribe]] as const) {
  test(`${name} serves its own bucket and handles missing/disallowed files`, async () => {
    const env = { PUBLIC_BUCKET: { get: async (key: string) => key === 'sample.pdf' ? { body: 'sample PDF bytes', size: 16 } : null } };
    const response = await app.request('/files/sample.pdf', {}, env);
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/pdf');
    expect(await response.text()).toBe('sample PDF bytes');
    expect((await app.request('/files/missing.pdf', {}, env)).status).toBe(404);
    expect((await app.request('/files/script.exe', {}, env)).status).toBe(403);
  });
}
