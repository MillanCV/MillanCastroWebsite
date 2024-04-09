

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		screens: {
			sm: '560px',
			md: '700px',
			lg: '780px',
		},
		container: {
			center: true,
		},
	},
	plugins: [],
}
