// Package Imports
import { useState } from 'react'
import { groups } from 'd3'
import { InView } from 'react-intersection-observer'
import { parse } from 'date-fns'

// Library Import
import getBookmarks from '../lib/getAirtableBookmarks'

// Component Imports
import Bookmark from '../components/bookmark'

function filterBookmarks(bookmarks, searchValue) {
	return bookmarks
		.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		.filter(
			({ fields }) =>
				fields.Title.toLowerCase().includes(searchValue.toLowerCase()) ||
				fields.Description.toLowerCase().includes(searchValue.toLowerCase()) ||
				fields.Author.toLowerCase().includes(searchValue.toLowerCase())
		)
}

export default function PlaceIndex({ groupedWithDate }) {
	const [searchValue, setSearchValue] = useState('')
	const [section, setSection] = useState('Hello')
	const [searching, setSearching] = useState(false)

	console.log(section)

	return (
		<div>
			{searching ? (
				<div className="flex flex-row w-full sm:mb-10 border-b-2 bg-white dark:border-white border-black sticky top-0 z-50 items-center">
					<input
						autoFocus
						aria-label="Search articles"
						type="text"
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder="Search articles"
						className=" focus:outline-none sm:h-20 p-4 text-2xl sm:text-5xl w-full text-gray-900 dark:text-white  dark:bg-black bg-white"
					/>
					<button onClick={() => setSearching(false)}>
						<svg
							className="w-6 h-6 sm:h-10 sm:w-10 text-gray-400 dark:text-gray-300 mr-4 hover:text-black duration-200"
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
					</button>
				</div>
			) : (
				<>
					<button onClick={() => setSearching(true)}>
						<svg
							className="sm:h-12 sm:w-12 text-gray-400 ml-4 hover:text-black duration-200 fixed z-50"
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
					</button>
					<h1 className="hidden lg:flex fixed top-0 right-0 p-12 text-gray-200 font-bold text-8xl z-0">
						{section}
					</h1>
				</>
			)}
			{groupedWithDate.map(({ monthNum, monthText, bookmarks }) => (
				<div key={monthText}>
					{filterBookmarks(bookmarks, searchValue).map((props) => (
						<InView
							as="div"
							onChange={() => setSection(monthText)}
							rootMargin="0px 0px -100% 0px">
							<Bookmark searchValue={searchValue} {...props} />
						</InView>
					))}
				</div>
			))}
		</div>
	)
}

export async function getStaticProps() {
	const bookmarks = await getBookmarks()
	const groupedBookmarks = groups(bookmarks, (bookmark) => bookmark.fields.Month)
	const groupedWithDate = groupedBookmarks
		.map((month) => ({
			monthText: month[0],
			monthNum: Number(parse(month[0], 'MMMM yyyy', new Date())),
			bookmarks: month[1]
		}))
		.sort((a, b) => b.monthNum - a.monthNum)

	return {
		props: {
			groupedWithDate,
			revalidate: 300
		}
	}
}
