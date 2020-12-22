module.exports = {
	darkMode: 'class',
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			plex: ['IBM Plex Mono'],
			russo: ['Russo One'],
			akzidenz: ['Akzidenz Grotesk']
		},
		extend: {
			colors: {
				'accent-1': '#333'
			}
		},
		fontSize: {
			'sm': '.8rem',
			'1xl': '1rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
			'4xl': '2.5rem',
			'5xl': '3.5rem',
			'6xl': '5rem',
			'7xl': '6rem'
		}
	},
	variants: {
		textDecoration: ['hover', 'group-hover', 'active'],
		fontStyle: ['hover', 'group-hover'],
		textColor: ['hover', 'group-hover', 'active', 'dark'],
		typography: ['dark'],
		display: ['group-hover', 'responsive'],
		flex: ['group-hover'],
		transitionDuration: ['group-hover', 'hover'],
		borderOpacity: ['hover']
	},
	plugins: [require('@tailwindcss/typography')]
}
