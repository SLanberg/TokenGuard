/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// In the book "Refactoring UI" authors condemn use of the hex or RGB colors and recommend
			// to transit to the hsl. Since they are authors of the Tailwind as well. Let's do it.
			colors: {
				'background-color': 'hsl(200, 6%, 17%)',
				'input-color': 'hsl(210, 3%, 44%)',
				'gold-main': 'hsl(43, 24%, 51%)',
				'gold-secondary': 'hsl(35, 100%, 80%)',
				'gold-third': 'hsl(43, 26%, 40%)',
				'gold-dark': 'hsl(43, 41%, 35%)',
				'gold-lighter-dark': 'hsl(43, 26%, 47%)'
			}
		}
	},
	plugins: [
		require('flowbite/plugin')
	]
};
