import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import { sortBy } from 'lodash'
import { groups } from 'd3'
import moment from 'moment'
import cache from 'memory-cache'
import readingTime from 'reading-time'
import renderToString from 'next-mdx-remote/render-to-string'

const root = process.cwd()

export async function getFilePaths(layoutType) {
	const allFrontmatter = await getAllFilesFrontMatter(layoutType)
	const filteredFrontmatter = allFrontmatter.filter(
		({ type }) => type === layoutType
	)

	return filteredFrontmatter
}

// Add argument for multiple "post types" (Blog and Newsletter)
export async function getAllFilesFrontMatter() {
	return await Promise.all(
		fs.readdirSync(path.join(root, 'posts')).map(async postSlug => {
			const source = fs.readFileSync(
				path.join(path.join(root), 'posts', postSlug),
				'utf8'
			)
			const { data } = matter(source)

			return {
				...data,
				slug: postSlug.replace(/\.mdx/, ''),
				coords: await checkCache(data.location)
			}
		})
	)
}

export function groupPostsByDate(posts) {
	const sortedPosts = sortBy(
		posts.map(date => groupByDate(date)),
		'date'
	).reverse()

	return groups(
		sortedPosts,
		d => d.tier,
		d => d.display
	).sort((a, b) => a - b)
}

export async function getFileBySlug(slug) {
	const source = fs.readFileSync(
		path.join(root, 'posts', `${slug}.mdx`),
		'utf8'
	)
	const { data, content } = matter(source)
	const mdxSource = await renderToString(content, {
		components: {
			Image: dynamic(() => import('../components/image')),
			Citation: dynamic(() => import('../components/citation/citation')),
			Subscribe: dynamic(() => import('../components/subscribe-big'))
		},
		mdxOptions: {
			remarkPlugins: [
				require('remark-autolink-headings'),
				require('remark-slug'),
				require('remark-code-titles'),
				require('smartypants')
			],
			rehypePlugins: [mdxPrism]
		}
	})

	return {
		mdxSource,
		frontMatter: {
			...data,
			readingTime: readingTime(content),
			slug: slug || null
		}
	}
}

// HELPER FUNCTIONS - Not for export
function checkCache(key) {
	if (cache.get(key)) {
		// console.log('CACHE: ', cache.get(key))
		return cache.get(key)
	} else {
		const value = callAPI(key)
		cache.put(key, value)
		// console.log('API: ', value)
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

function groupByDate(post) {
	const postDate = moment(post.date, 'YYYY-MM-DD')

	if (postDate.isAfter(moment().subtract(1, 'year'))) {
		return {
			...post,
			display: postDate.format('MMMM YYYY'),
			tier: 'tier_1'
		}
	} else if (
		postDate.isBetween(
			moment().subtract(3, 'year'),
			moment().subtract(1, 'year')
		)
	) {
		if (['12', '1', '2'].includes(postDate.format('M'))) {
			return {
				...post,
				display: `Winter ${postDate.format('YYYY')}`,
				tier: 'tier_2'
			}
		} else if (['3', '4', '5'].includes(postDate.format('M'))) {
			return {
				...post,
				display: `Spring ${postDate.format('YYYY')}`,
				tier: 'tier_2'
			}
		} else if (['6', '7', '8'].includes(postDate.format('M'))) {
			return {
				...post,
				display: `Summer ${postDate.format('YYYY')}`,
				tier: 'tier_2'
			}
		} else {
			return {
				...post,
				display: `Autumn ${postDate.format('YYYY')}`,
				tier: 'tier_2'
			}
		}
	} else {
		return {
			...post,
			display: postDate.format('YYYY'),
			tier: 'tier_3'
		}
	}
}
