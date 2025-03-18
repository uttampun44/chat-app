/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      primary: "#B9C1BE",
      secondary: "#24786D",
      white: "#FFFFFF",
    }
  },
  plugins: [],
}

