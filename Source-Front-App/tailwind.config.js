// tailwind.config.js
import {nextui} from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // single component styles
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};