import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1920px",
        tablet: "1024px",
        mobile: "375px",
      },
      fontSize: {
        h1: "48px",
        h2: "32px",
        h3: "24px",
        normal: "16px",
        "h1-mobile": "30px",
        "h2-mobile": "24px",
        "h3-mobile": "20px",
        "normal-mobile": "16px",
      },
      colors: {
        primary: "",
        secondary: "",
        complete: "",
        todo: "",
        "not-support": "",
      },
    },
  },
  plugins: [],
} satisfies Config
