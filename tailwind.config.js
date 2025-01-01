/** @type {import('tailwindcss').Config} */
// import rubikBold from '/Users/jaswanthsudha/Desktop/happenix-website/src/fonts/Rubik-ExtraBold.ttff';
// import fonts from './src/fonts';
import { fontFamily } from 'tailwindcss/defaultTheme';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			rubik: ['rubik', ...fontFamily.sans],
		},
	},
	plugins: [],
};
