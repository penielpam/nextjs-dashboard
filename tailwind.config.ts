import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enables dark mode with a class (you can use 'media' for auto-detect based on system settings)
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        violet: {
          400: 'rgb(167 139 250)',
          500: 'rgb(139 92 246)',
          600: ' rgb(124 58 237)',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
