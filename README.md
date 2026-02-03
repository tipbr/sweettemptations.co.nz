# Sweet Temptations - Boutique Cakery Website

A static website for Sweet Temptations, a boutique cakery in Whanganui, New Zealand. Built with [Eleventy (11ty)](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com).

## About

Sweet Temptations creates personalised cakes, cupcakes, cookies and more for weddings, birthdays, and all special occasions in the Whanganui region.

## Tech Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/) v3.1.2
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v3.4.4
- **Template Engine**: Nunjucks
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tipbr/sweettemptations.co.nz.git
cd sweettemptations.co.nz
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with live reload:

```bash
npm run dev
```

This will:
- Start the Eleventy dev server at [http://localhost:8080](http://localhost:8080)
- Watch for CSS changes and rebuild Tailwind CSS automatically

The site will automatically reload when you make changes to templates or content.

### Building for Production

Build the site for production:

```bash
npm run build
```

This will:
1. Build and minify Tailwind CSS
2. Generate the static site in the `_site` directory

The built site in `_site` is ready to be deployed to any static hosting service.

## Project Structure

```
sweettemptations.co.nz/
├── src/                      # Source files
│   ├── _includes/           # Reusable templates
│   │   ├── components/      # Component templates (header, footer, etc.)
│   │   └── layouts/         # Layout templates
│   ├── _data/              # Global data files (JSON)
│   ├── styles/             # CSS files
│   │   ├── main.css        # Main Tailwind CSS file
│   │   └── output.css      # Generated CSS (gitignored)
│   ├── index.njk           # Home page
│   ├── gallery.njk         # Gallery page
│   ├── faqs.njk            # FAQs page
│   ├── contact-us.njk      # Contact page
│   └── price-list.njk      # Price list page
├── public/                  # Static assets (images, fonts, etc.)
├── _site/                   # Generated site (gitignored)
├── .eleventy.js            # Eleventy configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. The workflow will automatically build and deploy on push to `main`

The site will be available at: `https://tipbr.github.io/sweettemptations.co.nz/`

For a custom domain, see [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build the site for production
- `npm run build:css` - Build and minify Tailwind CSS
- `npm run build:eleventy` - Build the 11ty site
- `npm start` - Start the Eleventy server (alias for dev)

## Adding Content

### Adding FAQs

Edit `src/_data/faqs.json` and add new FAQ items:

```json
{
  "id": 3,
  "question": "Your question here?",
  "answer": "Your answer here."
}
```

### Adding Gallery Images

Place images in `public/gallery/` and update the gallery array in `src/gallery.njk`.

## License

© 2018 - 2026 Sweet Temptations. All rights reserved.
