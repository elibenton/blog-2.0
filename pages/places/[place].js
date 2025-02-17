// Package Imports
import { titleCase } from 'voca'
import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import { kebabCase } from 'voca'
import { uniq } from 'lodash'
import cache from 'memory-cache'

import { getAllFilesFrontMatter } from '../../lib/mdx'

// Component Imports
import Entry from '../../components/entry'
import WorldMap from '../../components/world-map'
import SimpleNav from '../../components/layout/simple-nav'

export default function Portfolio({ filteredList, params }) {
	return (
		<>
			<SimpleNav />
			<div className="flex flex-row">
				<div className="flex flex-col max-w-5xl w-2/3">
					<h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8">
						{titleCase(params.place)}
					</h1>
					{filteredList.map((post) => (
						<Entry {...post} />
					))}
				</div>
				<div className="pt-20 top-0 self-start w-1/3 text-white sticky-top">
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

export async function getStaticProps({ params }) {
	const postData = await getAllFilesFrontMatter()

	const filteredList = postData.filter((post) => kebabCase(post.country) === params.place)

	return { props: { filteredList, params } }
}

export async function getStaticPaths() {
	const contentRoot = path.join(process.cwd(), 'posts')

	const places = fs.readdirSync(contentRoot).map((p) => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
		return matter(content).data.country && matter(content).data.country
	})

	const placesUniq = uniq(places).map((loc) => kebabCase(loc))

	const paths = placesUniq.map((place) => ({
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
		return cache.get(key)
	} else {
		const value = callAPI(key)
		cache.put(key, value)
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
