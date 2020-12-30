// Package Imports
import _ from 'lodash'
import moment from 'moment'

// Component Imports
import Entry from '../../components/entry'
import WorldMap from '../../components/world-map'
import SimpleNav from '../../components/layout/simple-nav'

// Utility Imports
import { getAllFilesFrontMatter } from '../../lib/mdx'

export default function PlaceIndex({ posts }) {
	return (
		<>
			<SimpleNav />
			<div className='flex flex-col'>
				<div className='pt-6 self-start w-full text-gray-100'>
					<WorldMap
						coordinates={posts.map(
							({ coords }) => coords.results[0].geometry.location
						)}
						country='world'
					/>
				</div>
				<div className='flex flex-col max-w-5xl w-2/3'>
					<h1 className='text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8'>
						The Globe
					</h1>
					{posts.map(({ title, slug, date, location, country }) => (
						<Entry
							title={title}
							link={slug}
							dates={moment(date).format('MMMM DD, YYYY')}
							locations={location}
							country={country}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter('posts') // Add argument for multiple "post types" (Blog and Newsletter)

	return { props: { posts } }
}
