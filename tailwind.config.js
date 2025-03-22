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
      danger: "#FF0000",
      success: "#00FF00",
      warning: "#FFFF00",
      info: "#00FFFF",
      homebg: "#000E08"
    }
  },
  plugins: [],
}

