/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        textPrimary: "#474747",
        textSecondary: "#595959",
        textTertiary: "#EBEBEB",
        border: "#D6D6D6",
        darkBorder: "#999999",
        Red: "#D20037",
        Rust: "#C22F00",
        Blue: "#1733B6",
        Green: "#006642",
        PrimaryPumpkin: "#7F2D0F",
        SecondaryPumpkin: "#FFF7ED",
      },
      keyframes: {
        slideUp: {
          "0%": { height: "var(--radix-accordion-content-height)" },
          "100%": { height: "0" },
        },
        slideDown: {
          "0%": { height: "0" },
          "100%": { height: "var(--radix-accordion-content-height)" },
        },
      },
      animation: {
        slideUp: "slideUp 300ms ease-out",
        slideDown: "slideDown 300ms ease-out",
      },
    },
  },
  plugins: [],
};
