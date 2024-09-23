/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        700: "900px",
        300: "350px",
      },
      colors: {
        "light-gray": "hsl(217, 100%, 97%)",
        "text-color": "hsl(243, 100%, 62%);",
        "pastel-blue": " hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "error-red": "hsl(354, 84%, 57%)",
        "cool-gray": " hsl(231, 11%, 63%)",
        mangolia: "hsl(217, 100%, 97%)",
        "marine-blue": " hsl(213, 96%, 18%)",
        "purple-blue": " hsl(243, 100%, 62%)",
        "second-gray": "hsl(231, 11%, 63%)",
      },
    },
  },
  plugins: [],
};
