/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      slider: "url('/assets/imgs/bg_01.jpg')",
    },
    extend: {
      screens: {
        pc: "991px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        main: "#b28266",
        light_black: "#272727",
      },
    },
  },
  plugins: [],
};
