export default function Entry({ title, dates, locations, mediums }) {
	return (
		<div className='group mb-12'>
			<h1 className='font-bold sm:font-normal text-3xl sm:text-5xl text-left group-hover:text-gray-700 font-akzidenz leading-tight mb-2'>
				{title}
			</h1>
			<div className='flex flex-col'>
				<div className='flex flex-col sm:flex-row  space-y-2 sm:space-y-0 sm:space-x-4'>
					<h3 className='self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						{dates}
					</h3>
					<h3 className='self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						{locations}
					</h3>
					<h3 className='self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						{mediums}
					</h3>
				</div>
			</div>
		</div>
	)
}
