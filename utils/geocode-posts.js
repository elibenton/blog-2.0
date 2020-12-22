import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function geocodePosts(contentRoot) { 
   return await Promise.all(
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
}
