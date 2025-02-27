/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0033CC",
          dark: "#637492",
          light: "#002380",
        },
        white: {
          DEFAULT: "#FFFFFF",
          light: "#FEFEFE",
          dark: "#F5F5F5",
          vdark: "#FDF5F5",
        },
        grey: {
          DEFAULT: "#647067",
          light: "#EAF9D6",
          dark: "#749D1C",
          vlight: "#F6FCF3",
          vdark: "#A0A4A8",
        },
        black: {
          DEFAULT: "#000000",
          light: "#1E2721",
          vlight: "#666",
          dark: "#2F3C33",
          vdark: "#5F5F5F",
        },
        green: {
          DEFAULT: "#58FD0A",
          light: "#B2FF87",
          dark: "#1A4402",
          vlight: "#C8EE98",
        },
        parrot: {
          DEFAULT: "rgba(88, 253, 10, 0.25)",
          light: "#1AA928",
          vlight: "#ECFCCB",
          dark: "#4CAC7B",
          vdark: "#D3F9D8",
        },
        red: {
          DEFAULT: "#FFE4E7",
          light: "#BBDE8E",
          vlight: "rgba(26, 68, 2, 0.50)",
          dark: "rgba(0, 0, 0, 0.25)",
          vdark: "rgba(26, 68, 2, 0.50)",
        },
        blue: {
          DEFAULT: "#EFF6FF",
          light: "#EDE9FE",
          dark: "#262626",
          vlight: "#333",
          vdark: "#52575C",
          skyblue: "#D0EBFF",
          darkblue: "#339AEF",
        },
        brown: {
          DEFAULT: "#343A40",
          light: "#ECF0F2",
          dark: "#868E96",
          vlight: "#51CD65",
          vdark: "#DADADA",
        },
      },
      //Optional: Add spacing utilities for finer control
      spacing: {
        '18' : '4.5rem', // 72px
        '22' : '5.5rem', //88px
      },
    },
    screens: {
      'xs': '320px',  // Tiny phones (better than 0px)
      'sm': '640px',  // Small tablets/phones
      'md': '768px',  // Tablets
      'lg': '1024px', // Small laptops
      'xl': '1280px', // Standard desktops
      '2xl': '1536px', // Large desktops
      '3xl': '1920px', // Extra-wide screens
    },
    fontSize: {
      'xs': ['10px', { lineHeight: '14px' }],    // Tiny text
      'sm': ['12px', { lineHeight: '16px' }],    // Small
      'tiny': ['14px', { lineHeight: '20px' }],  // Base mobile
      'base': ['15px', { lineHeight: '22px' }],  // Default
      'lg': ['16px', { lineHeight: '24px' }],    // Slightly larger
      'xl': ['18px', { lineHeight: '26px' }],    // Medium headings
      '2xl': ['20px', { lineHeight: '28px' }],   // Larger headings
      '3xl': ['22px', { lineHeight: '30px' }],
      '4xl': ['24px', { lineHeight: '32px' }],
      '5xl': ['25px', { lineHeight: '34px' }],
      '6xl': ['30px', { lineHeight: '38px' }],   // Big headings
      '7xl': ['35px', { lineHeight: '42px' }],
      '8xl': ['36px', { lineHeight: '44px' }],
      '9xl': ['38px', { lineHeight: '46px' }],
      '10xl': ['40px', { lineHeight: '48px' }],
      '11xl': ['45px', { lineHeight: '52px' }],
      '12xl': ['65px', { lineHeight: '72px' }],  // Huge titles
    },
  },
  plugins: [],
});
