// Default Imports
import dynamic from 'next/dynamic'

// Package Imports
import hydrate from 'next-mdx-remote/hydrate'
import _ from 'lodash'
import readingTime from 'reading-time'
import moment from 'moment'

// Component Imports
import Nav from '../../components/layout/post-nav'
import BlogSEO from '../../components/blog-seo'

// Utility Imports
import { getFilePaths, getFileBySlug } from '../../utils/mdx'

const components = {
	Image: dynamic(() => import('../../components/image')),
	Citation: dynamic(() => import('../../components/citation/citation')),
	Subscribe: dynamic(() => import('../../components/subscribe-big'))
}

const editUrl = slug =>
	`https://github.com/elibenton/blog-2.0/tree/master/posts/${slug}.mdx`

export default function PostPage({ mdxSource, frontMatter }) {
	const {
		slug,
		title,
		date,
		location,
		description,
		country,
		template,
		readingTime: { minutes, words }
	} = frontMatter

	const content = hydrate(mdxSource, { components })
	return (
		<>
			<BlogSEO {...frontMatter} />
			<Nav
				title={title}
				date={moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY')}
				location={location}
			/>
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
								{moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY')}
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
				<a href={editUrl(slug)} className='font-bold'>
					Edit on Github
				</a>
			</div>
		</>
	)
}

export async function getStaticProps({ params }) {
	const post = await getFileBySlug('posts', params.slug)

	return {
		props: post
	}
}

export async function getStaticPaths() {
	const posts = await getFilePaths('posts')

	return {
		paths: posts.map(p => ({
			params: {
				slug: p.replace(/\.mdx/, '')
			}
		})),
		fallback: false
	}
}
