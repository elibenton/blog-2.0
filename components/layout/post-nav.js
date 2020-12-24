import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function Nav({ title, location, date }) {
	const [mounted, setMounted] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	return (
		<nav className='bg-gray-100 dark:bg-black mb-8 border-b-2 border-black dark:border-gray-100 sticky top-0 z-10'>
			<ul className='flex justify-between items-center pt-5 pb-3'>
				<li>
					<Link href='/'>
						<button
							aria-label='Send As Email'
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
				</li>
				<li className='flex flex-row gap-x-4'>
					<p className='text-2xl my-0 pr-4 sm:border-r-2 border-black leading-tight'>
						{title}
					</p>
					<div className='hidden sm:flex flex-col align-middle'>
						<p className='text-sm my-0'>{date}</p>
						<p className='text-sm my-0'>{location}</p>
					</div>
				</li>
				<li className='hidden sm:block gap-2'>
					<a target='_blank' rel='noopener noreferrer' aria-label='Email'>
						<button
							aria-label='Send As Email'
							type='button'
							className='hover:bg-gray-300 dark:hover:bg-gray-700
						duration-200 rounded p-2 h-10 w-10'>
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
								class='feather feather-mail'>
								<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
								<polyline points='22,6 12,13 2,6'></polyline>
							</svg>
						</button>
					</a>

					<button
						aria-label='Send As Email'
						type='button'
						onClick={() => setShowModal(true)}
						className='hover:bg-gray-300 dark:hover:bg-gray-700
						duration-200 rounded p-2 h-10 w-10'>
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
							class='feather feather-share'>
							<path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'></path>
							<polyline points='16 6 12 2 8 6'></polyline>
							<line x1='12' y1='2' x2='12' y2='15'></line>
						</svg>
					</button>
					{showModal ? (
						<>
							<div
								className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
								onClick={() => setShowModal(false)}>
								<div className='relative w-auto my-6 mx-auto max-w-3xl'>
									{/*content*/}
									<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
										{/*header*/}
										<div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'>
											<h3 className='text-3xl font-semibold'>
												Modal Title
											</h3>
											<button
												className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
												onClick={() => setShowModal(false)}>
												<span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
													×
												</span>
											</button>
										</div>
										{/*body*/}
										<div className='relative p-6 flex-auto'>
											<p className='my-4 text-gray-600 text-lg leading-relaxed'>
												I always felt like I could do anything.
												That’s the main thing people are controlled
												by! Thoughts- their perception of
												themselves! They're slowed down by their
												perception of themselves. If you're taught
												you can’t do anything, you won’t do
												anything. I was taught I could do
												everything.
											</p>
										</div>
										{/*footer*/}
										<div className='flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b'>
											<button
												className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
												type='button'
												style={{ transition: 'all .15s ease' }}
												onClick={() => setShowModal(false)}>
												Close
											</button>
											<button
												className='bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
												type='button'
												style={{ transition: 'all .15s ease' }}
												onClick={() => setShowModal(false)}>
												Save Changes
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
						</>
					) : null}
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
