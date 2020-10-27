export default function TableOfContents() {
	return (
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
	)
}
