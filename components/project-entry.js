import Image from 'next/image'

export default function Entry() {
	return (
		<>
			<a href='https://dontwait.vote/' target='_blank'>
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
						<div className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							Don't Wait, Vote!
						</div>
						<span className='align-top font-normal relative'>
							November 2020
							<br />
							Birmingham, Alabama
						</span>
					</div>
				</div>
			</a>
			<a
				href='http://51.watson.foundation/fellows/eli-cohen.html'
				target='_blank'>
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
						<div className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							Watson Fellowship
						</div>
						<span className='align-top font-normal relative'>
							August 2020
							<br />
							New York, New York
						</span>
					</div>
				</div>
			</a>
			<a
				href='https://www.dropbox.com/s/4taniiw0e2czg1z/the%20political%20arguments%20of%20podcasting.pdf?dl=0'
				target='_blank'>
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
						<div className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							Political Arguments of Podcasting
						</div>
						<span className='align-top font-normal relative'>
							May 2019
							<br />
							Los Angeles, California
						</span>
					</div>
				</div>
			</a>
			<a
				href='https://podcasts.apple.com/us/podcast/discussion-collective/id1437546006'
				target='_blank'>
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
						<div className='font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline font-akzidenz leading-tight sm:leading-none mb-2'>
							Discussion Collective
						</div>
						<span className='align-top font-normal relative'>
							March 2019
							<br />
							Los Angeles, California
						</span>
					</div>
				</div>
			</a>
		</>
	)
}
