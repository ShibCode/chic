/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Nunito Sans",
        oreloBold: "Orelo SemiWide Bold",
        oreloRegular: "Orelo SemiWide Regular",
        madi: "Ms Madi",
        qwitcher: "Qwitcher Grypen",
      },
    },
  },
  plugins: [],
};
