import { Children } from 'react'

export default function Section({ sectionName, children }) {
	return (
		<div className='flex mb-10'>
			<div className='self-start sticky-top vertical mt-4 pt-4'>
				<h2 className='font-bold text-green-500'>{sectionName}</h2>
			</div>
			<div id='projects' className='flex-col m-4'>
				{children}
			</div>
		</div>
	)
}
