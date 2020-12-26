import Link from 'next/link'
import _ from 'lodash'

export default function Entry({
	title,
	date,
	locations,
	description,
	country,
	link,
	searchTerm
}) {
	return (
		<>
			<div className='hidden sm:block group mt-4'>
				<span className='flex flex-col sm:inline-flex sm:flex-row'>
					<Link href='/blog/[link]' as={`/blog/${link}`}>
						<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-5xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none'>
							{searchTerm === ''
								? title
								: title
										.split(new RegExp(_.startCase(searchTerm), 'g'))
										.map((part, index) =>
											index ===
											title.split(
												new RegExp(_.startCase(searchTerm), 'g')
											).length -
												1 ? (
												<span>{part}</span>
											) : (
												<>
													<span>{part}</span>
													<span className='bg-yellow-200 pt-2'>
														{_.startCase(searchTerm)}
													</span>
												</>
											)
										)}
						</a>
					</Link>
					<span className='hidden group-hover:italic sm:inline-flex flex-col align-top font-normal text-sm ml-2 relative'>
						<a className='dark:hover:text-black self-start px-1 rounded hover:bg-yellow-200  border border-yellow-400 border-opacity-0 hover:border-opacity-100'>
							{date}
						</a>
						<Link href={`/places/${_.kebabCase(country)}`}>
							<a className='dark:hover:text-black self-start px-1 rounded hover:bg-yellow-200  border border-yellow-400 border-opacity-0 hover:border-opacity-100'>
								{locations}
							</a>
						</Link>
					</span>
				</span>
				{searchTerm !== '' && searchTerm.length >= 2 && (
					<p className='max-w-xl text-sm mt-2 mb-10'>
						{searchTerm === ''
							? description
							: description
									.split(new RegExp(searchTerm, 'g'))
									.map((part, index) =>
										index ===
										description.split(new RegExp(searchTerm, 'g'))
											.length -
											1 ? (
											<span>{part}</span>
										) : (
											<>
												<span>{part}</span>
												<span className='bg-yellow-200'>
													{searchTerm}
												</span>
											</>
										)
									)}
					</p>
				)}
			</div>
			<Link href='/blog/[link]' as={`/blog/${link}`}>
				<a className='font-bold sm:hidden text-1xl pb-0 pt-2'>{title}</a>
			</Link>
			<div className='sm:hidden flex flex-row pb-4'>
				<div>{date}</div>&nbsp;•&nbsp;
				<Link href={`/places/${_.kebabCase(country)}`}>
					<a>{locations}</a>
				</Link>
			</div>
		</>
	)
}

function highlight(text, term) {
	if (term === '') {
		return <span>{text}</span>
	} else {
		return text.replace(
			new RegExp(term, 'gi'),
			<span className='bg-yellow-200'>{term}</span>
		)
	}
}
