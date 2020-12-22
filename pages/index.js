// Package Imports
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortBy } from 'lodash'
import { groups } from 'd3'

// Component Imports
import Intro from '../components/intro'
import BlogList from '../components/blog-list'

// Utilility Imports
import groupByDate from '../utils/group-by-date'

export default function Portfolio({ groupedList }) {
	return (
		<>
			<Intro />
			<BlogList groupedList={groupedList} />
		</>
	)
}

const root = process.cwd()

export async function getStaticProps() {
	const contentRoot = path.join(root, 'posts')
	const postData = fs.readdirSync(contentRoot).map(p => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
		return {
			slug: p.replace(/\.mdx/, ''),
			title: matter(content).data.title,
			date: matter(content).data.date,
			location: matter(content).data.location,
			country: matter(content).data.country
		}
	})

	const groupedList = groups(
		sortBy(
			postData.map(date => groupByDate(date)),
			'date'
		).reverse(),
		d => d.tier,
		d => d.display
	)

	return { props: { groupedList } }
}
