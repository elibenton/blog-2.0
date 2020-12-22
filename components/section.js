export default function Section({ sectionName, children }) {
	return (
		<div className='flex mb-10' id={sectionName}>
			<div className='self-start sticky-top vertical'>
				<p className='text-bold text-green-500 sm:pt-2'>{sectionName}</p>
			</div>
			<div id='projects' className='flex-col m-2 sm:m-4'>
				{children}
			</div>
		</div>
	)
}
