// Default Imports
import dynamic from 'next/dynamic'
import hydrate from 'next-mdx-remote/hydrate'

// Package Imports
import _ from 'lodash'
import readingTime from 'reading-time'
import moment from 'moment'
import cache from 'memory-cache'

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

export default function PostPage({ source, frontmatter }) {
	const {
		slug,
		title,
		date,
		location,
		description,
		country,
		type,
		isbn,
		bookLinks,
		affiliateLink,
		readingTime: { minutes, words }
	} = frontmatter

	console.log(bookLinks)

	const content = hydrate(source, { components })
	return (
		<>
			<BlogSEO {...frontmatter} />
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
							{type && _.upperFirst(type)}
							{readingTime &&
								type !== 'audio' &&
								` • ${_.ceil(minutes * 1.2)} minutes • ${words} words`}
						</li>
						<li className='pl-4'>
							<a className='hover:underline' href={affiliateLink}>
								Buy from your local bookstore (affiliate link)
							</a>
						</li>
					</ul>
				</div>
			</div>
			<h1>What the professionals say</h1>
			<div
				class='bm-reviews'
				data-isbn={isbn.toString()}
				data-width='auto'
				data-border='2px'
				data-count='100'
				data-link='true'
			/>
			<script src='//lithub.com/b/v1/bookmarks.js?ver=1.3' />
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
	const postProps = await getFileBySlug('books', params.slug)

	const response = await fetch(
		`https://api.bookish.tech/search?type=isbn&id=${postProps.frontMatter.isbn}`
	)

	const bookLinks = await response.json()

	return {
		props: {
			source: postProps.mdxSource,
			frontmatter: {
				...postProps.frontMatter,
				isbn: bookLinks.results.isbn13[0],
				bookLinks: bookLinks.permalinks,
				affiliateLink: `https://bookshop.org/a/${process.env.BOOKSHOP_AFFILIATE_ID}/${bookLinks.results.isbn13[0]}`
			}
		}
	}
}

export async function getStaticPaths() {
	const posts = await getFilePaths('books')

	return {
		paths: posts.map(p => ({
			params: {
				slug: p.replace(/\.mdx/, '')
			}
		})),
		fallback: false
	}
}

function checkCache(key) {
	if (cache.get(key)) {
		console.log(cache.get(key))
		return cache.get(key)
	} else {
		const value = callAPI(key)
		cache.put(key, value)
		console.log(value)
		return value
	}
}

async function callAPI(ISBN) {
	const res = await fetch(
		`https://api.bookish.tech/search?type=isbn&id=${ISBN}`
	)

	return await res.json()
}
