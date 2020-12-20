import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<body className='bg-gray-100 dark:bg-gray-800 text-black dark:text-white mx-3 sm:my-2 sm:mx-8'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
