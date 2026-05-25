/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      // Custom Color Palette
      colors: {
        'primary': '#0f0f1e',      
        'secondary': '#1a1a2e',    
        'accent': '#00d4ff',       
        'accent-2': '#ff006e',     
        'accent-3': '#00f5ff',     
        'dark': '#0a0a14',
        'light': '#f8f9fa',
        'glass': 'rgba(255, 255, 255, 0.1)',
      },

      // Custom Typography
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
        'body': ['Poppins', 'sans-serif'],
      },

      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },

      // Custom Spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },

      // Animations
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)',
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.8',
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
          },
          '50%': { 
            opacity: '1',
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },

      // Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },

      // Box Shadows
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 212, 255, 0.4)',
        'glow-pink': '0 0 30px rgba(255, 0, 110, 0.3)',
        'glow-blue': '0 0 30px rgba(0, 100, 255, 0.3)',
        'inner-glow': 'inset 0 0 30px rgba(0, 212, 255, 0.1)',
        'elevated': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.2)',
      },

      // Gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-cyan-pink': 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
        'gradient-blue-cyan': 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)',
      },

      // Filters
      filter: {
        'blur-lg': 'blur(16px)',
      },

      // Opacity
      opacity: {
        '2': '0.02',
        '5': '0.05',
        '10': '0.1',
      },

      // Border Radius
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },

      // Transition
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },

  plugins: [
    // Custom plugin for glass morphism
    function({ addComponents, theme }) {
      addComponents({
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: theme('borderRadius.xl'),
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-lg': {
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          borderRadius: theme('borderRadius.2xl'),
          border: '1px solid rgba(255, 255, 255, 0.15)',
        },
      })
    },
  ],
}