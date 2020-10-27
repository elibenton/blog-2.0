export default function Entry({ title, dates, locations }) {
	return (
		<div className='group mb-12'>
			<h1 className='font-bold sm:font-normal text-3xl sm:text-5xl text-left group-hover:text-gray-700 font-akzidenz leading-none'>
				{title}
			</h1>
			<div className='flex flex-col'>
				<div className='flex flex-col sm:flex-row'>
					<h3 className='text-lg sm:text-2xl font-plex mr-6 group-hover:text-gray-700'>
						{dates}
					</h3>
					<h3 className='hidden sm:flex text-left font-plex mr-6 group-hover:text-gray-700'>
						//
					</h3>
					<h3 className='text-left font-plex mr-6 group-hover:text-gray-700'>{locations}</h3>
				</div>
			</div>
		</div>
	)
}
