/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
        'bg-alt': '#1e293b',
        border: '#334155',
        text: '#f1f5f9',
        accent: '#6366f1',
        'accent-hover': '#818cf8',
        danger: '#ef4444'
      },
      fontFamily: {
        sans: [
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};
