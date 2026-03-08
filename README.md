# Neighborhood Guidelines

A free real estate education platform covering investing, wholesaling, marketing, and state licensing guides for all 50 US states.

**Site:** [neighborhoodguidelines.com](https://neighborhoodguidelines.com)

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router DOM
- React Helmet Async (SEO)

## Local Development

```sh
# Clone the repo
git clone https://github.com/eliaszoleta/wise-neighborhood-guide.git
cd wise-neighborhood-guide

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Build

```sh
npm run build
```

## Project Structure

```
src/
├── components/     # Layout, Header, Footer, TopicPage template
├── pages/          # All route-level page components
│   ├── topics/     # 12 topic detail pages (investing, wholesaling, marketing)
│   └── ...         # Core pages (Home, Blog, About, Contact, Legal)
├── data/           # stateLicenseData.ts - all 50 states licensing info
└── assets/         # Images and logo
public/
├── sitemap.xml     # Full sitemap for all routes
├── robots.txt      # Search engine crawl directives
└── favicon.ico
```

## Content Pillars

1. **Real Estate Investing** - Rental properties, BRRRR, funding, cash flow/ROI
2. **Real Estate Wholesaling** - How it works, finding sellers, dispositions, contracts
3. **Real Estate Marketing** - Lead gen, ads, cold calling/SMS, CRM automation
4. **State Licensing** - Guides for all 50 US states
