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
    extend: {
      colors: {
        blue: {
          1: '#162154',
          2: '#375c9d',
          3: '#267fe0',
        },
        cyan: {
          1: "#34d6ff",
        },
        gray: {
          1: '#2c262e',
          2: '#878f9f',
          3: '#d7d7d9',
        },
        white: '#ffffff'
      },
      lineHeight: {
        'extra-tight': '1.15',
      },
    },
  },
  plugins: [],
}

