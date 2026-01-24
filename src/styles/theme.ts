/**
 * Sweet Temptations Theme Configuration
 * 
 * Centralized color scheme and theme values extracted from design screenshots.
 * Import these constants throughout the application for consistent theming.
 */

export const theme = {
  colors: {
    // Primary brand colors
    primary: {
      pink: '#ED9BB8',       // Main pink for headings, buttons, CTA
      darkPink: '#E88AAC',   // Darker shade for hover states
      lightPink: '#F5D4E1',  // Light pink for backgrounds
      teal: '#5DBFBD',       // Turquoise/teal for logo and accents
      darkTeal: '#4DA9A7',   // Darker teal for hover states
    },
    
    // Background colors
    background: {
      white: '#FFFFFF',
      lightGray: '#F8F8F8',
      lightPink: '#FFF5F8',
      pink: '#FFB6D1',       // Notification bar background
    },
    
    // Text colors
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#999999',
      white: '#FFFFFF',
    },
    
    // Border colors
    border: {
      light: '#E5E5E5',
      medium: '#CCCCCC',
      pink: '#ED9BB8',
    },
    
    // Button states
    button: {
      primary: '#ED9BB8',
      primaryHover: '#E88AAC',
      secondary: '#5DBFBD',
      secondaryHover: '#4DA9A7',
    },
  },
  
  // Font families (will be updated when custom fonts are added)
  fonts: {
    primary: 'system-ui, -apple-system, sans-serif',  // Fallback for Freight Sans Pro
    accent: 'Georgia, serif',                          // Fallback for Grafolita
  },
  
  // Spacing scale
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },
  
  // Breakpoints
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
} as const;

// Export individual color groups for convenience
export const colors = theme.colors;
export const fonts = theme.fonts;
export const spacing = theme.spacing;
export const breakpoints = theme.breakpoints;
