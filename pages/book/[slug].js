// Default Imports
import dynamic from 'next/dynamic'
import hydrate from 'next-mdx-remote/hydrate'

// Package Imports
import { parseISO, format } from 'date-fns'
import { titleCase } from 'voca'
import cache from 'memory-cache'

// Component Imports
import Nav from '../../components/layout/post-nav'
import BlogSEO from '../../components/blog-seo'
import Body from '../../components/post-body'

// Library Imports
import { getFilePaths, getFileBySlug } from '../../lib/mdx'

const components = {
	Image: dynamic(() => import('../../components/image')),
	Citation: dynamic(() => import('../../components/citation/citation')),
	Subscribe: dynamic(() => import('../../components/subscribe-big'))
}

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

	const content = hydrate(source, { components })
	return (
		<>
			<BlogSEO {...frontmatter} />
			<Nav
				title={title}
				date={format(parseISO(date), 'MMMM d, yyyy')}
				location={location}
			/>
			<div className='flex flex-col sm:flex-row justify-between space-y-4'>
				<div className='lg:ml-8 w-3/4'>
					<h1 className='font-akzidenz text-4xl md:text-8xl md:mt-8 max-w-3xl leading-none'>
						{title}
					</h1>
					{description && (
						<p className='text-lg max-w-3xl font-plex'>{description}</p>
					)}
				</div>
				<div className='self-start sm:self-center lg:mr-16 w-1/4'>
					<ul className='border-l-2 border-black'>
						{date && (
							<li className='pl-4'>
								{format(parseISO(frontmatter.date), 'MMMM d, yyyy')}
							</li>
						)}
						{location && (
							<li className='pl-4'>
								{location},&nbsp;
								{country && country}
							</li>
						)}
						<li className='pl-4'>
							{type && titleCase(type)}
							{type !== 'audio' &&
								` • ${Math.ceil(minutes)} minutes • ${words} words`}
						</li>
						<li className='pl-4'>
							<a className='hover:underline' href={affiliateLink}>
								Buy from your local bookstore (affiliate link)
							</a>
						</li>
					</ul>
					<div className='border-2 border-black h-auto p-4'>
						<h3>{bookLinks.results.title[0]}</h3>
						<h4>By {bookLinks.results.authors[0]}</h4>
						<p className='text-gray-700 text-sm mb-4'>
							View on{' '}
							<a href={`https://www.worldcat.org/isbn/${isbn}`}>
								World Cat
							</a>
						</p>
						<p className='text-gray-700 text-sm mb-4'>
							Bookshop is an online bookstore that supports local,
							independent shops. A great alternative to Amazon, they
							gives 75% of their profits away. They also give 10% to me!
							(This is an affiliate link)
						</p>
						<a href={affiliateLink} target='_blank'>
							<button className='bg-black text-white p-2 rounded duration-200'>
								Purchase
							</button>
						</a>
					</div>
				</div>
			</div>
			{/* <h1>What the professionals say</h1>
			<div
				class='bm-reviews'
				data-isbn={isbn.toString()}
				data-width='auto'
				data-border='2px'
				data-count='100'
				data-link='true'
			/>
			<script src='//lithub.com/b/v1/bookmarks.js?ver=1.3' /> */}
			<Body content={content} slug={slug} />
		</>
	)
}

export async function getStaticProps({ params }) {
	const postProps = await getFileBySlug(params.slug)

	const bookLinks = await checkCache(postProps.frontMatter.isbn)

	return {
		props: {
			source: postProps.mdxSource,
			frontmatter: {
				...postProps.frontMatter,
				bookLinks: bookLinks,
				isbn: bookLinks.results.isbn13[0],
				affiliateLink: `https://bookshop.org/a/${process.env.BOOKSHOP_AFFILIATE_ID}/${bookLinks.results.isbn13[0]}`
			}
		}
	}
}

export async function getStaticPaths() {
	const posts = await getFilePaths('book')

	return {
		paths: posts.map(({ slug }) => ({
			params: {
				slug: slug
			}
		})),
		fallback: false
	}
}

function checkCache(key) {
	if (cache.get(key)) {
		// console.log(cache.get(key))
		return cache.get(key)
	} else {
		const value = callAPI(key)
		cache.put(key, value)
		// console.log(value)
		return value
	}
}

async function callAPI(ISBN) {
	const res = await fetch(
		`https://api.bookish.tech/search?type=isbn&id=${ISBN}`
	)

	return await res.json()
}
