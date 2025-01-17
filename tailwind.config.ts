/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      borderRadius: {
        // You don't need to define `[25px]` here, as Tailwind already supports arbitrary values
        '25px': '25px',
      },
    },
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Include your file paths
};
