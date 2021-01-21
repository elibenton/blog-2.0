// Package Imports
import fs from 'fs'
import { InView } from 'react-intersection-observer'
import { useState } from 'react'

// Component Imports
import Intro from '../components/intro'
import Section from '../components/section'
import Entry from '../components/entry'

// Library Imports
import { generateRss } from '../lib/rss'
import { getAllFilesFrontMatter, groupPostsByDate } from '../lib/mdx'

export default function Portfolio({ groupedPosts }) {
	const [section, setSection] = useState('')
	return (
		<>
			<Intro />
			<div className="flex flex-row ">
				<div className="flex-grow z-50">
					{groupedPosts.map((group) =>
						group[1].map((entry) => (
							<InView
								as="div"
								onChange={() => setSection(entry[0])}
								rootMargin="0px 0px -100% 0px"
								key="ugh">
								<div className="flex" id={entry[0]} key={entry[0]}>
									<div className="self-start sticky-top vertical mt-1 text-green-500 overflow-scroll">
										{entry[0]}
									</div>
									<div className="ml-2.5 flex-col">
										{entry
											.slice(1, 2)
											.map((article) =>
												article.map((frontmatter) => (
													<Entry key={frontmatter.name} {...frontmatter} />
												))
											)}
									</div>
								</div>
							</InView>
						))
					)}
				</div>
				<h1 className="hidden lg:flex fixed top-0 right-0 p-12 text-gray-200 font-bold text-9xl z-0">
					{section}
				</h1>
				{/* <aside className="hidden lg:flex flex-col flex-wrap w-48 sticky-top self-start px-4">	
					<ul className="mt-6">
						{groupedPosts.map((group) =>
							group[1].map((entry) => (
								<li key={entry[0]}>
									<a className="text-lg hover:italic expand" href={`#${entry[0]}`}>
										{entry[0]}
									</a>
								</li>
							))
						)}
					</ul>
				</aside> */}
			</div>
		</>
	)
}

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter('posts') // Add argument for multiple "post types" (Blog and Newsletter)
	const groupedPosts = groupPostsByDate(posts)

	const rss = generateRss(posts)

	fs.writeFileSync('./public/rss.xml', rss)

	return { props: { groupedPosts } }
}
