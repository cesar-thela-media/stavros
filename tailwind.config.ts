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
        // Deep Charcoal & Elegant Neutrals
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
          950: '#0d0e0f',
        },
        // Sophisticated Navy
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1929',
        },
        // Luxurious Gold & Champagne
        gold: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Rich Cream & Ivory
        cream: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#faf9f7',
          300: '#f6f4f1',
          400: '#f0ede8',
          500: '#e8e4dd',
          600: '#d6d0c4',
          700: '#b8b0a0',
          800: '#9a8f7c',
          900: '#7c7261',
          950: '#4a453d',
        },
        // Deep Forest Green (for accent)
        forest: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd08d',
          400: '#5bb55b',
          500: '#369836',
          600: '#2a7c2a',
          700: '#226222',
          800: '#1e4f1e',
          900: '#1a411a',
          950: '#0d240d',
        }
      },
      fontFamily: {
        'heading': ['Mansory', 'serif'],
        'accent': ['Amalfi Coast', 'cursive'],
        'sans': ['Montserrat', 'sans-serif'],
        // Keep legacy font families for backward compatibility
        'serif': ['Mansory', 'serif'],
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
