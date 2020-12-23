// Package Imports
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Component Imports
import Entry from '../components/entry'
import WorldMap from '../components/world-map'
import SimpleNav from '../components/layout/simple-nav'

export default function PlaceIndex({ postData }) {
	return (
		<>
			<SimpleNav />
			<div className='flex flex-col'>
				<div className='pt-6 self-start w-full text-gray-100'>
					<WorldMap
						coordinates={postData.map(({ coords }) => coords)}
						country='world'
					/>
				</div>
				<div className='flex flex-col max-w-5xl w-2/3'>
					<h1 className='text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8'>
						The Globe
					</h1>
					{postData.map(({ title, slug, date, location, country }) => (
						<Entry
							title={title}
							link={slug}
							dates={date}
							locations={location}
							country={country}
						/>
					))}
				</div>
			</div>
		</>
	)
}

const root = process.cwd()

export async function getStaticProps() {
	const contentRoot = path.join(root, 'posts')

	const postData = await Promise.all(
		fs.readdirSync(contentRoot).map(async p => {
			const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
			const frontmatter = matter(content).data

			const res = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${frontmatter.location}&key=AIzaSyBNwpvFZDye2gMprVqJvGgT4uoN6cdW5jo`
			)

			const coords = await res.json()

			return {
				...frontmatter,
				slug: p.replace(/\.mdx/, ''),
				coords: coords.results[0].geometry.location
			}
		})
	)

	return { props: { postData } }
}
