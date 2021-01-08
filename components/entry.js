import Link from 'next/link'
import { titleCase, kebabCase } from 'voca'
import { parseISO, format } from 'date-fns'

export default function Entry({ title, date, location, country, type, slug }) {
	return (
		<>
			<div className='hidden sm:block group my-2 max-w-5xl'>
				<Link href={`/${type}/${slug}`}>
					<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-5xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
						{title.split(' ').slice(0, -1).join(' ')}&nbsp;
					</a>
				</Link>
				<span className='flex flex-col sm:inline-flex sm:flex-row'>
					<Link href={`/${type}/${slug}`}>
						<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-5xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							{title.split(' ').slice(-1).join(' ')}
						</a>
					</Link>
					<span className='hidden group-hover:italic sm:inline-flex flex-col align-top font-normal text-sm ml-2 relative -mt-0.5'>
						<a className='dark:hover:text-black self-start px-1 rounded hover:bg-yellow-200 -mt-0.5'>
							{format(parseISO(date), 'MMMM d, yyyy')}
						</a>
						<a className='dark:hover:text-black self-start px-1 rounded hover:bg-yellow-200 -mt-0.5'>
							{location}
						</a>
						<a className='dark:hover:text-black self-start px-1 rounded hover:bg-yellow-200 -mt-0.5'>
							{titleCase(type)}
						</a>
					</span>
				</span>
			</div>
			<Link href={`/${type}/${slug}`}>
				<a className='font-bold sm:hidden text-1xl pb-0 pt-2'>{title}</a>
			</Link>
			<div className='sm:hidden flex flex-row pb-4'>
				<div>{format(parseISO(date), 'MMMM d, yyyy')}</div>&nbsp;•&nbsp;
				<Link href={`/places/${kebabCase(country)}`}>
					<a>{location}</a>
				</Link>
			</div>
		</>
	)
}
