import Section from '../components/section'
import Entry from '../components/entry'

export default function BlogList({ filteredList }) {
	return (
		<div className='flex flex-row'>
			{filteredList.map(
				({ title, slug, date, location, country, coords }) => (
					<Entry
						title={title}
						link={slug}
						dates={date}
						locations={location}
						country={country}
						coords={coords}
					/>
				)
			)}
		</div>
	)
}
