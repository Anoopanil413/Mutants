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
          bgcoldark:'#443e3e',
          bgcollight:'#dae6f0',
          cont_bg_col_dark:'#292525',
          cont_bg_col_light:'#f5ccc9'
        },
        custom: {
          primarydark:'#FF335E',
          primarylight:'#601FB1',
          light: '#feca30', 
          dark: '#1f2937',
        },
  
      },

      keyframes: {
        blink: {
          '0%, 100%': { 'opacity': '1' },
          '50%': { 'opacity': '0' },
        },
      },
      animation: {
        blink: 'blink 2.5s infinite',
      },
    },

  },
  plugins: [],  
};
export default config;
