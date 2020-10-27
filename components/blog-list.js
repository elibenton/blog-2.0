import _ from 'lodash'
import moment from 'moment'

export default function BlogList({ articleList }) {
	const testList = [
		{ title: 'hello', date: '10-21-2020', location: 'Birmingham, Alabama' },
		{ title: 'goodbye', date: '9-20-2020', location: 'Quito, Ecuador' },
		{ title: 'hello', date: '10-18-2020', location: 'Birmingham, Alabama' },
		{ title: 'goodbye', date: '9-20-2020', location: 'Quito, Ecuador' },
		{ title: 'hello', date: '10-20-2020', location: 'Birmingham, Alabama' },
		{ title: 'goodbye', date: '9-20-2020', location: 'Quito, Ecuador' },
		{ title: 'hello', date: '10-20-2017', location: 'Birmingham, Alabama' },
		{ title: 'goodbye', date: '9-20-2020', location: 'Quito, Ecuador' },
		{ title: 'hello', date: '4-20-2020', location: 'Birmingham, Alabama' },
		{ title: 'goodbye', date: '9-20-2020', location: 'Quito, Ecuador' },
		{ title: 'hello', date: '5-20-2010', location: 'Birmingham, Alabama' },
		{ title: 'goodbye', date: '9-20-2020', location: 'Quito, Ecuador' }
	]

	const monthList = _.sortBy(
		testList.map(item => ({
			...item,
			month: moment(item.date).format('MMMM YYYY'),
			dateForSorting: new Date(item.date)
		})),
		'dateForSorting'
	).reverse()

	console.log(monthList)

	const groupedArticleList = _.groupBy(monthList, 'month')

	// console.log(Object.entries(groupedArticleList).map(entry => entry.slice(1, 2).flat(1)))

	return Object.entries(groupedArticleList).map(entry => (
		<div className='flex mb-10'>
			<div className='self-start sticky-top sm:mt-4 vertical'>
				<h2 className='font-bold text-green-500'>{entry.slice(0, 1)}</h2>
			</div>
			<div id='projects' className='flex-col m-2 sm:m-4'>
				{entry
					.slice(1, 2)
					.flat(1)
					.map(({ title, date, location }) => (
						<div className='group mb-12'>
							<h1 className='font-bold sm:font-normal text-3xl sm:text-5xl text-left group-hover:text-gray-700 font-akzidenz leading-none'>
								{title}
							</h1>
							<div className='flex flex-col'>
								<div className='flex flex-col sm:flex-row'>
									<h3 className='text-lg sm:text-2xl font-plex mr-6 group-hover:text-gray-700'>
										{date}
									</h3>
									<h3 className='hidden sm:flex text-left font-plex mr-6 group-hover:text-gray-700'>
										//
									</h3>
									<h3 className='text-left font-plex mr-6 group-hover:text-gray-700'>
										{location}
									</h3>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	))
}
