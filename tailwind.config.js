/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-aubergine': '#0d0118',
        'dark-purple': '#100120',
        'mid-purple': '#1e0a35',
        'rich-purple': '#2d1057',
        'vibrant-fuchsia': '#e91e8c',
        'hot-magenta': '#c2185b',
        'soft-purple': '#7b2d9e',
        'lavender': '#9c4dcc',
        'gold': '#ffd700',
        'gold-light': '#ffec6e',
        'panel-dark': 'rgba(29, 7, 52, 0.85)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 60% 50%, #3d1070 0%, #0d0118 60%)',
        'fuchsia-gradient': 'linear-gradient(135deg, #e91e8c 0%, #7b2d9e 100%)',
        'purple-gradient': 'linear-gradient(135deg, #2d1057 0%, #0d0118 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(45,16,87,0.8) 0%, rgba(13,1,24,0.9) 100%)',
        'button-gradient': 'linear-gradient(90deg, #e91e8c 0%, #7b2d9e 100%)',
        'gold-gradient': 'linear-gradient(90deg, #ffd700 0%, #ffec6e 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(233, 30, 140, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(233, 30, 140, 0.8), 0 0 50px rgba(123, 45, 158, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-fuchsia': '0 0 20px rgba(233, 30, 140, 0.5)',
        'glow-purple': '0 0 20px rgba(123, 45, 158, 0.5)',
        'glow-gold': '0 0 15px rgba(255, 215, 0, 0.4)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
