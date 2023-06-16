/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage-one': "url('/bgimage1.svg')",
        'bgimage-two': "url('/bgimage2.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        dynapuff: ['DynaPuff', "cursive"],
        golos: ['Golos Text', "sans-serif"]
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
      },
      colors: {
        redPrimary: "#EF233C",
        blackButton: "#2B2D42",
        blackSolid: "#000000",
        blackMystery: "#1E1F1A",
        greyYoung: "#8D99AE",
        greyParf: "#EDF2F4",
        blackCard: "#0D0D0D",
      }
    },
  },
  plugins: [],
}