# Dependency refresh

Updated 2026-09-14 with Bun 1.3.10. The four Astro applications and three Cloudflare Workers now resolve their direct dependencies from suitable release lines recorded in `package.json` and `bun.lock`; compatibility holds are listed below.

## Migrations included

- Astro 7 and its matching integrations, including the Vite 8-compatible React, MDX, Markdown, sitemap, and check packages.
- Tailwind CSS 4 through `@tailwindcss/vite`, with the legacy `@astrojs/tailwind` integration removed. The existing JavaScript theme configuration is loaded with `@config`, and removed Tailwind 3 utility names were migrated in site templates.
- React Email 6 imports now come from `react-email`; the deprecated `@react-email/components` package and the old YouTube patch-package override were removed.
- ESLint 10 and `eslint-plugin-astro` 3 parser/config changes, plus the Node.js engine floor required by the new Astro ESLint toolchain.
- Zod 4 schema and validation-result APIs are used by the urFIT form and both form Workers.
- Astro Markdown plugins now run through `unified(...)` rather than deprecated top-level Markdown configuration fields. `js-yaml` 5 named exports are used by the site and vendored integration config loaders.

## Pins and compatibility holds

- Bun remains pinned at 1.3.10 by `.bun-version`, the root `packageManager`, and deployment configuration because it is the repository toolchain contract.
- `@astrolib/seo@1.0.0-beta.8` remains exact in all four apps. It is the only published release, its peer range stops at Astro 5, and the apps rely on its existing metadata component. There is no compatible stable replacement in this scoped refresh, so it is retained and explicitly pinned while the generated sites are validated.
- TypeScript remains on `^5.9.3`, rather than the newer TypeScript 7 line, because `@astrojs/check` and the TypeScript ESLint 8 toolchain currently require TypeScript below 6.1.
- `prettier-plugin-astro` remains on the existing 0.14.x line. The current 1.0 release is a formatter migration that would rewrite most Astro files without changing behavior, so it is not a suitable dependency move for this reviewable refresh; the existing formatter contract is preserved.
- `limax`, `astro-compress`, and `sharp` remain exact-version dependencies after their refresh to keep slug generation, Astro compression, and native image tooling reproducible across the workspaces.
- `@astro-community/astro-embed-youtube` remains exact at 0.5.10 so the upstream accessible-name fix is deterministic; the local 0.5.5 patch is no longer needed.

Meta Pixel campaign tracking was not changed as part of this dependency work.
