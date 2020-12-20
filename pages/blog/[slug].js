import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import CustomLink from '../../components/custom-link'

import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

import Wrapper from '../../components/wrapper'
import Footer from '../../components/footer'
import Header from '../../components/header'

import smartypants from '@silvenon/remark-smartypants'
import codeblock from 'remark-highlight.js'
import autolink from 'remark-autolink-headings'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
	a: CustomLink,
	// It also works with dynamically-imported components, which is especially
	// useful for conditionally loading components for certain routes.
	// See the notes in README.md for more details.
	TestComponent: dynamic(() => import('../../components/test-component')),
	Image: dynamic(() => import('../../components/image')),
	Citation: dynamic(() => import('../../components/citation')),
	Subscribe: dynamic(() => import('../../components/subscribe'))
}

export default function PostPage({ source, frontMatter, params }) {
	const content = hydrate(source, { components })
	return (
		<>
			<Wrapper>
				<Head>
					<title>{frontMatter.title} | Blog</title>
					<meta property='og:title' content={frontMatter.title} />
					<meta property='og:type' content='article' />
					{/* <meta property='og:url' content={params.slug} /> */}

					{/* <meta
						property='og:image'
						content='https://ia.media-imdb.com/images/rock.jpg'
					/> */}
				</Head>
				<div className='flex flex-col sm:flex-row justify-between md:mt-12 space-y-4'>
					<div className='lg:ml-8'>
						<h1 className='font-akzidenz text-4xl md:text-6xl max-w-3xl leading-none '>
							{frontMatter.title}
						</h1>
						{frontMatter.description && (
							<p className='description max-w-3xl'>
								{frontMatter.description}
							</p>
						)}
					</div>
					<div className='self-start sm:self-center lg:mr-16'>
						<ul className='border-l-2 border-black'>
							{frontMatter.date && (
								<li className='pl-4'>
									{JSON.stringify(frontMatter.date)}
								</li>
							)}
							{frontMatter.location && (
								<li className='pl-4'>{frontMatter.location}</li>
							)}
							{frontMatter.medium && (
								<li className='pl-4'>{frontMatter.medium}</li>
							)}
						</ul>
					</div>
				</div>
				<div className='w-full md:w-2/3 xl:w-1/2 justify-center mx-auto mt-16'>
					<main>{content}</main>
				</div>
				<Footer />
			</Wrapper>
		</>
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
			remarkPlugins: [smartypants, autolink, codeblock],
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
