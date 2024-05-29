/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			screens:{
				'3xl': '1920px',
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
}
