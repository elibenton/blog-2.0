export default function Intro({ children }) {
	return (
		<section className='flex flex-row max-w-4xl md:max-w-6xl mx-auto pt-2 sm:pt-12 min-h-screen'>
			<div className className='max-w-5xl'>
				<h1 className='text-6xl leading-tight text-left font-bold my-5'>
					Hello,
					<br className='flex sm:hidden' /> I'm Eli
					<span className='hidden sm:inline'> Cohen</span>.
				</h1>
				<h2 className='text-2xl sm:text-3xl md:text-4xl text-left leading-tight'>
					I'm a freelance journalist working in multiple mediums —
					primarily <span className='text-red-500 expand pb-0'>data</span>,{' '}
					<span className='text-blue-500'>audio</span>, and{' '}
					<span className='text-yellow-500'>photography</span>. I currently
					live in Birmingham, Alabama.
				</h2>
			</div>
			{/* <div>
				<a
					href='#yep'
					className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
					© {new Date().getFullYear()} Eli B. Cohen
				</a>
				<a
					href='#yep'
					className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
					Updated 10-25-2020
				</a>
				<a
					href='#yep'
					className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
					GPLv3
				</a>
			</div> */}
			<div className='absolute bottom-0 inset-x-0 mb-8'>
				<div className='flex justify-center'>
					<svg
						className='animate-bounce w-12 h-12 text-gray-900'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
					</svg>
				</div>
			</div>
		</section>
	)
}
