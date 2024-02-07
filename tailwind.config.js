/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary_bold: "Ubuntu-bold",
        primary_medium: "Ubuntu-medium",
        primary_reg: "Ubuntu-reg",
      },
      colors: {
        marine_blue: "hsl(var(--marine-blue) / <alpha-value>)",
        purplish_blue: "hsl(var(--purplish-blue) / <alpha-value>)",
        pastel_blue: "hsl(var(--pastel-blue) / <alpha-value>)",
        light_blue: "hsl(var(--light-blue) / <alpha-value>)",
        strawberry: "hsl(var(--strawberry-red) / <alpha-value>)",

        cool_gray: "hsl(var(--cool-gray) / <alpha-value>)",
        light_gray: "hsl(var(--light-gray) / <alpha-value>)",
        magnolia: "hsl(var(--magnolia) / <alpha-value>)",
        alabaster: "hsl(var(--alabaster) / <alpha-value>)",

        primary: "hsl(var(--color-primary) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
