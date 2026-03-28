import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#162035',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4BA6A',
          dark: '#A8893D',
        },
        slate: {
          DEFAULT: '#3D4F5F',
          light: '#5A6F7F',
        },
        lightgray: '#F5F5F0',
        trust: '#1D6B5B',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        txicro: '1200px',
      },
      borderRadius: {
        card: '8px',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
    },
  },
  plugins: [],
};

export default config;
