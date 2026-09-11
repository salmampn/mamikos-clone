# Mamikos Clone

Responsive frontend clone of the Mamikos landing page, created for the **Mamikos Frontend Engineer Technical Test — AI-Assisted Build**.

> This project is for technical-test and portfolio purposes only. It is not affiliated with or endorsed by Mamikos.

## Links

- Technical-test brief: [mamitech/Frontend-Engineer-Technical-Test-AI-Assisted-Build](https://github.com/mamitech/Frontend-Engineer-Technical-Test-AI-Assisted-Build)
- Repository: [salmampn/mamikos-clone](https://github.com/salmampn/mamikos-clone)
- Live demo: [salma-mamikos-clone](https://salma-mamikos-clone.vercel.app/)

## My development workflow included:

- Translating the provided visual reference into reusable frontend sections
- Building the layout incrementally, starting from the page structure and core content
- Using AI assistance to accelerate implementation and ideation, while manually reviewing, adjusting, and validating the generated output
- Checking responsive behavior and refining spacing, typography, and visual hierarchy across screen sizes

## Key Decisions

- **Component-based structure:** The interface is split into reusable sections to make the codebase easier to maintain and iterate on.
- **Responsive-first styling:** Layouts, spacing, and typography are designed to adapt across different viewport sizes.
- **Reusable styling tokens:** Tailwind utility classes are used to keep styling consistent and speed up iteration.
- **Practical scope:** The implementation prioritizes a polished frontend experience and clear visual hierarchy within the time-boxed challenge.
- **Manual verification:** AI-generated suggestions were treated as a starting point; the final code and UI decisions were reviewed and adjusted manually.
  
## Features

- Responsive navigation with desktop navbar and mobile/tablet hamburger drawer.
- Full-screen location search overlay with tabs, popular searches, city groups, and active-tab underline.
- Promo carousel with autoplay, navigation controls, mobile indicators, and emphasized active banner.
- Reusable property listing sections with city filters, grouped carousel navigation, countdown promo badge, and empty states.
- Popular areas and nearby campuses sections.
- Responsive About section with modular accordion components.
- Responsive footer with app links, navigation, contacts, social media, and ISO certificate.
- Accessible controls with labels, focus states, keyboard handling, and ARIA attributes.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Tools Used

- **ESLint** for code-quality checks
- **GitHub** for source control and submission
- **AI tools** to assist with implementation, debugging, and iterative UI refinement

## Getting Started

### Prerequisites

- Node.js 18.18+
- npm 9+

### Installation

```bash
git clone [https://github.com/salmampn/mamikos-clone.git](https://github.com/salmampn/mamikos-clone.git)
cd mamikos-clone
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

```text
src/
├── app/                # Routes, pages, global styles
├── components/
│   ├── home/           # Homepage sections and feature modules
│   ├── navigation/     # Navbar, drawer, and search overlay
│   ├── shared/         # Shared buttons, container, logo
│   └── ui/             # shadcn/ui primitives
├── constants/          # Navigation constants
├── data/               # Static listing, promo, campus, and location data
├── lib/                # Utilities and helper functions
└── types/              # TypeScript models
```

## Responsive Behavior

| Breakpoint | Behavior                                |
| ---------- | --------------------------------------- |
| Default    | Mobile-first layout                     |
| `sm`       | Small tablet layout                     |
| `md`       | Tablet layout                           |
| `lg`       | Desktop navigation and expanded layouts |
| `xl`       | Large-screen spacing and content width  |

## AI-Assisted Development

AI was used as a development assistant for component architecture, responsive Tailwind layouts, accessibility patterns, Embla carousel integration, refactoring, and documentation.

Final implementation, integration, review, and testing were completed by the author.

## Author

**Salma Manda**

- GitHub: [@salmampn](https://github.com/salmampn)
- Project: [mamikos-clone](https://github.com/salmampn/mamikos-clone)

## License

This repository is intended for technical-test and educational purposes. Mamikos trademarks, branding, and related assets belong to their respective owners.
