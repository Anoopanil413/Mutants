import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors:{
        customPrimary: {
          primarylight:'#FF335E',
          secondarylight:'#F33953',
          light: '#feca30', 
          dark: '#1f2937',
        },
  
      }
    },

  },
  plugins: [],  
};
export default config;
