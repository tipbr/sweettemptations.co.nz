# Font Installation Instructions

This project uses premium fonts from MyFonts.com:
- **Freight Sans Pro** (primary font)
- **Grafolita** (accent/display font)

## How to Add Fonts:

1. Purchase and download the web font packages from MyFonts.com:
   - Freight Sans Pro: https://www.myfonts.com/collections/freight-sans-pro-font-garagefonts
   - Grafolita: https://www.myfonts.com/collections/grafolita-font-graviton

2. Extract the font files (WOFF, WOFF2 formats recommended)

3. Place font files in `/public/fonts/` directory with the following structure:
   ```
   /public/fonts/
   ├── FreightSansPro-Regular.woff2
   ├── FreightSansPro-Regular.woff
   ├── FreightSansPro-Medium.woff2
   ├── FreightSansPro-Medium.woff
   ├── FreightSansPro-Bold.woff2
   ├── FreightSansPro-Bold.woff
   ├── Grafolita-Regular.woff2
   ├── Grafolita-Regular.woff
   ├── Grafolita-Bold.woff2
   └── Grafolita-Bold.woff
   ```

4. Uncomment the font-face declarations in `/src/app/globals.css`

5. Uncomment the font family references in `/tailwind.config.ts`

## Font-face Example:

Once you have the font files, uncomment these declarations in `globals.css`:

```css
@font-face {
  font-family: 'Freight Sans Pro';
  src: url('/fonts/FreightSansPro-Regular.woff2') format('woff2'),
       url('/fonts/FreightSansPro-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Freight Sans Pro';
  src: url('/fonts/FreightSansPro-Medium.woff2') format('woff2'),
       url('/fonts/FreightSansPro-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Freight Sans Pro';
  src: url('/fonts/FreightSansPro-Bold.woff2') format('woff2'),
       url('/fonts/FreightSansPro-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Grafolita';
  src: url('/fonts/Grafolita-Regular.woff2') format('woff2'),
       url('/fonts/Grafolita-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Grafolita';
  src: url('/fonts/Grafolita-Bold.woff2') format('woff2'),
       url('/fonts/Grafolita-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Current Fallbacks

Until the custom fonts are added, the site uses these system font fallbacks:
- **Freight Sans Pro**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Grafolita**: `Georgia, 'Times New Roman', serif`
