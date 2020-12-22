// Defauly Imports
import React from 'react'

// Package Imports
import { ThemeProvider } from 'next-themes'
// import 'shikwasa/dist/shikwasa.min.css'
// import 'shikwasa/dist/shikwasa.chapter.min.css'

// Style Imports
import '../styles/index.css'

// Component Imports
import Footer from '../components/layout/footer'

export default function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<ThemeProvider
				forcedTheme={Component.theme || undefined}
				attribute='class'>
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</React.StrictMode>
	)
}
