// Default Imports
import dynamic from 'next/dynamic'
import Head from 'next/head'

// Package Imports
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import _ from 'lodash'
import path from 'path'
import readingTime from 'reading-time'
import moment from 'moment'

// Component Imports
import Nav from '../../components/layout/post-nav'

// Utililty Imports
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
	// It also works with dynamically-imported components, which is especially
	// useful for conditionally loading components for certain routes.
	// See the notes in README.md for more details.
	Image: dynamic(() => import('../../components/image')),
	Citation: dynamic(() => import('../../components/citation/citation')),
	Subscribe: dynamic(() => import('../../components/subscribe-big'))
}

export default function PostPage({
	source,
	frontMatter: {
		title,
		date,
		location,
		description,
		country,
		template,
		readingTime: { minutes, words }
	}
}) {
	const content = hydrate(source, { components })
	return (
		<>
			<Head>
				<title>{title} | Blog</title>
				<meta property='og:title' content={title} />
				<meta property='og:type' content='article' />
			</Head>
			<Nav title={title} date={date} location={location} />
			<div className='flex flex-col sm:flex-row justify-between space-y-4'>
				<div className='lg:ml-8'>
					<h1 className='font-akzidenz text-4xl md:text-7xl max-w-3xl leading-none '>
						{title}
					</h1>
					{description && (
						<p className='italic text-lg max-w-3xl'>{description}</p>
					)}
				</div>
				<div className='self-start sm:self-center lg:mr-16'>
					<ul className='border-l-2 border-black'>
						{date && (
							<li className='pl-4'>
								{moment(date).format('MMMM DD, YYYY')}
							</li>
						)}
						{location && (
							<li className='pl-4'>
								{location},&nbsp;
								{country && country}
							</li>
						)}
						<li className='pl-4'>
							{template && _.upperFirst(template)}
							{readingTime &&
								template !== 'audio' &&
								` • ${_.ceil(minutes * 1.2)} minutes • ${words} words`}
						</li>
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
		.map(path => path.replace(/\.mdx?$/, ''))
		.map(slug => ({ params: { slug } }))

	return {
		paths,
		fallback: false
	}
}
