/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        yellow:{
           default:"#FFDD44",
           side:"#FDE74C",
         },
        grey:{
         default:"#5B7C99",
         light:"#E5E9EC",
         footer:"#434343"
        },
        brown:{
          default:"#846C5B",
          light:"#808080",
          lighter:"#FEF9F3"
         },
     },
    },
  },
  plugins: [],
}
