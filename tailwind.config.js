// import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  darkMode: 'false',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary1: "#7e22ce",
        "purple-1000": "#230b36",
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily:{
        "socrates": ['Toxigenesis', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      screens: {
        xs: '400px',
        tiny: "360px", // 374
        small: "490px",
        dmd: "667px",//768, 667
        'full-md': "887px",
        dlg: "1024px",
        sxl: "1110px",
        xl7: "1280px",
        'landscape-narrow': { 'raw': '(max-height: 940px) and (orientation: landscape)' }, // 769px
        'landscape-narrow-2': { 'raw': '(max-width: 940px) and (max-height: 430px )' },
        'landscape-super-narrow': { 'raw': '(max-height: 375px) and (orientation: landscape)' },
        'portrait-narrow': { 'raw':'(max-height: 770px)'}
      
      },
      width: {
        '66': '16.5rem',
        '68': '17rem',
        '82': '20.5rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      spacing: {
        '13': '3.25rem',
      },
    },
  },
  // eslint-disable-next-line unicorn/prefer-module
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
} // satisfies Config;

export default config;