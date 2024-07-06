/** @type {import('tailwindcss').Config} */

const COLORS = require("./src/lib/style")
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: COLORS
		}
	},
	plugins: []
};
