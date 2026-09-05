# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Add durable project-specific notes here as they are discovered through real work.

## Project notes

- The Bun workspace members, app-local site configuration, and separate Worker entrypoints live under `apps/*` and `workers/*`; use [docs/cloudflare-deployments.md](docs/cloudflare-deployments.md) for the exact Cloudflare roots, commands, and watch paths.
- Bun is pinned in `.bun-version` and the root `package.json`; install from the repository root with `bun install --frozen-lockfile`, then use the filtered root `build`, `test`, and `check` scripts.
- Worker bindings are defined in each `workers/*/wrangler.jsonc`; secrets stay in Cloudflare Variables & Secrets or local ignored `.dev.vars` files. Preview scripts upload non-production Worker versions.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
