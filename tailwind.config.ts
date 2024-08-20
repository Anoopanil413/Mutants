import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
   darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        customBg:{
          bgcoldark:'#575151',
          bgcollight:'#61acf1',
          cont_bg_col_dark:'#292525',
          cont_bg_col_light:'#f5ccc9'
        },
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
