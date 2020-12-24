// Package Imports
import moment from 'moment'

// Component Imports
import Intro from '../components/intro'
import Section from '../components/section'
import Entry from '../components/entry'

// Utilility Imports
import { getAllFilesFrontMatter, groupPostsByDate } from '../utils/mdx'

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
										article.map(
											({ slug, title, location, date, country }) => (
												<Entry
													title={title}
													link={slug}
													dates={moment(date, 'YYYY-MM-DD').format(
														'MMMM DD, YYYY'
													)}
													locations={location}
													country={country}
												/>
											)
										)
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

	return { props: { groupedPosts } }
}
