import _ from 'lodash'
import moment from 'moment'
import Entry from '../components/entry'

export default function BlogList({ articleList }) {
	const testList = [
		{ title: 'hello', dates: '10-21-2020', locations: 'Birmingham, Alabama', mediums: 'Audio' },
		{ title: 'goodbye', dates: '9-20-2020', locations: 'Quito, Ecuador', mediums: 'Audio' },
		{ title: 'hello', dates: '10-18-2020', locations: 'Birmingham, Alabama', mediums: 'Audio' },
		{ title: 'goodbye', dates: '9-20-2020', locations: 'Quito, Ecuador', mediums: 'Audio' },
		{ title: 'hello', dates: '10-20-2020', locations: 'Birmingham, Alabama', mediums: 'Audio' },
		{ title: 'goodbye', dates: '9-20-2020', locations: 'Quito, Ecuador', mediums: 'Audio' },
		{ title: 'hello', dates: '10-20-2017', locations: 'Birmingham, Alabama', mediums: 'Audio' },
		{ title: 'goodbye', dates: '9-20-2020', locations: 'Quito, Ecuador', mediums: 'Audio' },
		{ title: 'hello', dates: '4-20-2020', locations: 'Birmingham, Alabama', mediums: 'Audio' },
		{ title: 'goodbye', dates: '9-20-2020', locations: 'Quito, Ecuador', mediums: 'Audio' },
		{ title: 'hello', dates: '5-20-2010', locations: 'Birmingham, Alabama', mediums: 'Audio' },
		{ title: 'goodbye', dates: '9-20-2020', locations: 'Quito, Ecuador', mediums: 'Audio' }
	]

	const monthList = _.sortBy(
		testList.map(item => ({
			...item,
			month: moment(item.dates, 'MM-DD-YYYY').format('MMMM YYYY'),
			dateForSorting: moment(item.dates, 'MM-DD-YYYY')
		})),
		'dateForSorting'
	).reverse()

	console.log('Month list', monthList)

	const groupedArticleList = _.groupBy(monthList, 'month')

	console.log(
		'Object entries\n\n',
		Object.entries(groupedArticleList).map(entry => entry.slice(1, 2).flat(1))
	)

	return Object.entries(groupedArticleList).map(entry => (
		<div className='flex mb-10'>
			<div className='self-start sticky-top sm:mt-4 vertical'>
				<h2 className='font-bold text-green-500'>{entry.slice(0, 1)}</h2>
			</div>
			<div id='projects' className='flex-col m-2 sm:m-4'>
				{entry
					.slice(1, 2)
					.flat(1)
					.map(({ title, dates, locations, mediums }) => (
						<Entry title={title} dates={dates} locations={locations} mediums={mediums} />
					))}
			</div>
		</div>
	))
}
