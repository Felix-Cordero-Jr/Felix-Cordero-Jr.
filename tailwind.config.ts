// tailwind.config.ts

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Ensures Tailwind scans all app files
    './src/app/components/**/*.{js,ts,jsx,tsx}',  // Ensures components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
