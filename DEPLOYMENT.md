# Deployment Guide

## Current Setup (GitHub Pages Project Site)

The site is currently configured to work at: `https://tipbr.github.io/sweettemptations.co.nz/`

All paths use the `| url` filter which automatically adds the `/sweettemptations.co.nz/` prefix.

## Switching to Custom Domain

When you add your custom domain `sweettemptations.co.nz` to GitHub Pages:

1. **Add CNAME file**: Create `public/CNAME` with content:
   ```
   sweettemptations.co.nz
   ```

2. **Update pathPrefix**: In `.eleventy.js`, change:
   ```javascript
   pathPrefix: "/sweettemptations.co.nz/"
   ```
   to:
   ```javascript
   pathPrefix: "/"
   ```

3. **Configure DNS**: Point your domain to GitHub Pages (follow GitHub's instructions)

4. **Enable HTTPS**: In GitHub repo settings > Pages, enable "Enforce HTTPS"

That's it! The `| url` filter will automatically use the new pathPrefix, and all links will work correctly on both the project site and custom domain.
