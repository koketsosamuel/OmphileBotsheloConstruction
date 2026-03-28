/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'obc-orange': '#E8621A',
        'obc-dark': '#2B2D2F',
        'obc-cream': '#F5F2EC',
        'obc-tan': '#D4C5A9',
        'obc-body': '#4A4E54',
        'obc-muted': '#9B9B93',
        'obc-warm': '#E8E4DC',
        'obc-card-dark': '#3A4040',
        'obc-whatsapp': '#25D366',
        'obc-whatsapp-dark': '#1A5C2A',
        'obc-deep': '#1a1a1a',
        'obc-divider': '#3a3a3a',
      },
      fontFamily: {
        'heading': ['"DM Serif Display"', 'serif'],
        'body': ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
