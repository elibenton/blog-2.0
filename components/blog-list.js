import Section from '../components/section'
import Entry from '../components/entry'

export default function BlogList({ groupedList }) {
	return (
		<div className='flex flex-row'>
			<div className='flex-grow'>
				{Object.entries(groupedList).map(entry => (
					<Section sectionName={entry.slice(0, 1)}>
						{entry
							.slice(1, 2)
							.map(article =>
								article.map(
									({ slug, title, location, dateSerialized }) => (
										<Entry
											title={title}
											link={slug}
											dates={dateSerialized}
											locations={location}
										/>
									)
								)
							)}
					</Section>
				))}
			</div>
			<aside>
				<ul className='hidden lg:flex flex-col flex-wrap w-64 sticky-top self-start mt-6'>
					{Object.entries(groupedList).map(entry => (
						<li>
							<a
								className='text-lg hover:italic expand'
								href={`#${entry.slice(0, 1)}`}>
								{entry.slice(0, 1)}
							</a>
						</li>
					))}
				</ul>
			</aside>
		</div>
	)
}
