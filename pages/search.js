// Package Imports
import { useState } from 'react'
import { parseISO, format } from 'date-fns'
import cache from 'memory-cache'
import Link from 'next/link'

import { getAllFilesFrontMatter } from '../lib/mdx'

// Component Imports
import SearchEntry from '../components/search-entry'

export default function PlaceIndex({ postData }) {
	const [searchValue, setSearchValue] = useState('')
	const filteredBlogPosts = postData
		.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		.filter(
			frontmatter =>
				frontmatter.title
					.toLowerCase()
					.includes(searchValue.toLowerCase()) ||
				frontmatter.description
					.toLowerCase()
					.includes(searchValue.toLowerCase()) // CAN ALSO BE USED WITH DESCRIPTION
		)

	return (
		<div>
			<div className='flex flex-row mb-8 sm:mb-20 border-b-2 dark:border-white border-black sticky top-0 z-10 items-center bg-gray-100'>
				<input
					aria-label='Search articles'
					type='text'
					onChange={e => setSearchValue(e.target.value)}
					placeholder='Search articles'
					className='sm:h-20 px-2 py-4 text-2xl sm:text-5xl w-full text-gray-900 dark:text-gray-100  bg-gray-100 dark:bg-black'
				/>
				<svg
					className='w-6 h-6 sm:h-10 sm:w-10 text-gray-400 dark:text-gray-300'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
					/>
				</svg>
			</div>
			<div className='flex flex-row'>
				<div>
					{!filteredBlogPosts.length && 'No posts found.'}
					{filteredBlogPosts.map(frontmatter => (
						<SearchEntry
							{...frontmatter}
							searchTerm={searchValue}
							date={format(parseISO(frontmatter.date), 'MMMM d, yyyy')}
						/>
					))}
				</div>
				<aside className='hidden lg:flex flex-row flex-wrap sticky-top self-start px-4 top-24 gap-4'>
					<Link href='/about'>
						<a className='bg-gray-200 rounded p-3 hover:bg-gray-400 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700'>
							Place
						</a>
					</Link>
					<Link href='/about'>
						<a className='bg-gray-200 rounded p-3 hover:bg-gray-400 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700'>
							Tag
						</a>
					</Link>
					<Link href='/about'>
						<a className='bg-gray-200 rounded p-3 hover:bg-gray-400 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700'>
							Date
						</a>
					</Link>
				</aside>
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const postData = await getAllFilesFrontMatter()

	return { props: { postData } }
}
