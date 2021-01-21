// Package Imports
import { useState } from 'react'
import { titleCase } from 'voca'
import { useInView } from 'react-intersection-observer'
import { groups } from 'd3'

// Library Import
import getBookmarks from '../lib/getAirtableBookmarks'

// Component Imports
import Bookmark from '../components/bookmark'

export default function PlaceIndex({ bookmarks, groupedBookmarks }) {
	const [searchValue, setSearchValue] = useState('')
	const filteredBlogPosts = bookmarks
		.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		.filter(
			({ fields }) =>
				fields.Title.toLowerCase().includes(searchValue.toLowerCase()) ||
				fields.Description.toLowerCase().includes(searchValue.toLowerCase()) // CAN ALSO BE USED WITH DESCRIPTION
		)
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0
	})

	console.log(groupedBookmarks)

	return (
		<div>
			<div>
				<div className="flex flex-row w-11/12 sm:mb-20 border-b-2 dark:border-white border-black sticky top-0 z-10 items-center">
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
				</div>
				<div className="flex flex-row min-h-screen">
					<div className="hidden sm:flex fixed text-gray-200 font-bold text-9xl p-6 right-12">
						{inView && 'VIEW'}
					</div>
					<div className="z-10">
						{!bookmarks.length && 'No posts found.'}
						{bookmarks.map(
							({ id, fields: { Author, Published, Title, Link, Description } }) => (
								<div
									key={id}
									ref={ref}
									id="Bookmark"
									className="group flex flex-col sm:flex-row items-start">
									<div
										id="Metadata"
										className="flex flex-row sm:flex-col sm:w-56 sm:pr-5 text-right gap-x-2 sm:gap-0 z-50">
										<a className="font-plex text-sm">{Author}</a>
										<span className="text-sm flex sm:hidden">&bull;</span>
										<a className="font-plex text-sm">{Published}</a>
									</div>
									<div
										id="Title"
										className="flex flex-col sm:border-l-2 border-black pb-4 sm:w-10/12 sm:pl-5 z-50">
										<a
											href={Link}
											className="font-bold sm:font-normal leading-tight text-lg sm:text-3xl md:text-4xl font-akzidenz group-hover:underline">
											{searchValue === ''
												? Title
												: Title.split(new RegExp(titleCase(searchValue), 'g')).map(
														(part, index) =>
															index ===
															Title.split(new RegExp(titleCase(searchValue), 'g'))
																.length -
																1 ? (
																<span>{part}</span>
															) : (
																<>
																	<span>{part}</span>
																	<span className="bg-yellow-200 pt-2">
																		{titleCase(searchValue)}
																	</span>
																</>
															)
												  )}
										</a>
										{/* <div className="hidden group-hover:block relative top-0 text-xl text-red-500">◉</div> */}
										<p
											id="Description"
											className="hidden group-hover:flex max-w-xl text-sm pb-6">
											{searchValue === ''
												? Description
												: Description.split(new RegExp(searchValue, 'g')).map(
														(part, index) =>
															index ===
															Description.split(new RegExp(searchValue, 'g'))
																.length -
																1 ? (
																<span>{part}</span>
															) : (
																<>
																	<span>{part}</span>
																	<span className="bg-yellow-200">
																		{searchValue}
																	</span>
																</>
															)
												  )}
										</p>
									</div>

									{/* <div id="Image" className="hidden group-hover:flex fixed bottom-12 right-0 z-0">
				{Images &&
					Images.map((image) => (
						<>
							{console.log(image)}
							<Image
								key={image.id}
								height={image.thumbnails.large.height}
								width={image.thumbnails.large.width}
								src={image.thumbnails.large.url}
							/>
						</>
					))}
			</div> */}
								</div>
							)
						)}
					</div>
				</div>
			</div>
			<div className="h-screen"></div>
		</div>
	)
}

export async function getStaticProps() {
	const bookmarks = await getBookmarks()

	const groupedBookmarks = groups(bookmarks, (bookmark) => bookmark.fields.Month)

	return {
		props: {
			groupedBookmarks,
			bookmarks,
			revalidate: 300
		}
	}
}
