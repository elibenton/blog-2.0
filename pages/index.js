import Wrapper from '../components/wrapper'
import Intro from '../components/intro'
import Footer from '../components/footer'
import BlogList from '../components/blog-list'

import _ from 'lodash'
import moment from 'moment'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export default function Portfolio({ groupedList }) {
	return (
		<Wrapper>
			<Intro />
			<BlogList groupedList={groupedList} />
			<Footer />
		</Wrapper>
	)
}

export async function getStaticProps() {
	const contentRoot = path.join(root, 'posts')
	const postData = fs.readdirSync(contentRoot).map(p => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
		return {
			slug: p.replace(/\.mdx/, ''),
			frontMatter: matter(content).data
		}
	})

	const groupedList = _.groupBy(
		_.sortBy(
			postData.map(item => ({
				slug: item.slug,
				title: item.frontMatter.title,
				location: item.frontMatter.location,
				dateSerialized: moment(item.frontMatter.date, 'YYYY-MM-DD').format(
					'YYYY-MM-DD'
				),
				month: moment(item.frontMatter.date, 'YYYY-MM-DD').format(
					'MMMM YYYY'
				),
				dateForSorting: Date.parse(item.frontMatter.date)
			})),
			'dateForSorting'
		).reverse(),
		'month'
	)
	return { props: { groupedList } }
}
