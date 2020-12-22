import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import _ from 'lodash'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import CustomLink from '../../components/custom-link'
import readingTime from 'reading-time'

import Nav from '../../components/nav'

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
	TestComponent: dynamic(() => import('../../components/test-component')),
	Image: dynamic(() => import('../../components/image')),
	Citation: dynamic(() => import('../../components/citation')),
	Subscribe: dynamic(() => import('../../components/subscribe-big'))
}

export default function PostPage({ source, frontMatter, params }) {
	const content = hydrate(source, { components })
	return (
		<>
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
			<Nav
				title={frontMatter.title}
				date={frontMatter.date}
				location={frontMatter.location}
			/>
			<div className='flex flex-col sm:flex-row justify-between space-y-4'>
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
						{frontMatter.country && (
							<li className='pl-4'>{frontMatter.country}</li>
						)}
						{frontMatter.template && (
							<li className='pl-4'>{frontMatter.template}</li>
						)}
						{frontMatter.readingTime && (
							<li className='pl-4'>
								{`${_.ceil(
									frontMatter.readingTime.minutes * 1.2
								)} minutes • ${frontMatter.readingTime.words} words`}
							</li>
						)}
						{console.log(frontMatter.readingTime)}
					</ul>
				</div>
			</div>
			<div className='w-full md:w-2/3 xl:w-1/2 justify-center mx-auto mt-16'>
				<main>{content}</main>
			</div>
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
			remarkPlugins: [
				require('remark-autolink-headings'),
				require('remark-slug'),
				require('remark-code-titles'),
				require('smartypants')
			],
			rehypePlugins: [require('mdx-prism')]
		},
		scope: data
	})

	return {
		props: {
			source: mdxSource,
			frontMatter: {
				wordCount: content.split(/\s+/gu).length,
				readingTime: readingTime(content),
				...data
			}
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
