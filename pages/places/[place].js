// Package Imports
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Component Imports
import Entry from '../../components/entry'
import WorldMap from '../../components/world-map'
import SimpleNav from '../../components/layout/simple-nav'

export default function Portfolio({ filteredList, params }) {
	return (
		<>
			<SimpleNav />
			<div className='flex flex-row'>
				<div className='flex flex-col max-w-5xl w-2/3'>
					<h1 className='text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8'>
						{_.startCase(params.place)}
					</h1>
					{filteredList.map(({ title, slug, date, location, country }) => (
						<Entry
							title={title}
							link={slug}
							dates={date}
							locations={location}
							country={country}
						/>
					))}
				</div>
				<div className='pt-20 top-0 self-start w-1/3 text-gray-100 sticky-top'>
					<WorldMap
						coordinates={filteredList.map(({ coords }) => coords)}
						country={params.place}
					/>
				</div>
			</div>
		</>
	)
}

const root = process.cwd()

export async function getStaticProps({ params }) {
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

	const filteredList = postData.filter(
		post => _.kebabCase(post.country) === params.place
	)

	return { props: { filteredList, params } }
}

export async function getStaticPaths() {
	const contentRoot = path.join(root, 'posts')

	const places = fs.readdirSync(contentRoot).map(p => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
		return matter(content).data.country && matter(content).data.country
	})

	const placesUniq = _.uniq(places).map(loc => _.kebabCase(loc))

	const paths = placesUniq.map(place => ({
		params: {
			place
		}
	}))

	return {
		paths: paths,
		fallback: false
	}
}
