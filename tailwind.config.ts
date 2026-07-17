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
        // Pretos / Fundos
        'black-deep': '#0A0A0A',
        'black-soft': '#111111',
        'black-card': '#161616',
        'black-border': '#1E1E1E',
        // Dourados (paleta principal)
        'gold': '#C5A059',
        'gold-light': '#D4B577',
        'gold-dark': '#A8863D',
        'gold-muted': 'rgba(197, 160, 89, 0.2)',
        // Neutros
        'white-pure': '#FAFAFA',
        'white-soft': '#F0EDE8',
        'gray-100': '#E8E4DC',
        'gray-300': '#C4BFBA',
        'gray-500': '#8A8580',
        'gray-700': '#4A4540',
        'gray-900': '#1A1715',
        // Acento secundário
        'moss': '#4A5D4E',
        'moss-light': '#5E7363',
        // Estados
        'success': '#4CAF77',
        'error': '#E05252',
        'warning': '#F0A030',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.2' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.25' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(197, 160, 89, 0.15)',
        'gold-strong': '0 0 60px rgba(197, 160, 89, 0.3)',
        'gold-inner': 'inset 0 1px 0 rgba(197, 160, 89, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 8px 48px rgba(0, 0, 0, 0.8)',
        'deep': '0 20px 60px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #D4B577 50%, #A8863D 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #A8863D 0%, #C5A059 50%, #D4B577 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #161616 100%)',
        'card-gradient': 'linear-gradient(135deg, #161616 0%, #111111 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'elastic': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
export default config
