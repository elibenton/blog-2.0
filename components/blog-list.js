import fs from 'fs'
import _ from 'lodash'
import moment from 'moment'
import Entry from '../components/entry'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
// import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

const root = process.cwd()

export default function BlogList({ postData }) {
	return (
		<ul>
			{postData.map(data => (
				<li>
					<Link href="/blog/[slug]" as={`/blog/${data.slug}`}>
						<a>{data.frontMatter.title}</a>
					</Link>
				</li>
			))}
		</ul>
	)
	// const testList = [
	// 	{
	// 		title: 'hello',
	// 		dates: '10-21-2020',
	// 		locations: 'Birmingham, Alabama',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'goodbye',
	// 		dates: '9-20-2020',
	// 		locations: 'Quito, Ecuador',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'hello',
	// 		dates: '10-18-2020',
	// 		locations: 'Birmingham, Alabama',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'goodbye',
	// 		dates: '9-20-2020',
	// 		locations: 'Quito, Ecuador',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'hello',
	// 		dates: '10-20-2020',
	// 		locations: 'Birmingham, Alabama',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'goodbye',
	// 		dates: '9-20-2020',
	// 		locations: 'Quito, Ecuador',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'hello',
	// 		dates: '10-20-2017',
	// 		locations: 'Birmingham, Alabama',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'goodbye',
	// 		dates: '9-20-2020',
	// 		locations: 'Quito, Ecuador',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'hello',
	// 		dates: '4-20-2020',
	// 		locations: 'Birmingham, Alabama',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'goodbye',
	// 		dates: '9-20-2020',
	// 		locations: 'Quito, Ecuador',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'hello',
	// 		dates: '5-20-2010',
	// 		locations: 'Birmingham, Alabama',
	// 		mediums: 'Audio'
	// 	},
	// 	{
	// 		title: 'goodbye',
	// 		dates: '9-20-2020',
	// 		locations: 'Quito, Ecuador',
	// 		mediums: 'Audio'
	// 	}
	// ]

	// const groupedList = _.groupBy(
	// 	_.sortBy(
	// 		testList.map(item => ({
	// 			...item,
	// 			month: moment(item.dates, 'MM-DD-YYYY').format('MMMM YYYY'),
	// 			dateForSorting: Date.parse(item.dates)
	// 		})),
	// 		'dateForSorting'
	// 	).reverse(),
	// 	'month'
	// )

	// return Object.entries(groupedList).map(entry => (
	// 	<div className="flex mb-10">
	// 		<div className="self-start sticky-top sm:mt-4 vertical">
	// 			<h2 className="font-bold text-green-500">{entry.slice(0, 1)}</h2>
	// 		</div>
	// 		<div id="projects" className="flex-col m-2 sm:m-4">
	// 			{entry
	// 				.slice(1, 2)
	// 				.map(article =>
	// 					article.map(({ title, dates, locations, mediums }) => (
	// 						<Entry
	// 							key={_.random(0, 1000)}
	// 							title={title}
	// 							dates={dates}
	// 							locations={locations}
	// 							mediums={mediums}
	// 						/>
	// 					))
	// 				)}
	// 		</div>
	// 	</div>
	// ))
}

export async function getStaticProps() {
	const contentRoot = path.join(root, 'content')
	const postData = fs.readdirSync(contentRoot).map(p => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
		return {
			slug: p.replace(/\.mdx/, ''),
			content,
			frontMatter: matter(content).data
		}
	})
	return { props: { postData } }
}
