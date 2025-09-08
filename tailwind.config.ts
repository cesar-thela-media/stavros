import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f6f3',
          100: '#f1ede7',
          200: '#e3dbd0',
          300: '#d0c2b0',
          400: '#b8a389',
          500: '#a6916f',
          600: '#997f63',
          700: '#7f6854',
          800: '#675649',
          900: '#54463c',
          950: '#2c241e',
        },
        gold: {
          50: '#fefdf4',
          100: '#fefae6',
          200: '#fcf2c8',
          300: '#f9e49e',
          400: '#f5d072',
          500: '#efb944',
          600: '#d49c2a',
          700: '#b07d20',
          800: '#8f6420',
          900: '#77541f',
          950: '#432b0b',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
