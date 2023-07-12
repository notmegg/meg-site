/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xs:"320px",sm:"375px",sml:"500px",md:"667px",mdl:"786px",lg:"960px",lgl:"1024px",xl:"1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: "#454545",
        orange1: "#FF6000",
        orange2: "#FFA559",
        orange3: "#FFE6C7",
      },
      boxShadow:{
        navbarShadow:" 0 10px 30px -10px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [],
};
