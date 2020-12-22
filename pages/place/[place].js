import Entry from '../../components/entry'
import WorldMap from '../../components/world-map'

import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export default function Portfolio({ filteredList, params }) {
	return (
		<div className='flex flex-row'>
			<div className='flex flex-col max-w-5xl w-2/3'>
				<h1 className='text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8'>
					{_.startCase(params.place)}
				</h1>
				{filteredList.map(
					({ title, slug, date, location, country, coords }) => (
						<Entry
							title={title}
							link={slug}
							dates={date}
							locations={location}
							country={country}
						/>
					)
				)}
			</div>
			<div className='pt-20 top-0 self-start w-1/3 text-gray-100 sticky-top'>
				<WorldMap coordinates={filteredList.map(({ coords }) => coords)} />
			</div>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const contentRoot = path.join(root, 'posts')

	const postData = await Promise.all(
		fs.readdirSync(contentRoot).map(async p => {
			const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')

			const res = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${
					matter(content).data.location
				}&key=AIzaSyBNwpvFZDye2gMprVqJvGgT4uoN6cdW5jo`
			)

			const coords = await res.json()
			console.log(coords)

			return {
				slug: p.replace(/\.mdx/, ''),
				title: matter(content).data.title,
				date: matter(content).data.date,
				location: matter(content).data.location,
				tags: matter(content).data.tags,
				country: matter(content).data.country,
				coords: coords.results[0].geometry.location
			}
		})
	)

	console.log(postData)

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

	console.log(placesUniq)

	return {
		paths: paths,
		fallback: false
	}
}
