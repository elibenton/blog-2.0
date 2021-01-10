// Package Imports
import { parseISO, format } from 'date-fns'

// Component Imports
import Entry from '../../components/entry'
import WorldMap from '../../components/world-map'
import SimpleNav from '../../components/layout/simple-nav'

// Library Imports
import { getAllFilesFrontMatter } from '../../lib/mdx'

export default function PlaceIndex({ posts }) {
	return (
		<>
			<SimpleNav />
			<div className="flex flex-col">
				<div className="pt-6 self-start w-full text-white">
					<WorldMap
						coordinates={posts.map(({ coords }) => coords.results[0].geometry.location)}
						country="world"
					/>
				</div>
				<div className="flex flex-col max-w-5xl w-2/3">
					<h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8">
						The Globe
					</h1>
					{posts.map((post) => (
						<Entry {...post} />
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
