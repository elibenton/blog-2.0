const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { spacing } = require('tailwindcss/defaultTheme')

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
			typography: (theme) => ({
				DEFAULT: {
					css: {
						figure: { margin: 0 },
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.blue.500'),
							'&:hover': {
								color: theme('colors.blue.700')
							},
							code: { color: theme('colors.blue.400') }
						},
						'h2,h3,h4': {
							'scroll-margin-top': spacing[32]
						},
						code: { color: theme('colors.pink.500') },
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false
					}
				},
				dark: {
					css: {
						p: { color: theme('colors.gray.100') },
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.blue.400'),
							'&:hover': {
								color: theme('colors.blue.600')
							},
							code: { color: theme('colors.blue.400') }
						},
						blockquote: {
							borderLeftColor: theme('colors.gray.700'),
							color: theme('colors.gray.100')
						},
						'h2,h3,h4': {
							color: theme('colors.gray.100'),
							'scroll-margin-top': spacing[32]
						},
						hr: { borderColor: theme('colors.gray.700') },
						ol: {
							li: {
								'&:before': { color: theme('colors.gray.500') }
							}
						},
						ul: {
							li: {
								'&:before': { backgroundColor: theme('colors.gray.500') }
							}
						},
						strong: { color: theme('colors.gray.300') },
						thead: {
							color: theme('colors.gray.100')
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700')
							}
						}
					}
				}
			}),
			animation: {
				fadeIn: 'fadeIn 1s ease-in forwards'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			},
			spacing: {
				'1/2': '50%',
				'1/3': '33.333333%',
				'2/3': '66.666667%',
				'1/4': '25%',
				'2/4': '50%',
				'3/4': '75%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
				'1/6': '16.666667%',
				'2/6': '33.333333%',
				'3/6': '50%',
				'4/6': '66.666667%',
				'5/6': '83.333333%',
				'1/12': '8.333333%',
				'2/12': '16.666667%',
				'3/12': '25%',
				'4/12': '33.333333%',
				'5/12': '41.666667%',
				'6/12': '50%',
				'7/12': '58.333333%',
				'8/12': '66.666667%',
				'9/12': '75%',
				'10/12': '83.333333%',
				'11/12': '91.666667%',
				full: '100%',
				screen: '100vw'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				warmGray: colors.warmGray
			}
		}
	},
	variants: {
		typography: ['dark'],
		animation: ['motion-safe'],
		textDecoration: ['hover', 'group-hover', 'active'],
		fontStyle: ['hover', 'group-hover'],
		textColor: ['hover', 'group-hover', 'active', 'dark'],
		display: ['group-hover', 'responsive'],
		flex: ['group-hover'],
		transitionDuration: ['group-hover', 'hover'],
		borderOpacity: ['hover', 'group-hover'],
		border: ['hover', 'group-hover'],
		visibility: ['hover', 'group-hover'],
		ring: ['group-hover']
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ addUtilities }) {
			const extendUnderline = {
				'.underline': {
					textDecoration: 'underline',
					textDecorationColor: 'gold'
				}
			}
			addUtilities(extendUnderline)
		})
	]
}
