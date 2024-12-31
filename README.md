# 🔬 urFIT Research Group Website

A comprehensive website for the urFIT research group, built with modern web technologies to provide a single source of truth for all research group content.

## 🎯 Project Overview

This website serves as the central hub for our research group, providing:

- 📚 Research publications and findings
- 🎓 Academic resources
- 📰 Press releases and news
- 🎥 Videos and podcasts
- 🏆 Awards and honours
- 👥 Team member profiles

## 🛠 Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [React](https://reactjs.org/) - UI Components
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager
- Cloudflare account (for email subscriptions)
- Cloudflare Workers CLI (wrangler) (for email subscriptions)

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
bun install

# Start development server
bun run dev
```

### Building for Production

```bash
# Create production build
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
src/
├── assets/         # Static assets (images, styles)
├── components/     # Reusable Astro components
├── content/        # Content files
├── data/          # Data for different pages
├── utils/         # Helper functions
├── config/        # Configuration files
├── navigation/    # Navigation structure
└── types.d.ts     # TypeScript definitions

workers/
└── subscribe/     # Cloudflare Worker for email subscriptions
```

## 🧪 Development

### Code Style

- Functional and declarative programming patterns
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture

### Backend Services

#### Email Subscription Worker

The project includes a Cloudflare Worker that handles email subscriptions:

- Located in `workers/subscribe/`
- Processes newsletter sign-ups
- Sends confirmation emails with custom templates
- Manages subscription status

### Commands

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Lint code
- `bun run format` - Format code

## 📝 Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting any changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
