# Mamikos Clone

A responsive frontend implementation of the Mamikos website, built as part of the **Mamikos Frontend Engineer Technical Test — AI-Assisted Build**.

This project recreates key Mamikos landing-page interactions and layouts with a focus on responsive behavior, reusable components, clean component composition, and accessible UI patterns.

> This is a frontend clone created for technical-test and portfolio purposes. It is not affiliated with or endorsed by Mamikos.

## Live Demo

> Add your deployment URL here after deploying with Vercel.

```text
[https://your-mamikos-clone.vercel.app](https://your-mamikos-clone.vercel.app)
```

## Repository

- Technical-test brief: [mamitech/Frontend-Engineer-Technical-Test-AI-Assisted-Build](https://github.com/mamitech/Frontend-Engineer-Technical-Test-AI-Assisted-Build)
- This implementation: [salmampn/mamikos-clone](https://github.com/salmampn/mamikos-clone)

## Overview

The application is a responsive clone of selected Mamikos homepage experiences. It includes property discovery UI, promotional content, city-based listing filters, location search, responsive navigation, and informational sections.

The implementation is designed for multiple viewport sizes:

- Mobile
- Tablet
- Desktop

The UI adapts its layout, navigation pattern, carousel behavior, typography, spacing, and content density based on screen size.

## Features

### Navigation

- Responsive navbar with desktop navigation.
- Hamburger navigation below desktop breakpoint.
- Mobile drawer opens from the left.
- Tablet drawer opens from the right.
- Mobile navigation includes property categories, informational links, promotion navigation, and login role actions.
- Drawer supports backdrop click, close button, and `Escape` key handling.
- Body scroll is locked while the mobile navigation drawer is open.

### Search overlay

- Full-screen location search overlay.
- Search input with focus handling when the overlay opens.
- Clear search action.
- Search navigation using Next.js `useRouter`.
- “Cari di lokasi sekitar saya” action.
- Tabs for campus, area, and station/halte searches.
- Search chips for popular locations.
- Expandable city/location groups.
- Green underline state for the active tab.
- Internal content scrolling without overflowing the viewport.

### Promo carousel

- Promotional carousel built with Embla Carousel.
- Automatic slide rotation using Embla Autoplay.
- Previous and next controls.
- Active promo indicator dots on mobile.
- Active promo banner is slightly larger than adjacent slides.
- Full-bleed carousel behavior on mobile and tablet.
- Desktop carousel layout with centered content width.

### Property listing sections

- Reusable property listing section.
- City dropdown filtering.
- Listing data grouped in sets of four cards.
- Previous and next carousel controls for listing groups.
- “Lihat semua” navigation.
- Empty state when no properties match the selected city.
- Countdown badge for limited-time promotional listings.
- Responsive listing layouts:
  - Mobile: compact two-column property cards.
  - Tablet: four compact cards per group.
  - Desktop: four cards with full listing controls in one row.

### Popular areas

- Responsive popular-area grid.
- Image cards with overlay text.
- Link navigation to location-specific search pages.
- Reusable “Lihat semua” card.

### Nearby campuses

- Responsive campus grid.
- Campus logo, campus name, and city information.
- Two-column layout on smaller screens.
- Four-column layout on larger screens.
- Reusable CTA card for viewing all campuses.

### About section

- Responsive About Mamikos section.
- Accordion interaction for mobile content.
- Expandable feature list for larger screens.
- Centered feature-list trigger on medium screens and above.
- Feature content remains left-aligned for readability.
- Modular feature-based component structure.

### Footer

- Responsive footer layout.
- Brand information and app-download links.
- Google Play and App Store badges.
- Company, policy, and contact navigation.
- Social media links.
- ISO certificate asset.
- Mobile-first stacked layout and larger-screen column layout.

## Tech Stack

| Technology                                                | Purpose                                          |
| --------------------------------------------------------- | ------------------------------------------------ |
| [Next.js](https://nextjs.org/)                            | React framework and routing                      |
| [React](https://react.dev/)                               | UI rendering and client-side state               |
| [TypeScript](https://www.typescriptlang.org/)             | Type safety                                      |
| [Tailwind CSS](https://tailwindcss.com/)                  | Utility-first responsive styling                 |
| [shadcn/ui](https://ui.shadcn.com/)                       | Reusable UI primitives                           |
| [Radix UI](https://www.radix-ui.com/)                     | Accessible dialog, tabs, and dropdown primitives |
| [Embla Carousel](https://www.embla-carousel.com/)         | Promo and listing carousel interactions          |
| [React Icons](https://react-icons.github.io/react-icons/) | Interface icons                                  |

## Getting Started

### Prerequisites

Make sure you have one of the following installed:

- Node.js 18.18 or later
- npm 9 or later

Check your installed versions:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone [https://github.com/salmampn/mamikos-clone.git](https://github.com/salmampn/mamikos-clone.git)
```

Move into the project directory:

```bash
cd mamikos-clone
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Available Scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Starts the local development server       |
| `npm run build` | Creates an optimized production build     |
| `npm run start` | Runs the production server after building |
| `npm run lint`  | Runs ESLint checks                        |

Example production workflow:

```bash
npm run build
npm run start
```

## Project Structure

The project is organized by feature and component responsibility.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── home/
│   │   ├── cards/
│   │   │   ├── AreaCard.tsx
│   │   │   ├── CampusCard.tsx
│   │   │   ├── KosCard.tsx
│   │   │   ├── PromoCard.tsx
│   │   │   └── ViewAllCard.tsx
│   │   ├── about/
│   │   │   ├── AboutAccordion.tsx
│   │   │   ├── AboutDesktopContent.tsx
│   │   │   ├── AboutFeatureList.tsx
│   │   │   ├── AboutMobileContent.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── about.constants.tsx
│   │   │   ├── about.types.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── property-listing/
│   │   │   ├── CountdownBadge.tsx
│   │   │   ├── ListingActions.tsx
│   │   │   ├── ListingEmptyState.tsx
│   │   │   ├── PropertyListingHeader.tsx
│   │   │   ├── PropertyListingSection.tsx
│   │   │   ├── usePropertyListingCarousel.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── NearbyCampusesSection.tsx
│   │   ├── PopularAreasSection.tsx
│   │   └── PromoCarousel.tsx
│   │
│   ├── navigation/
│   │   ├── LocationSearchOverlay.tsx
│   │   ├── MobileNavDrawer.tsx
│   │   ├── Navbar.tsx
│   │   └── SearchCategoryDropdown.tsx
│   │
│   ├── shared/
│   │   ├── AppButton.tsx
│   │   ├── Container.tsx
│   │   ├── IconButton.tsx
│   │   └── Logo.tsx
│   │
│   └── ui/
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       └── tabs.tsx
│
├── constants/
│   └── navigation.ts
│
├── data/
│   ├── campuses.ts
│   ├── kos.ts
│   ├── locations.ts
│   └── promos.ts
│
├── lib/
│   ├── array.ts
│   └── utils.ts
│
└── types/
    ├── campus.ts
    └── kos.ts
```

> The exact directory names may differ slightly as the implementation evolves. The main principle is to keep reusable UI, feature-specific logic, static data, and TypeScript types separated.

## Responsive Design Notes

The project uses Tailwind CSS responsive utilities with a mobile-first approach.

| Breakpoint | Main behavior                         |
| ---------- | ------------------------------------- |
| Default    | Mobile layout                         |
| `sm`       | Small tablet and wider mobile devices |
| `md`       | Tablet layout                         |
| `lg`       | Desktop layout                        |
| `xl`       | Large desktop layout                  |

## Future Improvements

Possible improvements for a production-ready version:

- Connect listing, campus, promo, and location data to an API or CMS.
- Add server-side filtering and search suggestions.
- Add map-based property search.
- Add authentication for tenant and owner flows.
- Add property detail pages.
- Add favorites and recently viewed properties.
- Add unit, integration, and end-to-end tests.
- Add loading/skeleton states for asynchronous data.
- Add analytics and error monitoring.
- Improve carousel animations and drag feedback.
- Add dark-mode support if required by product design.

## AI-Assisted Development

This project was built with AI assistance as allowed by the technical-test brief. AI was used as a development aid for tasks such as:

- Component architecture and modularization.
- Responsive Tailwind CSS layout planning.
- Accessibility review and ARIA patterns.
- Embla carousel integration patterns.
- Refactoring suggestions.
- README documentation drafting.

All final implementation decisions, integration, testing, and code review remain the responsibility of the project author.

## Author

**Salma Manda**

- GitHub: [@salmampn](https://github.com/salmampn)
- Repository: [mamikos-clone](https://github.com/salmampn/mamikos-clone)

## License

This repository is intended for technical-test and educational purposes.

The Mamikos name, visual identity, trademarks, and referenced content belong to their respective owners.
