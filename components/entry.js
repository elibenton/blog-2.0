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
					<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-5xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
						{title.split(' ').slice(-1).join(' ')}
					</a>
				</Link>
				<span className='group-hover:italic inline-flex align-top font-normal text-sm ml-2 relative'>
					{dates}
					<br />
					{locations}
				</span>
			</span>
		</div>
	)
}
