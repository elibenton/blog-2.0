// Package Imports
import moment from 'moment'
import fs from 'fs'

// Component Imports
import Intro from '../components/intro'
import Section from '../components/section'
import Entry from '../components/entry'

// Utility Imports
import { generateRss } from '../lib/rss'
import { getAllFilesFrontMatter, groupPostsByDate } from '../lib/mdx'

export default function Portfolio({ groupedPosts }) {
	return (
		<>
			<Intro />
			<div className='flex flex-row'>
				<div className='flex-grow'>
					{groupedPosts.map(group =>
						group[1].map(entry => (
							<Section sectionName={entry[0]}>
								{entry
									.slice(1, 2)
									.map(article =>
										article.map(frontmatter => (
											<Entry
												{...frontmatter}
												date={moment(
													frontmatter.date,
													'YYYY-MM-DD'
												).format('MMMM D, YYYY')}
											/>
										))
									)}
							</Section>
						))
					)}
				</div>
				<aside className='hidden lg:flex flex-col flex-wrap w-48 sticky-top self-start px-4'>
					<ul className='mt-6'>
						{groupedPosts.map(group =>
							group[1].map(entry => (
								<li>
									<a
										className='text-lg hover:italic expand'
										href={`#${entry[0]}`}>
										{entry[0]}
									</a>
								</li>
							))
						)}
					</ul>
				</aside>
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
