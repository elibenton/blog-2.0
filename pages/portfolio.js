export default function Portfolio() {
	return (
		<main className='m-4 sm:my-2 sm:mx-8'>
			<section className='max-w-5xl md:max-w-6xl pt-2 sm:pt-12 min-h-screen'>
				<h1 className='text-6xl leading-tight text-left font-bold my-5'>
					Hello,
					<br className='flex sm:hidden' /> I'm Eli
					<span className='hidden sm:inline'> Cohen</span>.
				</h1>
				<h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl text-left'>
					I'm a freelance journalist and web developer
					<br className='hidden sm:flex' /> working in multiple mediums — primarily
					<br className='hidden sm:flex' /> <span className='text-red-500'>data</span>,{' '}
					<span className='text-blue-500'>audio</span>, and{' '}
					<span className='text-yellow-500'>photography</span>.
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
			<section className='flex flex-row min-h-screen'>
				<section className='flex-grow'>
					<div className='flex mb-10'>
						<div className='self-start sticky-top vertical mt-4 pt-4'>
							<h2 className='font-bold text-green-500'>Projects</h2>
						</div>
						<div className='flex-col m-4'>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									The Watson Fellowship
								</h1>
								<div className='flex flex-col'>
									<div className='flex flex-row'>
										<h3 className='text-left font-plex group-hover:italic'>
											2019 — 2020
										</h3>
									</div>
								</div>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>Colander World</h1>
								<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									Discussion Collective
								</h1>
								<h3 className='text-left font-plex group-hover:italic rotat'>
									2019 — 2020
								</h3>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									Annals of Extraction
								</h1>
								<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
							</div>
						</div>
					</div>
					<div className='flex mb-10'>
						<div className='self-start sticky-top vertical mt-4 pt-4'>
							<h2 className='font-bold text-green-500'>Articles</h2>
						</div>
						<div className='flex-col m-4'>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									The Watson Fellowship
								</h1>
								<div className='flex flex-row'>
									<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
								</div>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>Colander World</h1>
								<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									Discussion Collective
								</h1>
								<h3 className='text-left font-plex group-hover:italic rotat'>
									2019 — 2020
								</h3>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									Annals of Extraction
								</h1>
								<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
							</div>
						</div>
					</div>
					<div className='flex mb-10'>
						<div className='self-start sticky-top vertical mt-4 pt-4'>
							<h2 className='font-bold text-green-500'>Education</h2>
						</div>
						<div className='flex-col m-4'>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									The Watson Fellowship
								</h1>
								<div className='flex flex-row'>
									<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
								</div>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>Colander World</h1>
								<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									Discussion Collective
								</h1>
								<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
							</div>
							<div className='group'>
								<h1 className='text-5xl text-left group-hover:underline'>
									Annals of Extraction
								</h1>
								<h3 className='text-left font-plex group-hover:italic'>2019 — 2020</h3>
							</div>
						</div>
					</div>
				</section>
				<aside className='hidden lg:flex flex-row flex-wrap max-w-sm sticky-top self-start'>
					<h2></h2>
					<div className='border-2 border-black rounded-md p-1 self-start mx-2 my-1 '>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 round self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
					<div className='border-2 border-black rounded-lg p-1 self-start mx-2 my-1'>
						Audio
					</div>
				</aside>
			</section>
			<section className='pt-24'>
				<ul>
					<li>
						<a href='#yeah'>Sitemap</a>
					</li>
					<li>
						<a href='#yeah'>RSS</a>
					</li>
					<li>
						<a href='#yeah'>Codebase</a>
					</li>
				</ul>
				<section className='flex  justify-between py-8'>
					<a
						href='#yep'
						className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						© Eli Benton Cohen
					</a>
					<a
						href='#yep'
						className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						Terms and Privacy
					</a>
					<a
						href='#yep'
						className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						GPLv3
					</a>
				</section>
			</section>
		</main>
	)
}
