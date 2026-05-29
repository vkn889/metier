import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#080812',
        primary:   { DEFAULT: '#1A1A2E', 500: '#1A1A2E', 600: '#15152A', 700: '#101020' },
        secondary: { DEFAULT: '#2E3A59', 400: '#4A5C80', 500: '#2E3A59', 600: '#233050', 700: '#1B2540' },
        tertiary:  { DEFAULT: '#4F6EF7', 300: '#A5B8FF', 400: '#7B96F9', 500: '#4F6EF7', 600: '#3A5AE8', 700: '#2644D0' },
        neutral:   { DEFAULT: '#F4F2EE', 100: '#F4F2EE', 200: '#E9E5DD', 300: '#DED8CC', 400: '#D3CBBB', 500: '#A0988A', 600: '#6E6860' },
      },
      fontFamily: {
        headline: ['Lexend', 'system-ui', 'sans-serif'],
        body:     ['Libre Caslon Text', 'Georgia', 'serif'],
        label:    ['Domine', 'Georgia', 'serif'],
        sans:     ['Lexend', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'mega':  ['clamp(80px,12vw,160px)', { lineHeight: '0.88', letterSpacing: '-0.04em' }],
        'hero':  ['clamp(56px,8vw,120px)',  { lineHeight: '0.9',  letterSpacing: '-0.04em' }],
        'title': ['clamp(36px,5vw,72px)',   { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg,#080812 0%,#1A1A2E 50%,#2E3A59 100%)',
        'card-gradient': 'linear-gradient(135deg,rgba(79,110,247,0.08) 0%,rgba(46,58,89,0.08) 100%)',
      },
      animation: {
        'fade-in':  'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':  'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn:   { '0%': { opacity: '0' },                    '100%': { opacity: '1' } },
        slideUp:  { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        shimmer:  { '0%': { backgroundPosition: '-200% 0' },  '100%': { backgroundPosition: '200% 0' } },
      },
      boxShadow: {
        'glow-blue': '0 0 32px rgba(79,110,247,0.35)',
        'glow-sm':   '0 0 16px rgba(79,110,247,0.25)',
        'card':      '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':'0 20px 60px rgba(0,0,0,0.6)',
      },
      opacity: {
        '8':  '0.08',
        '12': '0.12',
        '15': '0.15',
        '20': '0.20',
        '25': '0.25',
        '30': '0.30',
      },
    },
  },
  plugins: [],
}
export default config
