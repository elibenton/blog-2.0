export default function Intro({ children }) {
	return (
		<section className='max-w-5xl md:max-w-6xl mx-auto pt-2 sm:pt-12 min-h-screen'>
			<h1 className='text-6xl leading-tight text-left font-bold my-5'>
				Hello,
				<br className='flex sm:hidden' /> I'm Eli
				<span className='hidden sm:inline'> Cohen</span>.
			</h1>
			<h2 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl text-left'>
				I'm a freelance journalist working in multiple mediums
				<br className='hidden sm:flex' /> — primarily{' '}
				<span className='text-red-500 expand pb-0'>data</span>,{' '}
				<span className='text-blue-500'>audio</span>, and{' '}
				<span className='text-yellow-500'>photography</span>. I currently live in Birmingham,
				Alabama.
			</h2>
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
