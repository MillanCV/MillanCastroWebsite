/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		fontSize: {
			'sm': '0.8rem',
			'base': '1rem',
			'xl': '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},
		screens: {
			sm: '560px',
			md: '700px',
			lg: '780px',
		},
		container: {
			center: true,
		},
		extend: {
			textColor: {
				lightPrimary: "#FFFFFF",
				lightSecondary: "#B3B3B3",
				lightTertiary: "hsl(203, 15%, 47%)",
				darkPrimary: "hsl(100, 10%, 95%)",
				darkSecondary: "hsl(201, 23%, 34%)",
				darkTertiary: "hsl(203, 15%, 47%)",
			},
		}
	},
	plugins: [],
}
