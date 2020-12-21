import React from 'react'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
import Footer from '../components/footer'

// import 'shikwasa/dist/shikwasa.min.css'
// import 'shikwasa/dist/shikwasa.chapter.min.css'

function MyApp({ Component, pageProps }) {
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

export default MyApp
