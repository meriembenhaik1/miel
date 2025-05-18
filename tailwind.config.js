/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#F2A900', // primary honey
          600: '#E09900', // darker honey
          700: '#BF8500',
          800: '#A57300',
          900: '#8D6200',
        },
        brown: {
          100: '#D7CCC8', 
          200: '#BCAAA4',
          300: '#A1887F',
          400: '#8D6E63',
          500: '#795548',
          600: '#6D4C41',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        },
        cream: {
          50: '#FFFDF7',
          100: '#FFF9E6',
          200: '#FFF5D6',
          300: '#FFF0C7',
          400: '#FFEAB3',
        },
        success: {
          50: '#E8F5E9',
          500: '#4CAF50',
          700: '#388E3C',
        },
        error: {
          50: '#FFEBEE',
          500: '#F44336',
          700: '#D32F2F',
        },
        warning: {
          50: '#FFF3E0',
          500: '#FF9800',
          700: '#F57C00',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/7262447/pexels-photo-7262447.jpeg')",
        'honeycomb-pattern': "url('/src/assets/honeycomb-pattern.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};