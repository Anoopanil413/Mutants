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
          bgcoldark:'#575151',
          brcollight:'#fae0de',
          cont_bg_col_dark:'#292525',
          cont_br_col_light:'#f5ccc9'
        },
  
      }
    },

  },
  plugins: [],  
};
export default config;
