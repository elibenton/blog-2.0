module.exports = {
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {plex: ['IBM Plex Mono'], header: ['Russo One']},
		extend: {
			colors: {
				'accent-1': '#333'
			}
		}
	},
	variants: {
		textDecoration: ['hover', 'group-hover'],
		fontStyle: ['hover', 'group-hover']
	},
	plugins: [require('@tailwindcss/typography')]
}
