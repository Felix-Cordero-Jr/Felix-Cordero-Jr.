/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      width: {
        '37%': '37%', // Custom width
      },
      borderRadius: {
        '25px': '25px', // Optional custom radius if needed elsewhere
      },
    },
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
