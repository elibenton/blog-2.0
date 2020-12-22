const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			plex: ['IBM Plex Mono'],
			russo: ['Russo One'],
			akzidenz: ['Akzidenz Grotesk']
		}
		// colors: {
		// 	gray: colors.trueGray,
		// 	highlight: colors.yellow
		// }
	},
	variants: {
		textDecoration: ['hover', 'group-hover', 'active'],
		fontStyle: ['hover', 'group-hover'],
		textColor: ['hover', 'group-hover', 'active', 'dark'],
		typography: ['dark'],
		display: ['group-hover', 'responsive'],
		flex: ['group-hover'],
		transitionDuration: ['group-hover', 'hover'],
		borderOpacity: ['hover'],
		border: ['hover']
	},
	plugins: [require('@tailwindcss/typography')]
}
