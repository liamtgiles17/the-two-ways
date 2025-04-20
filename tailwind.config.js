const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        offblack: {
          DEFAULT: "#111"
        }
      },
      backgroundImage: {
        "carousel-live": "url('/live3grayscale.webp')",
        "carousel-ep": "url('/live5grayscale.webp')",
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        slideInFromLeft: "1.2s ease-out 0s 1 slideInFromLeft"
      },
      keyframes: {
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
            filter: 'blur(5px)'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
            filter: 'blur(0)'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [flowbiteReact],
};