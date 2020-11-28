import Link from 'next/link'

export default function Entry({ title, dates, locations, mediums, link }) {
	return (
		<div className='group mb-2 max-w-5xl'>
			<Link href='/blog/[link]' as={`/blog/${link}`}>
				<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-5xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
					{title.split(' ').slice(0, -1).join(' ')}&nbsp;
				</a>
			</Link>
			<span className='inline-flex'>
				<Link href='/blog/[link]' as={`/blog/${link}`}>
					<a className='font-bold sm:font-normal text-2xl sm:text-4xl lg:text-5xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
						{title.split(' ').slice(-1).join(' ')}
					</a>
				</Link>
				<span className='group-hover:italic inline-flex align-top font-normal text-sm ml-2 relative'>
					{dates}
					<br />
					{locations}
				</span>
			</span>

			{/* <div className='flex flex-col'>
				<div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
					<a className='self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						{dates}
					</a>
					<a className='self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						{locations}
					</a>
					<a className='self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						{mediums}
					</a>
				</div>
			</div> */}
		</div>
	)
}
