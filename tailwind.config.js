/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#E3E3E3",
        "gray-200": "#BFBFBF",
        "gray-300": "#8F8F8F",
        "gray-400": "#797979",
        "gray-500": "#757575",
        "gray-600": "#616161",
        "gray-700": "#5C5C5C",
        "gray-750": "#515151",
        "gray-800": "#3D3D3D",
        "gray-900": "#000000B2",

        dark: "#292929",

        primary: "#40189D",
        "primary-300": "#E3D7FF",
        "primary-600": "#9B70FF",
        "primary-700": "#7649E0",

        body: "#F2F2F2",

        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      fontSize: {
        heading: ["clamp(20px,2vw,24px)", "clamp(38px,2vw,42px)"],
        // sm: ["14px", "20px"],
        base: ["clamp(14px,2vw,16px)", "clamp(20px,2vw,24px)"],
        lg: ["clamp(16px,2vw,18px)", "clamp(24px,2vw,28px)"],
        // xl: ["24px", "32px"],
        "5xl": ["clamp(36px,2vw + 1px,48px)", "clamp(64px,2vw + 1px,72px)"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1600px",
      xxl: "1800px",
    },
  },
  plugins: [],
};
