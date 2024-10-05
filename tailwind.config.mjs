/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		fontSize: {
			'xs': '0.85rem',
			'sm': '0.9rem',
			'base': '16px',
			'xl': '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
			'code': '1rem',
			'14px': '14px',
			'18px': '18px',
		},
		screens: {
			sm: '560px',
			md: '620px',
			lg: '650px',
		},
		container: {
			center: true,
		},

		extend: {
			colors: {
				background: "#FFFFFF",
				surface: "#F5F5F5",
				primary: " #222222",
				secondary: "#8c8c8c",
				tertiary: "#999999",
				accent: "#007BFF",
				neonOrange: "hsl(17, 100%, 56%)",
				darkBackground: "#121212",
				darkSurface: "#1E1E1E",
				darkPrimary: " #FFFFFF",
				darkSecondary: "#CCCCCC",
				darkTertiary: "#888888",
				darkAccent: "#4CAF50",
				darkNeonGreen: "#0FFF50"
			},
			spacing: {
				'20px': '20px',
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
