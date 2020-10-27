export default function ImageFill({ imagePath, title, caption, date, location }) {
	return (
		<>
			<div
				className='bg-cover bg-bottom'
				style={{
					backgroundImage: imagePath
				}}>
				<div className='h-screen'>
					<div className='flex flex-col absolute inset-x-0 bottom-0 mb-12 flex-start'>
						<h1 className='relative font-bold text-white text-5xl md:text-7xl px-8 leading-tight mb-12'>
							{title}
						</h1>
						<div className='flex flex-col sm:flex-row'>
							<h3 className='relative text-white text-2xl md:text-3xl px-8'>{date}</h3>
							<h3 className='relative text-white text-2xl md:text-3xl px-8'>{location}</h3>
						</div>
					</div>
				</div>
			</div>
			<p className='px-2 text-left text-sm text-gray-700'>{caption}</p>
		</>
	)
}
