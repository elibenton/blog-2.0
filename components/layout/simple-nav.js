import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function SimpleNav() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	return (
		<nav className='bg-gray-100 dark:bg-black mb-8 border-b-2 border-black dark:border-gray-100 sticky top-0 z-10'>
			<ul className='flex justify-between items-center pt-5 pb-3'>
				<li className='inline-flex items-center gap-x-3'>
					<Link href='/'>
						<button
							aria-label='Go Home'
							type='button'
							className='hover:bg-gray-300 dark:hover:bg-gray-700
						duration-200 rounded p-2 h-10 w-10'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
								/>
							</svg>
						</button>
					</Link>
					<Link href='/about'>
						<a className='rounded p-2 hover:bg-gray-300 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700'>
							About
						</a>
					</Link>
					<Link href='/projects'>
						<a className='rounded p-2 hover:bg-gray-300 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700'>
							Projects
						</a>
					</Link>
					<Link href='/newsletter'>
						<a className='rounded p-2  hover:bg-gray-300 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700'>
							Newsletter
						</a>
					</Link>
				</li>
				<li className='inline-flex items-center'>
					<button
						aria-label='Toggle Dark Mode'
						type='button'
						className='hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 rounded p-2 h-10 w-10'
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						{mounted && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								class='feather feather-moon'>
								{theme === 'light' ? (
									<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
								) : (
									<>
										<circle cx='12' cy='12' r='5'></circle>
										<line x1='12' y1='1' x2='12' y2='3'></line>
										<line x1='12' y1='21' x2='12' y2='23'></line>
										<line
											x1='4.22'
											y1='4.22'
											x2='5.64'
											y2='5.64'></line>
										<line
											x1='18.36'
											y1='18.36'
											x2='19.78'
											y2='19.78'></line>
										<line x1='1' y1='12' x2='3' y2='12'></line>
										<line x1='21' y1='12' x2='23' y2='12'></line>
										<line
											x1='4.22'
											y1='19.78'
											x2='5.64'
											y2='18.36'></line>
										<line
											x1='18.36'
											y1='5.64'
											x2='19.78'
											y2='4.22'></line>
									</>
								)}
							</svg>
						)}
					</button>
				</li>
			</ul>
		</nav>
	)
}
