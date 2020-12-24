import { useState } from 'react'

// Package Imports
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import moment from 'moment'
import cache from 'memory-cache'

// Component Imports
import Entry from '../components/entry'
import SimpleNav from '../components/layout/simple-nav'

export default function PlaceIndex({ postData }) {
	const [searchValue, setSearchValue] = useState('')
	const filteredBlogPosts = postData
		.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		.filter(
			frontmatter =>
				frontmatter.title.toLowerCase().includes(searchValue.toLowerCase()) // CAN ALSO BE USED WITH DESCRIPTION
		)

	return (
		<>
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

			{!filteredBlogPosts.length && 'No posts found.'}
			{filteredBlogPosts.map(({ title, slug, date, location, country }) => (
				<Entry
					title={title}
					link={slug}
					dates={moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY')}
					locations={location}
					country={country}
				/>
			))}
		</>
	)
}

export async function getStaticProps() {
	const postData = await Promise.all(
		fs.readdirSync(path.join(process.cwd(), 'posts')).map(async p => {
			const content = fs.readFileSync(
				path.join(path.join(process.cwd(), 'posts'), p),
				'utf8'
			)
			const frontmatter = matter(content).data

			return {
				...frontmatter,
				slug: p.replace(/\.mdx/, ''),
				date: JSON.stringify(frontmatter.date),
				coords: await checkCache(frontmatter.location)
			}
		})
	)

	return { props: { postData } }
}

function checkCache(key) {
	if (cache.get(key)) {
		return cache.get(key)
	} else {
		const value = callAPI(key)
		cache.put(key, value)
		return value
	}
}

async function callAPI(location) {
	const res = await fetch(
		`https://maps.googleapis.com` +
			`/maps/api/geocode/json?` +
			`address=${location}&` +
			`key=${process.env.GOOGLE_API_KEY}`
	)

	return await res.json()
}
