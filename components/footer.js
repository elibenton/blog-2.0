import Link from 'next/link'

export default function Footer() {
	return (
		<section className='group mt-24 h-auto sm:mt-32 bg-gray-100 dark:bg-black mb-2 border-t-2 border-black dark:border-gray-100 overflow-hidden flex flex-col sm:flex-row justify-between text-sm'>
			<div className='flex flex-row gap-x-4'>
				<ul className='py-3'>
					<li>
						<Link href='/'>
							<a className='font-bold text-1xl p-1'>Eli Benton Cohen</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href='/projects'>
							<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
								Projects
							</a>
						</Link>
					</li>
					<li>
						<Link href='/newsletter'>
							<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
								Newsletter
							</a>
						</Link>
					</li>
				</ul>

				<ul className='py-3 self-end'>
					<li>
						<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
							+1 (205) 259-8250
						</a>
					</li>
					<li>
						<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
							mail@elibenton.com
						</a>
					</li>
					<li>
						<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
							898A 0867 BD12 1820
						</a>
					</li>
				</ul>
				<ul className='self-end'>
					<div>
						<form className='m-4 flex'>
							<input
								className='rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
								placeholder='your@email.com'
							/>
							<button className='px-4 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-2 uppercase border-yellow-500 border-t border-b border-r'>
								Subscribe
							</button>
						</form>
					</div>
				</ul>
			</div>
			<ul className='py-3'>
				<li>
					<a className='font-bold p-1 text-1xl'>Terms</a>
				</li>
				<li>
					<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
						GPLv3
					</a>
				</li>
				<li>
					<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
						Privacy Policy
					</a>
				</li>
				<li>
					<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
						© Eli Cohen {new Date().getFullYear()}
					</a>
				</li>
			</ul>
		</section>
	)
}
