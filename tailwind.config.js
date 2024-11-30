/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : ["class"],
  theme: {
  	extend: {
  		fontFamily: {
  			'Dorna': 'Dorna',
  			'YekanBakh': 'YekanBakh',
  			'Kalame': 'Kalame'
  		},
  		colors: {
  			'primary': '#AF47D2',
  			'secondary': '#021959',
  		},
  		boxShadow: {
  			'custom': '0px -4px 18px 0px #0000001c'
  		},
  		screens: {
  			'xs': '368px',
  			'sm': '576px'
  		},
  		keyframes: {
  			showTab: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			showTab: 'showTab 0.3s ease-in-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}