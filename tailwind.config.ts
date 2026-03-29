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
          DEFAULT: '#122549',
          light: '#1A3260',
        },
        gold: {
          DEFAULT: '#F0B924',
          light: '#F2D371',
          dark: '#CC9E1F',
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
      keyframes: {
        'ken-burns': {
          '0%, 100%': { transform: 'scale(1) translateX(0)' },
          '50%': { transform: 'scale(1.1) translateX(2%)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
