import Entry from '../components/entry'
import Section from '../components/section'
import Wrapper from '../components/wrapper'
import Intro from '../components/intro'
import TableOfContents from '../components/toc'
import Footer from '../components/footer'
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
			<div className='flex flex-row'>
				<div className='flex-grow'>
					{/* <Section sectionName='Projects'>
						<Entry
							title={`Don't Wait, Vote!`}
							dates='May 2020 - November 2020'
							locations='Birmingham, Alabama'
							mediums='Audio'
						/>
						<Entry
							title='The Watson Fellowship'
							dates='July 2019 - March 2020'
							locations='Yangon, Myanmar'
							mediums='Data'
						/>
						<Entry
							title='Discussion Collective'
							dates='January 2018 - May 2019'
							locations='Los Angeles, California'
							mediums='Photography'
						/>
						<Entry
							title='The Political Arguments of Podcasting'
							dates='August 2018 - May 2019'
							locations='Los Angeles, California'
						/>
					</Section> */}
					{Object.entries(groupedList).map(entry => (
						<Section sectionName={entry.slice(0, 1)}>
							{entry
								.slice(1, 2)
								.map(article =>
									article.map(({ slug, frontMatter }) => (
										<Entry
											title={frontMatter.title}
											link={slug}
											dates={moment(
												frontMatter.date,
												'MM-DD-YYYY'
											).format('DD MMMM YYYY')}
											locations={frontMatter.location}
										/>
									))
								)}
						</Section>
					))}
				</div>
				<TableOfContents />
			</div>
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
				...item,
				month: moment(item.frontMatter.date, 'MM-DD-YYYY').format(
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
