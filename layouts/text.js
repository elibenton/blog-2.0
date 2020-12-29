export default function TextLayout({
	title,
	description,
	date,
	location,
	country,
	type,
	readingTime
}) {
	return (
		<>
			<div className='flex flex-col sm:flex-row justify-between space-y-4'>
				<div className='lg:ml-8'>
					<h1 className='font-akzidenz text-4xl md:text-7xl max-w-3xl leading-none '>
						{title}
					</h1>
					<p className='text-lg max-w-3xl font-plex'>{description}</p>
				</div>
				<div className='self-start sm:self-center lg:mr-16'>
					<ul className='border-l-2 border-black'>
						{date && (
							<li className='pl-4'>
								{moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY')}
							</li>
						)}
						{location && (
							<li className='pl-4'>
								{location},&nbsp;
								{country && country}
							</li>
						)}
						<li className='pl-4'>
							{type && _.upperFirst(type)}
							{readingTime &&
								type !== 'audio' &&
								` • ${_.ceil(minutes * 1.2)} minutes • ${words} words`}
						</li>
					</ul>
				</div>
			</div>
			<div className='w-full md:w-2/3 xl:w-1/2 justify-center mx-auto mt-16'>
				<main>{content}</main>
				<a href={editUrl(slug)} className='font-bold'>
					Edit on Github
				</a>
			</div>
		</>
	)
}
