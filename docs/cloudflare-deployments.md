# Cloudflare deployment settings

These settings are the repository-side contract for the three Pages projects and three Workers. Configure them in Cloudflare; this repository does not mutate Cloudflare dashboards or deploy anything automatically.

All projects use `main` as the production branch. Pages should keep branch/PR previews enabled. Workers should use the non-production command shown below so previews upload a version without promoting it to production.

## Cloudflare Pages

The Pages root directory is relative to the repository root. The output directory is relative to that project root.

| Project          | Root directory        | Build command                                                | Output directory | Include watch paths                                  | Exclude watch paths                                           |
| ---------------- | --------------------- | ------------------------------------------------------------ | ---------------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| `flamethefreeze` | `apps/flamethefreeze` | `bun install --cwd ../.. --frozen-lockfile && bun run build` | `dist`           | `apps/flamethefreeze/**`, `package.json`, `bun.lock`, `.bun-version` | `apps/urfit-child/**`, `apps/cherubim-it/**`, `workers/**`    |
| `urfit-child`    | `apps/urfit-child`    | `bun install --cwd ../.. --frozen-lockfile && bun run build` | `dist`           | `apps/urfit-child/**`, `package.json`, `bun.lock`, `.bun-version`    | `apps/flamethefreeze/**`, `apps/cherubim-it/**`, `workers/**` |
| `cherubim-it`    | `apps/cherubim-it`    | `bun install --cwd ../.. --frozen-lockfile && bun run build` | `dist`           | `apps/cherubim-it/**`, `package.json`, `bun.lock`, `.bun-version`    | `apps/flamethefreeze/**`, `apps/urfit-child/**`, `workers/**` |

The app-local build command is intentional: after the root install, `bun run build` executes in the configured Pages root and uses that app's Astro config. A root lockfile or root manifest change is included because it can affect every package. App-specific CMS media paths remain relative to the corresponding `apps/*` tree.

## Cloudflare Workers Builds

Set each Worker’s root directory to the directory containing its `wrangler.jsonc`. The build command performs the root workspace install and the package-local typecheck. The deploy command is for `main`; the non-production command is for preview branches.

| Worker                  | Root directory           | Wrangler commands                              | Build command                                                                                  | Production deploy command                          | Non-production deploy command                       | Include watch paths                                     | Exclude watch paths                                            |
| ----------------------- | ------------------------ | ---------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------- |
| `flamethefreeze-worker` | `workers/flamethefreeze` | `wrangler deploy` / `wrangler versions upload` | `bun install --cwd ../.. --frozen-lockfile && bun run --cwd ../.. check:worker:flamethefreeze` | `bun run --cwd ../.. deploy:worker:flamethefreeze` | `bun run --cwd ../.. preview:worker:flamethefreeze` | `workers/flamethefreeze/**`, `package.json`, `bun.lock`, `.bun-version` | `apps/**`, `workers/subscribe/**`, `workers/contact/**`        |
| `subscribe`             | `workers/subscribe`      | `wrangler deploy` / `wrangler versions upload` | `bun install --cwd ../.. --frozen-lockfile && bun run --cwd ../.. check:worker:subscribe`      | `bun run --cwd ../.. deploy:worker:subscribe`      | `bun run --cwd ../.. preview:worker:subscribe`      | `workers/subscribe/**`, `package.json`, `bun.lock`, `.bun-version`      | `apps/**`, `workers/flamethefreeze/**`, `workers/contact/**`   |
| `contact-form`          | `workers/contact`        | `wrangler deploy` / `wrangler versions upload` | `bun install --cwd ../.. --frozen-lockfile && bun run --cwd ../.. check:worker:contact`        | `bun run --cwd ../.. deploy:worker:contact`        | `bun run --cwd ../.. preview:worker:contact`        | `workers/contact/**`, `package.json`, `bun.lock`, `.bun-version`        | `apps/**`, `workers/flamethefreeze/**`, `workers/subscribe/**` |

The checked-in Wrangler configs intentionally contain no secret values. Keep Resend, Turnstile, and any account-specific runtime values in Cloudflare Variables & Secrets or a local `.dev.vars` file. `keep_vars` is enabled so existing dashboard-managed runtime variables are not removed by a config-only deployment.

## Preview safety

- The urFIT-child subscription form reads `PUBLIC_SUBSCRIBE_API_URL`; configure a preview Worker URL for previews and the production Worker URL for production. It does not silently send preview submissions to production.
- The Cherubim IT contact form follows the same `PUBLIC_CONTACT_API_URL` rule, with a production-domain fallback only on `cherubim-it.com`.
- Worker CORS/CSRF checks accept localhost and the project’s exact production/Pages hostnames, plus only branch-preview subdomains belonging to that project.
- Pages preview behavior and Workers preview versions are independent. A Pages preview does not promote a Worker or change its production secrets.
