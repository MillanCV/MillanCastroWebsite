/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		fontSize: {
			'sm': '0.9rem',
			'base': '1.09rem',
			'xl': '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
			'code': '1rem',
		},
		screens: {
			sm: '560px',
			md: '700px',
			lg: '760px',
		},
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: "#FFFFFF",
				secondary: "#B3B3B3",
				tertiary: "hsl(203, 15%, 47%)",
				dark: "#181818",
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
