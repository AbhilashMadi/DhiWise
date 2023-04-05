module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_400: "#bdbdbd",
        gray_901: "#19202d",
        red_700: "#b85c38",
        gray_900: "#2e083c",
        red_800: "#b52c39",
        blue_A200: "#457eff",
        deep_purple_600: "#5c26b4",
        orange_300: "#f8bb54",
        gray_300: "#dee3ea",
        gray_100: "#f0fdf4",
        bluegray_900: "#333333",
        deep_purple_A200_0c: "#6951ff0c",
        bluegray_600: "#556987",
        black_900: "#060606",
        bluegray_500: "#6e6b8f",
        bluegray_300: "#8896ab",
        black_901: "#000000",
        white_A700_02: "#ffffff02",
        indigo_900: "#0a175c",
        deep_purple_A200: "#6b50ff",
        white_A700: "#ffffff",
        red_A700: "#b00000",
        bluegray_901: "#170f49",
      },
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        nunito: "Nunito",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg ,#060606,#2e083c,#b52c39)",
      },
      boxShadow: {
        bs1: "0px 0px  1px 4px #ffffff02",
        bs: "0px 1px  2px 0px #6951ff0c",
      },
      textShadow: { ts: "0px 0px  1px #ffffff02" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
