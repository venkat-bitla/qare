const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        space: ["Space Grotesk Variable", "Space Grotesk"],
      },
      colors: {
        brand: "#7c3aed",
        "brand-dark": "#6d28d9",
        "background-color": "#131a26",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
