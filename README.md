# Flame the Freeze monorepo

This repository contains three independent Astro sites and three independent Cloudflare Workers. Bun is the only workspace package manager; the repository uses one root lockfile and a pinned Bun version.

## Workspace members

- `apps/flamethefreeze` — Flame the Freeze static Astro site
- `apps/urfit-child` — urFIT-child static Astro site
- `apps/cherubim-it` — Cherubim IT static Astro site
- `workers/flamethefreeze` — Flame public-files Worker
- `workers/subscribe` — urFIT-child subscription/files Worker
- `workers/contact` — Cherubim IT contact-form Worker

Each app and Worker keeps its own package manifest, runtime configuration, content, assets, domain metadata, and deployment identity. The root scripts only orchestrate independent workspace commands.

## Install and validate

```sh
bun install --frozen-lockfile
bun run build
bun run test
bun run check
```

Run an individual package from the root with a filtered script, for example `bun run build:urfit-child` or `bun run check:worker:contact`. From an app or Worker directory, run the package-local script after the root install, or use `bun install --cwd ../.. --frozen-lockfile` first when running in a clean Cloudflare builder.

Cloudflare Pages and Workers roots, commands, production branches, preview behavior, and watch paths are recorded in [docs/cloudflare-deployments.md](docs/cloudflare-deployments.md).
