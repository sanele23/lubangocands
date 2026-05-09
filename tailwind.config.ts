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
        navy: {
          950: '#020d1f',
          900: '#061730',
          850: '#0b2040',
          800: '#0d2855',
          700: '#14357a',
          600: '#1e4fad',
          500: '#2563eb',
          400: '#3b82f6',
        },
        gold: {
          700: '#c2410c',
          600: '#ea580c',
          500: '#f97316',
          400: '#fb923c',
          300: '#fdba74',
          200: '#fed7aa',
          100: '#ffedd5',
          50: '#fff7ed',
        },
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 100% 80% at 20% 30%, rgba(37, 99, 235, 0.3) 0%, transparent 65%), radial-gradient(ellipse 60% 60% at 80% 90%, rgba(249, 115, 22, 0.08) 0%, transparent 60%)',
        'gold-gradient': 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #ea580c 100%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
        gold: '0 0 0 1px rgba(249, 115, 22, 0.3), 0 4px 24px rgba(249, 115, 22, 0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
