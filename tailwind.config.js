/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Your custom components
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If you have a 'src' directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}