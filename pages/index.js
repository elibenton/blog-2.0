// Package Imports
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortBy } from 'lodash'
import { groups } from 'd3'

// Component Imports
import Intro from '../components/intro'
import Section from '../components/section'
import Entry from '../components/entry'

// Utilility Imports
import groupByDate from '../utils/group-by-date'

export default function Portfolio({ groupedList }) {
	return (
		<>
			<Intro />
			<div className='flex flex-row'>
				<div className='flex-grow'>
					{groupedList[0][1].map(entry => (
						<Section sectionName={entry[0]}>
							{entry
								.slice(1, 2)
								.map(article =>
									article.map(
										({ slug, title, location, date, country }) => (
											<Entry
												title={title}
												link={slug}
												dates={date}
												locations={location}
												country={country}
											/>
										)
									)
								)}
						</Section>
					))}
					{groupedList[1][1].map(entry => (
						<Section sectionName={entry[0]}>
							{entry
								.slice(1, 2)
								.map(article =>
									article.map(
										({ slug, title, location, date, country }) => (
											<Entry
												title={title}
												link={slug}
												dates={date}
												locations={location}
												country={country}
											/>
										)
									)
								)}
						</Section>
					))}
					{groupedList[2][1].map(entry => (
						<Section sectionName={entry[0]}>
							{entry
								.slice(1, 2)
								.map(article =>
									article.map(
										({ slug, title, location, date, country }) => (
											<Entry
												title={title}
												link={slug}
												dates={date}
												locations={location}
												country={country}
											/>
										)
									)
								)}
						</Section>
					))}
				</div>
				<aside className='hidden lg:flex flex-col flex-wrap w-48 sticky-top self-start px-4'>
					<ul className='mt-6'>
						{groupedList[0][1].map(entry => (
							<li>
								<a
									className='text-lg hover:italic expand'
									href={`#${entry[0]}`}>
									{entry[0]}
								</a>
							</li>
						))}
						{groupedList[1][1].map(entry => (
							<li>
								<a
									className='text-lg hover:italic expand'
									href={`#${entry[0]}`}>
									{entry[0]}
								</a>
							</li>
						))}
						{groupedList[2][1].map(entry => (
							<li>
								<a
									className='text-lg hover:italic expand'
									href={`#${entry[0]}`}>
									{entry[0]}
								</a>
							</li>
						))}
					</ul>
				</aside>
			</div>
			import Section from '../components/section' import Entry from
			'../components/entry'
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
