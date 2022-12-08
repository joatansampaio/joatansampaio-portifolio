/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        java: "url(../public/java.svg)",
        css: 'url(../public/css.svg)',
        html: 'url(../public/html.svg)',
        javascript: 'url(../public/javascript.svg)',
        nextjs: 'url(../public/nextjs.svg)',
        react: 'url(../public/react.svg)',
        tailwind: 'url(../public/tailwind.svg)',
      },
      backgroundColor:{
        j_main_dark: '#091929',
        J_main_light: '#001E3C',
        j_dark_gray: '#1E293B',
        j_light_gray : '#293445',

      },
      gradientColorStops: {
        j_main_dark: '#091929',
        j_main_light: '#001E3C',
      },
      borderColor: {
        j_light_gray : '#293445',
      },
      width:{
        'techs' : '40px'
      },
      animation:{
        updown: 'updown 3s ease-in-out infinite',
        pulseslow: 'pulse 3s ease-in infinite',
        circ0: 'circulate 12s linear infinite',
        circ45: 'circulate45 13s linear infinite',
        circ90: 'circulate90 14s linear infinite',
        circ180: 'circulate180 15s linear infinite',
        circ270: 'circulate270 16s linear infinite',
      },
      margin:{
        '100': '31rem',
      },
      keyframes: {
        updown: {
          '0%': { transform: 'translateY(-1.5%)' },
          '50%': { transform: 'translateY(1.5%)' },
          '100%': { transform: 'translateY(-1.5%)' }
        },
        circulate: {
          '0%' : { transform: 'rotate(0deg)' },
          '100%' : { transform: 'rotate(360deg)' }
        },
        circulate45: {
          '0%' : { transform: 'rotate(45deg)' },
          '100%' : { transform: 'rotate(-315deg)' }
        },
        circulate90: {
          '0%' : { transform: 'rotate(-90deg)' },
          '100%' : { transform: 'rotate(270deg)' }
        },
        circulate180: {
          '0%' : { transform: 'rotate(-180deg)' },
          '100%' : { transform: 'rotate(180deg)' }
        },
        circulate270: {
          '0%' : { transform: 'rotate(30deg)' },
          '100%' : { transform: 'rotate(-330deg)' }
        },
        rainbow: {
          '0%' :  {backgroundPosition: 'bgPos0_0'},
          '100%': {backgroundPosition: 'bgPos0_10'}
        }
      },
      backgroundPosition: {
        bgPos0_0 :'0% 0%',
        bgPos0_100 : '0% 100%'
      },
      backgroundSize: {
        t_max: '100% 1100%',
      }
    },

  },
  plugins: [],
}
