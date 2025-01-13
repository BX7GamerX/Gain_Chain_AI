/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))' },
        },
        'smooth-slide': {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'swing': 'swing 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'smooth-slide': 'smooth-slide 0.5s ease-out',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      colors: {
        primary: '#040253',
        secondary: '#344F8C',
        accent: '#4D70AD',
        highlight: '#45B9C9',
        warning: '#DDAE6F',
      },
    },
  },
  plugins: [],
};
