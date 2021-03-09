// Defaults Imports
import React from 'react'
import Head from 'next/head'

// Package Imports
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import 'shikwasa/dist/shikwasa.min.css'
import 'shikwasa/dist/shikwasa.chapter.min.css'

// Style Imports
import '../styles/index.css'

// Component Imports
import SEO from '../next-seo.config'
import Footer from '../components/layout/footer'

export default function MyApp({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
				<Head>
					<meta content="width=device-width, initial-scale=1" name="viewport" />
				</Head>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</React.StrictMode>
	)
}
