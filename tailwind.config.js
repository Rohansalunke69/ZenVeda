/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Premium dark background palette
      colors: {
        background: '#0A0A0F',
        surface: {
          50: 'rgba(255, 255, 255, 0.02)',
          100: 'rgba(255, 255, 255, 0.05)',
          150: 'rgba(255, 255, 255, 0.07)',
          200: 'rgba(255, 255, 255, 0.10)',
          250: 'rgba(255, 255, 255, 0.15)',
          300: 'rgba(255, 255, 255, 0.20)',
        },
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
          muted: 'rgba(99, 102, 241, 0.15)',
          glow: 'rgba(99, 102, 241, 0.25)',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          muted: 'rgba(139, 92, 246, 0.15)',
          glow: 'rgba(139, 92, 246, 0.25)',
        },
        success: '#10b981',
        error: '#ef4444',
      },
      // Refined typography scale
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'heading-lg': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-md': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.35', letterSpacing: '0' }],
      },
      // Premium spacing scale
      spacing: {
        'section-py': '6rem',
        'section-my': '5rem',
      },
      // Refined border radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      // Premium animations
      animation: {
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      // Backdrop blur scale
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      // Box shadow refinements
      boxShadow: {
        'glow-sm': '0 0 20px rgba(99, 102, 241, 0.15)',
        'glow-md': '0 0 30px rgba(99, 102, 241, 0.2)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(99, 102, 241, 0.1)',
      },
    },
  },
  plugins: [],
};

