import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import CustomLink from '../../components/mdx/CustomLink'
import Layout from '../../components/mdx/Layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

import Wrapper from '../../components/wrapper'
import Footer from '../../components/footer'
import Header from '../../components/header'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
	a: CustomLink,
	// It also works with dynamically-imported components, which is especially
	// useful for conditionally loading components for certain routes.
	// See the notes in README.md for more details.
	TestComponent: dynamic(() => import('../../components/mdx/TestComponent')),
	Head,
	Image: dynamic(() => import('../../components/image')),
	Citation: dynamic(() => import('../../components/citation/citation')),
	Subscribe: dynamic(() => import('../../components/subscribe'))
}

export default function PostPage({ source, frontMatter }) {
	const content = hydrate(source, { components })
	return (
		<Wrapper>
			{/* <header>
				<nav>
					<Link href='/'>
						<a>👈 Go back home</a>
					</Link>
				</nav>
			</header> */}
			{/* <Header /> */}

			<h1 className='text-3xl'>{frontMatter.title}</h1>
			{frontMatter.description && (
				<p className='description'>{frontMatter.description}</p>
			)}
			<div className='w-full md:w-2/3 xl:w-1/2 justify-center mx-auto mt-12'>
				<main>{content}</main>
			</div>
			<Footer />
		</Wrapper>
	)
}

export const getStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
	const source = fs.readFileSync(postFilePath)

	const { content, data } = matter(source)

	const mdxSource = await renderToString(content, {
		components,
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: []
		},
		scope: data
	})

	return {
		props: {
			source: mdxSource,
			frontMatter: data
		}
	}
}

export const getStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map(path => path.replace(/\.mdx?$/, ''))
		// Map the path into the static paths object required by Next.js
		.map(slug => ({ params: { slug } }))

	return {
		paths,
		fallback: false
	}
}
