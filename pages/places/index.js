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
							dates={moment(JSON.parse(date)).format('MMMM DD, YYYY')}
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
	const postData = await Promise.all(
		fs.readdirSync(path.join(process.cwd(), 'posts')).map(async p => {
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

	return { props: { postData } }
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
