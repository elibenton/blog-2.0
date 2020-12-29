// Default Imports
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link href='/favicon/favicon.ico' rel='shortcut icon' />
					<link href='/favicon/site.webmanifest' rel='manifest' />
					<link
						href='/favicon/apple-touch-icon.png'
						rel='apple-touch-icon'
						sizes='180x180'
					/>
					<link
						href='/favicon/favicon-32x32.png'
						rel='icon'
						sizes='32x32'
						type='image/png'
					/>
					<link
						href='/favicon/favicon-16x16.png'
						rel='icon'
						sizes='16x16'
						type='image/png'
					/>
					<link
						href='/favicon/android-chrome-192x192.png'
						rel='icon'
						sizes='192x192'
						type='image/png'
					/>
					<link
						href='/favicon/android-chrome-512x512.png'
						rel='icon'
						sizes='512x512'
						type='image/png'
					/>
					<link
						color='#4a9885'
						href='/favicon/safari-pinned-tab.svg'
						rel='mask-icon'
					/>
					<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
					<meta content='#ffffff' name='theme-color' />
					<meta content='#ffffff' name='msapplication-TileColor' />
					<meta
						content='/static/favicons/browserconfig.xml'
						name='msapplication-config'
					/>
					<link
						rel='alternate'
						type='application/rss+xml'
						title='RSS feed for blog posts'
						href='https://emilioschepis.com/rss.xml'
					/>
				</Head>
				<body className='bg-gray-100 dark:bg-black dark:text-gray-100 mx-3 sm:mx-8'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
