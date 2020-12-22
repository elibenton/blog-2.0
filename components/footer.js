import Link from 'next/link'
import SmallSubscribe from '../components/subscribe-small'

export default function Footer() {
	return (
		<section className='group mt-24 h-auto md:mt-32 bg-gray-100 dark:bg-black mb-2 border-t-2 border-black dark:border-gray-100 overflow-hidden flex flex-col md:flex-row justify-between text-sm'>
			<div className='flex flex-col md:flex-row gap-x-4'>
				<div className='flex flex-row'>
					<ul className='py-3'>
						<li>
							<Link href='/'>
								<a className='font-bold text-1xl p-1'>
									Eli Benton Cohen
								</a>
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
									Resume
								</a>
							</Link>
						</li>
					</ul>
					<ul className='py-3 self-end'>
						<li>
							<a
								href='tel:+1205-259-8250'
								className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
								+1 (205) 259-8250
							</a>
						</li>
						<li>
							<a
								href='mailto:mail@elibenton.co'
								className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
								mail@elibenton.com
							</a>
						</li>
						<li>
							<a
								href='https://keybase.io/eli_benton'
								className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
								898A 0867 BD12 1820
							</a>
						</li>
					</ul>
				</div>
				<ul className='py-3 self-start md:self-end w-64'>
					<SmallSubscribe />
				</ul>
			</div>
			<ul className='py-3'>
				<li>
					<a className='font-bold p-1 text-1xl'>Terms</a>
				</li>
				<li>
					<a
						href='https://choosealicense.com/licenses/gpl-3.0/'
						className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
						GPLv3
					</a>
				</li>
				<li>
					<Link href='/privacy'>
						<a className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
							Privacy Policy
						</a>
					</Link>
				</li>
				<li>
					<a
						href='https://creativecommons.org/licenses/by-sa/4.0/'
						className='rounded p-1 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
						© Eli Cohen {new Date().getFullYear()}
					</a>
				</li>
			</ul>
		</section>
	)
}
