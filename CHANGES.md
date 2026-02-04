# Changes Summary

## GitHub Pages Deployment Fix

### Problem
The site was not loading correctly on GitHub Pages because all asset paths were absolute (starting with `/`), which resolved to `https://tipbr.github.io/` instead of `https://tipbr.github.io/sweettemptations.co.nz/`.

### Solution
- Added `pathPrefix: "/sweettemptations.co.nz/"` to `.eleventy.js`
- Applied Eleventy's built-in `| url` filter to all internal links and asset paths
- The filter automatically prefixes paths with the configured pathPrefix

### Files Changed
- `.eleventy.js` - Added pathPrefix configuration
- `src/_includes/layouts/base.njk` - Applied url filter to all assets and meta tags
- `src/_includes/components/header.njk` - Applied url filter to logo and navigation links
- `src/_includes/components/footer.njk` - Applied url filter to logo and footer links
- `src/_includes/components/notification-bar.njk` - Applied url filter to link
- `src/index.njk` - Applied url filter to hero image and CTA links
- `src/price-list.njk` - Applied url filter to CTA link
- `src/gallery.njk` - Applied url filter to gallery images

## SEO Enhancements

### Added
- **Open Graph tags**: For better social media sharing
- **Twitter Card tags**: For Twitter-specific sharing
- **Canonical URLs**: Pointing to the custom domain (sweettemptations.co.nz)
- **JSON-LD Structured Data**: Local business schema for better search engine understanding
  - Business type: Bakery
  - Location: Whanganui, New Zealand
  - Geo coordinates
  - Social media links
  - Menu/price list link

### Benefits
- Better visibility in search engines
- Improved social media link previews
- Helps Google understand the business for local searches

## Gallery Lightbox

### Features Added
- Click any gallery image to open full-size view
- Previous/Next navigation buttons
- Keyboard navigation:
  - Arrow Left: Previous image
  - Arrow Right: Next image  
  - Escape: Close lightbox
- Click backdrop to close
- Smooth transitions
- Image captions display
- Prevents page scrolling when lightbox is open

### Implementation
- Pure JavaScript (no external libraries)
- Accessible with ARIA labels
- Mobile-friendly

## Deployment Guide

Created `DEPLOYMENT.md` with instructions for:
1. Current setup on GitHub Pages project site
2. How to switch to custom domain when ready
3. Simple 3-step process to change pathPrefix

## Security
- Ran CodeQL analysis: 0 vulnerabilities found
- No external dependencies added for lightbox
- No inline event handlers (onclick moved to JavaScript)

## What Works Now
✅ All assets load correctly (CSS, images, logos, favicons)
✅ All navigation links work  
✅ Gallery images display correctly
✅ Lightbox modal works with full functionality
✅ SEO meta tags properly configured
✅ Site deployable to GitHub Pages

## Next Steps (When Custom Domain is Added)
1. Create `public/CNAME` file with `sweettemptations.co.nz`
2. Change pathPrefix in `.eleventy.js` from `"/sweettemptations.co.nz/"` to `"/"`
3. Configure DNS records
4. Enable HTTPS in GitHub Pages settings

That's it! All links will continue to work automatically.
