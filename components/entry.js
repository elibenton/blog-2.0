export default function Entry({ title, dates }) {
	return (
		<div className='group'>
			<h1 className='text-2xl sm:text-5xl text-left group-hover:underline'>{title}</h1>
			<div className='flex flex-col'>
				<div className='flex flex-row'>
					<h3 className='text-left font-plex group-hover:italic mb-2'>{dates}</h3>
				</div>
			</div>
		</div>
	)
}
