import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          accent: '#007bff',
          textPrimary: '#212529',
          textSecondary: '#495057',
        },
        dark: {
          primary: '#343a40',
          secondary: '#495057',
          accent: '#17a2b8',
          textPrimary: '#f8f9fa',
          textSecondary: '#adb5bd',
        },
      },
      fontFamily: {
        custom: ['noord', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
