import Entry from '../components/entry'
import Section from '../components/section'

export default function Portfolio() {
	return (
		<main className='m-4 sm:my-2 sm:mx-8'>
			<section className='max-w-5xl md:max-w-6xl mx-auto pt-2 sm:pt-12 min-h-screen'>
				<h1 className='text-6xl leading-tight text-left font-bold my-5'>
					Hello,
					<br className='flex sm:hidden' /> I'm Eli
					<span className='hidden sm:inline'> Cohen</span>.
				</h1>
				<h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl text-left'>
					I'm a freelance journalist and web developer
					<br className='hidden sm:flex' /> working in multiple mediums — primarily
					<br className='hidden sm:flex' />{' '}
					<span className='text-red-500 expand pb-0'>data</span>,{' '}
					<span className='text-blue-500'>audio</span>, and{' '}
					<span className='text-yellow-500'>photography</span>.{' '}
					<br className='hidden sm:flex' />
					<br className='hidden sm:flex' />
					I'm currently based in Birmingham, Alabama.
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
					<Section sectionName='Project'>
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
					</Section>
					<Section sectionName='Project'>
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
					</Section>
					<Section sectionName='Project'>
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
					</Section>
					<Section sectionName='Project'>
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
					</Section>
				</section>
				<aside className='hidden lg:flex flex-col flex-wrap max-w-sm sticky-top self-start'>
					<ul className='mt-6 mr-12'>
						<li>
							<a className='text-lg expand' href='#projects'>
								Projects
							</a>
						</li>
						<li>
							<a className='text-lg expand' href='#articles'>
								Articles
							</a>
						</li>
						<li>
							<a className='text-lg expand' href='#education'>
								Education
							</a>
						</li>
						<li>
							<a className='text-lg expand' href='#experience'>
								Experience
							</a>
						</li>
						<li>
							<a className='text-lg expand' href='#reading'>
								Reading
							</a>
						</li>
						<li>
							<a className='text-lg expand' href='#blog'>
								Blog
							</a>
						</li>
					</ul>
				</aside>
			</section>
			<section className='pt-16 sm:pt-32'>
				<div className='pl-2'>
					<ul>
						<li>
							<a className='expand' href='#yeah'>
								About Me
							</a>
						</li>
						<li>
							<a className='expand' href='#yeah'>
								Newsletter
							</a>
						</li>
						<li>
							<a className='expand' href='#yeah'>
								RSS Feed
							</a>
						</li>
						<li>
							<a className='expand' href='#yeah'>
								Sitemap
							</a>
						</li>
					</ul>
				</div>
				<section className='flex justify-between py-8'>
					<a
						href='#yep'
						className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						© {new Date().getFullYear()} Eli B. Cohen
					</a>
					<a
						href='#yep'
						className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
						Terms & Privacy
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
