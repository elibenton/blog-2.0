import React from 'react'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
// import 'shikwasa/dist/shikwasa.min.css'
// import 'shikwasa/dist/shikwasa.chapter.min.css'

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<ThemeProvider
				forcedTheme={Component.theme || undefined}
				attribute='class'>
				<Component {...pageProps} />
			</ThemeProvider>
		</React.StrictMode>
	)
}

export default MyApp
