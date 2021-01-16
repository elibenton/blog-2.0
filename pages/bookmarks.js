// Package Imports
import { useState, useRef } from 'react'
import { parseISO, format } from 'date-fns'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import getBookmarks from '../lib/getAirtableBookmarks'

import { toLowerCase } from 'voca'

// Component Imports
import Bookmark from '../components/bookmark'

export default function PlaceIndex({ bookmarks }) {
	console.log(bookmarks)
	const [searchValue, setSearchValue] = useState('')
	// const filteredBlogPosts = bookmarks
	// 	.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
	// 	.filter(
	// 		(frontmatter) =>
	// 			frontmatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
	// 			frontmatter.description.toLowerCase().includes(searchValue.toLowerCase()) // CAN ALSO BE USED WITH DESCRIPTION
	// 	)

	const [scrolled, setScrolled] = useState(false)
	const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 })
	const elementRef = useRef()

	useScrollPosition(
		({ currPos }) => {
			setElementPosition(currPos)
			currPos.y <= 0 ? setScrolled(true) : setScrolled(false)
		},
		[],
		elementRef
	)

	console.log(elementPosition.y, scrolled)

	return (
		<div>
			{/* {!searchValue ? <Intro /> : null}
			<div>
				<div
					ref={elementRef}
					className={
						scrolled
							? 'flex flex-row w-11/12 sm:mb-20 border-b-2 dark:border-white border-black sticky top-0 z-10 items-center'
							: 'invisible'
					}>
					<input
						aria-label="Search articles"
						type="text"
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder="Search articles"
						className="sm:h-20 px-2 py-4 text-2xl sm:text-5xl w-full text-gray-900 dark:text-white   dark:bg-black"
					/>
					<svg
						className="w-6 h-6 sm:h-10 sm:w-10 text-gray-400 dark:text-gray-300"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div> */}
			<div className="flex flex-row min-h-screen">
				<div className="hidden sm:flex fixed text-gray-200 font-bold text-9xl p-6 right-12">
					Jan 2020
				</div>
				<div className="z-10">
					{!bookmarks.length && 'No posts found.'}
					{bookmarks.map(({ id, fields }) => (
						<Bookmark
							key={id}
							{...fields}
							searchTerm={searchValue}
							// date={format(parseISO(frontmatter.date), 'dd-MM-yyyy')}
						/>
					))}
				</div>
			</div>
		</div>
		// </div>
	)
}

export async function getStaticProps() {
	const bookmarks = await getBookmarks()

	return {
		props: {
			bookmarks,
			revalidate: 300
		}
	}
}
