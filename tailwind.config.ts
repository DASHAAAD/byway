import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bgSchemeLight: {
        neutralPrimary: '#111113',
        neutralSecondary: 'rgb(28, 32, 36, 72%)',
        neutralTertiary: 'rgb(28, 32, 36, 54%)',
        kelpPrimary: 'rgb(0, 124, 101, 98%)',
        kelpSecondary: 'rgb(0, 124, 101, 80%)',
      },
      bgSchemeDark: {
        neutralPrimary: 'rgb(237, 238, 240, 96%)',
        neutralSecondary: 'rgb(237, 238, 240, 82%)',
        neutralTertiary: 'rgb(237, 238, 240, 68%)',
      }
    },
    extend: {},
  },
  plugins: [],
};
export default config;
