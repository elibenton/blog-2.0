import Section from '../components/section'
import Entry from '../components/entry'

export default function BlogList({ groupedList }) {
	return (
		<div className='flex flex-row'>
			<div className='flex-grow'>
				{groupedList[0][1].map(entry => (
					<Section sectionName={entry[0]}>
						{entry
							.slice(1, 2)
							.map(article =>
								article.map(({ slug, title, location, date }) => (
									<Entry
										title={title}
										link={slug}
										dates={date}
										locations={location}
									/>
								))
							)}
					</Section>
				))}
				{groupedList[1][1].map(entry => (
					<Section sectionName={entry[0]}>
						{entry
							.slice(1, 2)
							.map(article =>
								article.map(({ slug, title, location, date }) => (
									<Entry
										title={title}
										link={slug}
										dates={date}
										locations={location}
									/>
								))
							)}
					</Section>
				))}
				{groupedList[2][1].map(entry => (
					<Section sectionName={entry[0]}>
						{entry
							.slice(1, 2)
							.map(article =>
								article.map(({ slug, title, location, date }) => (
									<Entry
										title={title}
										link={slug}
										dates={date}
										locations={location}
									/>
								))
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
	)
}
