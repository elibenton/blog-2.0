import React from 'react'
import '../styles/index.css'
import 'shikwasa/dist/shikwasa.min.css'
import 'shikwasa/dist/shikwasa.chapter.min.css'

function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<Component {...pageProps} />
		</React.StrictMode>
	)
}

export default MyApp
