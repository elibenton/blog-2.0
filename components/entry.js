import Link from 'next/link'
import _ from 'lodash'

export default function Entry({
	title,
	dates,
	locations,
	country,
	link,
	coords
}) {
	return (
		<>
			<div className='hidden sm:block group mb-2 max-w-5xl'>
				<Link href='/blog/[link]' as={`/blog/${link}`}>
					<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-5xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
						{title.split(' ').slice(0, -1).join(' ')}&nbsp;
					</a>
				</Link>
				<span className='flex flex-col sm:inline-flex sm:flex-row'>
					<Link href='/blog/[link]' as={`/blog/${link}`}>
						<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-5xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							{title.split(' ').slice(-1).join(' ')}
						</a>
					</Link>
					<span className='hidden group-hover:italic sm:inline-flex flex-col align-top font-normal text-sm ml-2 relative'>
						<a className='dark:hover:text-black self-start px-1 rounded hover:bg-yellow-200  border border-yellow-400 border-opacity-0 hover:border-opacity-100'>
							{dates}
						</a>
						<Link href={`/place/${_.kebabCase(country)}`}>
							<a className='dark:hover:text-black self-start px-1 rounded hover:bg-yellow-200  border border-yellow-400 border-opacity-0 hover:border-opacity-100'>
								{locations}
							</a>
						</Link>
					</span>
				</span>
			</div>
			<Link href='/blog/[link]' as={`/blog/${link}`}>
				<a className='font-bold sm:hidden text-1xl pb-0 pt-2'>{title}</a>
			</Link>
			<div className='sm:hidden flex flex-row pb-4'>
				<div>{dates}</div>&nbsp;•&nbsp;
				<Link href={`/place/${_.kebabCase(country)}`}>
					<a>{locations}</a>
				</Link>
			</div>
		</>
	)
}
