# 🔬 urFIT Research Group - Child Health & Fitness Research Website

> **Leading pediatric health research transforming children's wellness through evidence-based fitness solutions and interactive health tools.**

🌐 **Live Website**: [https://urfit-child.com](https://urfit-child.com)

A comprehensive research platform for the urFIT research group, specializing in child health, pediatric fitness, and evidence-based wellness interventions. Built with modern web technologies (Astro, React, TypeScript) to provide researchers, healthcare professionals, and families with cutting-edge health research and practical tools.

## 🎯 About urFIT Child Health Research

**Keywords:** _child health research, pediatric fitness, evidence-based wellness, health interventions, research group_

The urFIT research group is a leading authority in pediatric health and fitness research, bridging the critical gap between academic research and real-world health applications. Our mission centers on transforming scientific discoveries into actionable health solutions for children and families worldwide.

### 🔬 Research Focus Areas

- **Pediatric Health Assessment** - Advanced tools for child health evaluation
- **Evidence-Based Fitness Interventions** - Research-backed exercise programs for children
- **Health Technology Innovation** - Interactive calculators and assessment tools
- **Community Health Impact** - Translating research into practical family solutions
- **Academic-Clinical Bridge** - Connecting research findings with healthcare practice

### 🌟 Key Features & Resources

- 👥 **[Expert Research Team](https://urfit-child.com/people/team)** - Profiles of leading pediatric health researchers
- 💰 **[Research Funding & Partnerships](https://urfit-child.com/people/funders)** - Transparent funding sources and collaborations
- 🧮 **[Interactive Health Tools](https://urfit-child.com/waist-height-calculator)** - Evidence-based calculators and assessment instruments
- 📚 **[Peer-Reviewed Publications](https://urfit-child.com/materials/publications)** - Latest research findings and academic papers
- 📊 **[Data Visualizations](https://urfit-child.com/materials/infografics)** - Infographics making health research accessible
- 🎥 **[Educational Media](https://urfit-child.com/materials/videos-and-podcasts)** - Videos, podcasts, and multimedia health content
- 📰 **[Research News](https://urfit-child.com/materials/press-releases)** - Press releases and latest research developments
- 📜 **[Academic Resources](https://urfit-child.com/materials/thesis)** - Theses, dissertations, and scholarly work
- 📧 **Research Updates** - Newsletter for latest findings and tools
- 💡 **[Practical Health Guides](https://urfit-child.com/non-academic)** - Evidence-based tips for families and practitioners

## 📑 Pages

### Main Pages

- Home (`/`) - Overview and latest updates
- Call to Action (`/call-to-action`) - Call to Action section
- News and Events (`/news-and-events`) - Conference presentations, awards, and networking highlights
- Waist-Height Calculator (`/waist-height-calculator`) - Interactive health assessment tool
- Non-Academic (`/non-academic`) - Non-academic content
- DINA (`https://christ-dina.org`) - Official external discipleship website

### People

- Team (`/people/team`) - Research group members
- Collaborators (`/people/collaborators`) - External collaborators
- Funders (`/people/funders`) - Funding organizations
- Principal Investigator (`/people/principal-investigator`) - Research group leader

### Materials

- Key Articles (`/materials/key-articles`) - A few seminal results
- Theses (`/materials/thesis`) - Academic theses and dissertations
- Publications (`/materials/publications`) - Research papers and articles
- Press Releases (`/materials/press-releases`) - News and announcements
- Videos & Podcasts (`/materials/videos-and-podcasts`) - Multimedia content
- Infographics (`/materials/infografics`) - Visual data representations

## 🛠 Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [React](https://reactjs.org/) - UI Components
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Bun](https://bun.sh/) - JavaScript Runtime & Package Manager

## 🚀 Getting Started

### Prerequisites

- Bun version specified in the repository root `.bun-version`
- Node.js version supported by the package `engines` declaration
- Cloudflare account (for email subscriptions)
- Cloudflare Workers CLI (wrangler) (for email subscriptions)

### Installation

```bash
# Clone the Flame the Freeze monorepo
git clone https://github.com/Hessuew/flamethefreeze.git
cd flamethefreeze

# Install all workspace dependencies from the repository root
bun install --frozen-lockfile

# Start the urFIT-child development server
bun run --filter urFIT-child dev
```

### Building for Production

```bash
# Create production build
bun run --filter urFIT-child build

# Preview production build
bun run --filter urFIT-child preview
```

To run package-local commands instead, change to `apps/urfit-child` after the root install and omit the filter.

## 📁 Project Structure

```
apps/urfit-child/
└── src/
    ├── assets/         # Static assets (images, styles)
    ├── components/     # Shared Astro components
    ├── data/            # Data for different pages
    ├── layouts/         # Shared layout components
    ├── pages/           # Route pages
    ├── utils/           # Helper functions
    ├── config/          # Shared configuration
    ├── navigation.ts    # Navigation of the website
    └── types.d.ts       # TypeScript definitions

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

Newsletter subscriptions use the separate `workers/subscribe/` Worker. See the
[Cloudflare deployment settings](../../docs/cloudflare-deployments.md) for its workspace commands and deployment configuration.

### Commands

- `bun run --filter urFIT-child dev` - Start development server
- `bun run --filter urFIT-child build` - Build for production
- `bun run --filter urFIT-child preview` - Preview production build
- `bun run --filter urFIT-child test` - Run the test suite; succeeds when no tests are found
- `bun run --filter urFIT-child check` - Run Astro, ESLint, and Prettier checks
- `bun run --filter urFIT-child fix` - Apply ESLint and Prettier fixes

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Acknowledgments

- Research group members and collaborators
- Funding organizations
- Open source community
