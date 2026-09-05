# Cherubim IT Website

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/Hessuew/cherubim_it?utm_source=oss&utm_medium=github&utm_campaign=Hessuew%2Fcherubim_it&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

## 🎯 Project Overview

The website includes:

## 📑 Pages

## 🛠 Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [React](https://reactjs.org/) - UI Components
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- [Node.js](https://nodejs.org/) - Supported JavaScript runtime

## 🚀 Getting Started

### Prerequisites

- Bun (latest version recommended)
- Node.js version matching the `engines` range in `package.json` when using npm instead of Bun

### Installation

```bash
# Clone the Flame the Freeze monorepo
git clone https://github.com/Hessuew/flamethefreeze.git
cd flamethefreeze

# Install all workspace dependencies from the repository root
bun install --frozen-lockfile

# Start the Cherubim IT development server
bun run --filter rukouksen_seurakunta dev
```

When using Node.js, replace `bun install` with `npm install` and `bun run` with `npm run`.

### Building for Production

```bash
# Create production build
bun run --filter rukouksen_seurakunta build

# Preview production build
bun run --filter rukouksen_seurakunta preview
```

To run package-local commands instead, change to `apps/cherubim-it` after the root install and omit the filter.

## 📁 Project Structure

```
src/
├── assets/         # Static assets (images, styles)
├── components/     # Shared Astro components
├── content/        # Blog related content
├── data/          # Data for different pages
├── layouts/       # Shared layout components
├── pages/         # Route pages
├── utils/         # Helper functions
├── config/        # Shared configuration
├── navigation/    # Navigation of the website
└── types.d.ts     # TypeScript definitions
```

## 🧪 Development

### Code Style

- Functional and declarative programming patterns
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture

### Commands

- `bun run --filter rukouksen_seurakunta dev` - Start development server
- `bun run --filter rukouksen_seurakunta build` - Build for production
- `bun run --filter rukouksen_seurakunta preview` - Preview production build
- `bun run --filter rukouksen_seurakunta check` - Run Astro, ESLint, and Prettier checks
- `bun run --filter rukouksen_seurakunta check:astro` - Run the Astro type checker
- `bun run --filter rukouksen_seurakunta check:eslint` - Run ESLint
- `bun run --filter rukouksen_seurakunta check:prettier` - Check formatting
- `bun run --filter rukouksen_seurakunta test` - Run the Bun test runner

From the repository root, install the workspace dependencies and check the contact Worker:

```bash
bun install --frozen-lockfile
bun run check:worker:contact
bun run dry-run:worker:contact
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
