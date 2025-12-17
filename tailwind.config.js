/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // หรือเปลี่ยนเป็นสีที่ต้องการ
        foreground: "#000000",
        border: "#e5e7eb",
      },
    },
  },
  plugins: [],
}
