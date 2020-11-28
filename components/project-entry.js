import Link from 'next/link'
import Image from 'next/image'

export default function Entry() {
	return (
		<>
			<div className='hover:shadow-lg flex flex-row px-4 py-6 mb-8 max-w-5xl border-2 rounded-lg border-gray-800 gap-8'>
				<Image
					src='/vote.png'
					alt='Watson Logo'
					width={100}
					height={100}
					quality={100}
					priority={true}
				/>
				<div className='flex flex-col'>
					<Link href='/blog/[link]' as={`/blog/`}>
						<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							Don't Wait, Vote!
						</a>
					</Link>
					<span className='align-top font-normal relative'>
						November 2020
						<br />
						Birmingham, Alabama
					</span>
				</div>
			</div>
			<div className='hover:shadow-lg flex flex-row px-4 py-6 mb-8 max-w-5xl border-2 rounded-lg border-gray-800 gap-4'>
				<Image
					src='/watson.png'
					alt='Watson Logo'
					width={100}
					height={100}
					quality={100}
					priority={true}
				/>
				<div className='flex flex-col'>
					<Link href='/blog/[link]' as={`/blog/`}>
						<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							Watson Fellowship
						</a>
					</Link>
					<span className='align-top font-normal relative'>
						August 2020
						<br />
						New York, New York
					</span>
				</div>
			</div>
			<div className='hover:shadow-lg flex flex-row px-4 py-6 mb-8 max-w-5xl border-2 rounded-lg border-gray-800 gap-4'>
				<Image
					src='/disco.png'
					alt='Watson Logo'
					width={100}
					height={100}
					quality={100}
					priority={true}
				/>
				<div className='flex flex-col'>
					<Link href='/blog/[link]' as={`/blog/`}>
						<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							Discussion Collective
						</a>
					</Link>
					<span className='align-top font-normal relative'>
						May 2019
						<br />
						Los Angeles, California
					</span>
				</div>
			</div>
			<div className='hover:shadow-lg flex flex-row px-4 py-6 mb-8 max-w-5xl border-2 rounded-lg border-gray-800 gap-4'>
				<Image
					src='/pomona.png'
					alt='Watson Logo'
					width={100}
					height={100}
					quality={100}
					priority={true}
				/>
				<div className='flex flex-col'>
					<Link href='/blog/[link]' as={`/blog/`}>
						<a className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							Political Arguments of Podcasting
						</a>
					</Link>
					<span className='align-top font-normal relative'>
						May 2019
						<br />
						Los Angeles, California
					</span>
				</div>
			</div>
		</>
	)
}
