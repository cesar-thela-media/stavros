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
        // Black - Primary Dark
        black: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#000000',
          950: '#000000',
        },
        // Charcoal - Secondary Dark
        charcoal: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c8c8c8',
          400: '#adadad',
          500: '#999999',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454',
          950: '#3a3a3a',
        },
        // Champagne Gold - Luxury Accent
        champagne: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f4ede1',
          300: '#ede0ca',
          400: '#e4cfab',
          500: '#d9bc8c',
          600: '#cfa970',
          700: '#c49a5c',
          800: '#b8ac9f',
          900: '#8b7c6f',
          950: '#4a3f35',
        },
        // Misty Gray - Light Neutral
        misty: {
          50: '#fdfdfd',
          100: '#fcfcfc',
          200: '#f9f9f9',
          300: '#f0f0f0',
          400: '#e4e4e4',
          500: '#d9d9d9',
          600: '#c4c4c4',
          700: '#a3a3a3',
          800: '#828282',
          900: '#6b6b6b',
          950: '#3f3f3f',
        },
        // Keep some legacy colors for compatibility
        primary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#000000',
          950: '#000000',
        },
        // Map gold to champagne for compatibility
        gold: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f4ede1',
          300: '#ede0ca',
          400: '#e4cfab',
          500: '#d9bc8c',
          600: '#cfa970',
          700: '#c49a5c',
          800: '#b8ac9f',
          900: '#8b7c6f',
          950: '#4a3f35',
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
