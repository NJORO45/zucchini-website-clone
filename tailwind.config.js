/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,php}"],
  theme: {
    extend: {
      keyframes:{
        marquee:{
          '0%':{transform:'translateX(100%)'},
          '100%':{transform:'translateX(-100%)'}
        },
      },
      animation:{
        marquee:'marquee 10s linear infinite',
      },
      fontFamily:{
        sans:['Zuccony', 'sans-serif'],
        jost:["Jost", "sans-serif"],
      Josefin:["Josefin Slab", "sans-serif"]
      },
      colors:{
        verydarkzuchini:'#003e29',
        lightdarkzuchini:'#065c3f',
        lightzuchini:'#00b775',
        floatingcart:'#191919',
        chatbox:'rgb(18, 103, 68)',
        footer:'#2f4858',

      },
     fontSize: {
        'iconsize': '200px',
      },
    },
  },
  plugins: [],
}

