import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sweet Temptations brand colors
        primary: {
          pink: '#ED9BB8',
          'dark-pink': '#E88AAC',
          'light-pink': '#F5D4E1',
          teal: '#5DBFBD',
          'dark-teal': '#4DA9A7',
        },
        background: {
          'light-gray': '#F8F8F8',
          'light-pink': '#FFF5F8',
          pink: '#FFB6D1',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
          light: '#999999',
        },
        border: {
          light: '#E5E5E5',
          medium: '#CCCCCC',
          pink: '#ED9BB8',
        },
      },
      fontFamily: {
        // TODO: Uncomment after adding custom fonts (see FONTS.md)
        // primary: ['Freight Sans Pro', 'system-ui', '-apple-system', 'sans-serif'],
        // accent: ['Grafolita', 'Georgia', 'serif'],
        
        // Fallback fonts (currently active)
        primary: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        accent: ['Georgia', 'Times New Roman', 'serif'],
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
