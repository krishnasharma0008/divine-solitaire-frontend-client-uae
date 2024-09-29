import withMT from "@material-tailwind/react/utils/withMT";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line for date picker
  ],
  theme: {
    extend: {
      //scrollbar: ["rounded"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "verify-track-bg": "url('/Rectangle42.png')",
        Jewelbgimg: "url('/image34.png')",
        profilebgimg: "url('/Rectangle 172.png')",
        bgdiajur: "url('/Rectangle 40.png')",
        bgdiajurmine: "url('/Rectangle40.png')",
        breadcrumbg: "url('/breadcrumbg.png')",
        popup: "url('/popup_bg_image.png')",
      },
      colors: {
        ...colors,
        "Chinese-Black-sidebar": "#161616",
        "light-white": "#FFFFFF",
        tomato: "#FF5757",
        "custom-grey": "#1e1e1e",
        snow: "#F9F9F9",
        green: "#00AC00",
        Inactive: "#B3B3B3",
        gold: "#826344",
        gray_normal: "#F1F1F1",
        gray_light: "#A9A9A9",
        "light-black": "#555",
      },
      backgroundColor: {
        "light-muted-azure": "#5599FF",
        "custom-grey": "#1e1e1e",
      },
    },
    fontFamily: {
      body: ['"Montserrat"', '"Open Sans"', '"Frank+Ruhl+Libre"'],
      newsreader: ['"Newsreader"', '"Open Sans"'],
    },
  },
  plugins: [], //require("@tailwindcss/scrollbar")
});
