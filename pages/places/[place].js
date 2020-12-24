// Package Imports
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import moment from 'moment'
import cache from 'memory-cache'

// Component Imports
import Entry from '../../components/entry'
import WorldMap from '../../components/world-map'
import SimpleNav from '../../components/layout/simple-nav'

export default function Portfolio({ filteredList, params }) {
	filteredList.map(({ coords }) => console.log(coords))

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
							dates={moment(JSON.parse(date)).format('MMMM DD, YYYY')}
							locations={location}
							country={country}
						/>
					))}
				</div>
				<div className='pt-20 top-0 self-start w-1/3 text-gray-100 sticky-top'>
					<WorldMap
						coordinates={filteredList.map(
							({ coords }) => coords.results[0].geometry.location
						)}
						country={params.place}
					/>
				</div>
			</div>
		</>
	)
}

const root = process.cwd()

export async function getStaticProps({ params }) {
	const API_KEY = process.env.GOOGLE_API_KEY
	const contentRoot = path.join(root, 'posts')

	const postData = await Promise.all(
		fs.readdirSync(contentRoot).map(async p => {
			const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
			const frontmatter = matter(content).data

			return {
				...frontmatter,
				slug: p.replace(/\.mdx/, ''),
				date: JSON.stringify(frontmatter.date),
				coords: await checkCache(frontmatter.location)
			}
		})
	)

	const filteredList = postData.filter(
		post => _.kebabCase(post.country) === params.place
	)

	return { props: { filteredList, params }, revalidate: 180 }
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

function checkCache(key) {
	if (cache.get(key)) {
		console.log(cache.get(key))

		return cache.get(key)
	} else {
		const value = callAPI(key)
		cache.put(key, value)

		console.log(cache.get(key))

		return value
	}
}

async function callAPI(location) {
	const res = await fetch(
		`https://maps.googleapis.com` +
			`/maps/api/geocode/json?` +
			`address=${location}&` +
			`key=${process.env.GOOGLE_API_KEY}`
	)

	return await res.json()
}
