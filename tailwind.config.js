// import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
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
      },
      animation: {
        'pulse-slow': 'pulse 6s infinite',
        'border-pulse': 'pulse-border 16s infinite',
        'bg-pulse-slow': 'backgroundPulse 8s infinite',
        'bg-pulse-slow2': 'backgroundPulse2 6s infinite',
      },
      keyframes: {
        'pulse-border': {
          '0%, 100%': { borderColor: '#7e22ce' },
          '50%': { borderColor: '#c084fc' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        backgroundPulse: {
          '0%, 100%': { backgroundColor: '#581c87' },// 700
          '50%':{ backgroundColor: '#7e22ce' },  // 400
        },
        backgroundPulse2: {
          '0%, 100%': { backgroundColor: '#7e22ce' },// 700
          '50%':{ backgroundColor: '#a855f7' },  // 400
        },
      },
      fontFamily:{
        "socrates": ['Toxigenesis', 'sans-serif'],
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
      spacing: {
        '13': '3.25rem',
      },
    },
  },
  // eslint-disable-next-line unicorn/prefer-module
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
} // satisfies Config;

export default config;