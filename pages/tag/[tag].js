import BlogListFiltered from '../../components/blog-list-filter'
import Entry from '../../components/entry'

import _ from 'lodash'
import moment from 'moment'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { groups } from 'd3'

const root = process.cwd()

export default function Portfolio({ filteredList, params }) {
	return (
		<div className='flex flex-col'>
			<h1 className='text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8'>
				{_.startCase(params.tag)}
			</h1>
			{filteredList.map(({ title, slug, date, location }) => (
				<Entry
					title={title}
					link={slug}
					dates={date}
					locations={location}
				/>
			))}
		</div>
	)
}

export async function getStaticProps({ params }) {
	const contentRoot = path.join(root, 'posts')
	const postData = fs.readdirSync(contentRoot).map(p => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
		return {
			slug: p.replace(/\.mdx/, ''),
			title: matter(content).data.title,
			date: matter(content).data.date,
			location: matter(content).data.location,
			tags: matter(content).data.tags
		}
	})

	const filteredList = postData.filter(post =>
		post.tags.map(tag => _.kebabCase(tag)).includes(params.tag)
	)

	console.log(postData)

	return { props: { filteredList, params } }
}

export async function getStaticPaths() {
	const contentRoot = path.join(root, 'posts')

	const tags = fs.readdirSync(contentRoot).map(p => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
		return matter(content).data.tags && matter(content).data.tags
	})

	const tagsUniq = _.uniq(tags.flat()).map(tag => _.kebabCase(tag))

	const paths = tagsUniq.map(tag => ({
		params: {
			tag
		}
	}))

	console.log(tagsUniq)

	return {
		paths: paths,
		fallback: false
	}
}
