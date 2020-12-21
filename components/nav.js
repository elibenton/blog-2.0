import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const links = [
	{ href: 'https://github.com/vercel/next.js', label: 'GitHub' },
	{ href: 'https://nextjs.org/docs', label: 'Docs' }
]

export default function Nav() {
	const [mounted, setMounted] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	return (
		<nav className='bg-gray-100 dark:bg-black mb-8 border-b-2 border-black dark:border-gray-100 sticky top-0 z-10'>
			<ul className='flex justify-between items-center pt-3 pb-1'>
				<li>
					<Link href='/'>
						<a className='rounded p-2 h-10 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'>
							Home
						</a>
					</Link>
				</li>
				<li className='gap-2'>
					<a
						href={`mailto:?subject=Hello&body=Hello`}
						className='rounded p-2 h-10 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Email'>
						Share
					</a>

					<button
						aria-label='Send As Email'
						type='button'
						onClick={() => setShowModal(true)}
						className='hover:bg-gray-300 dark:hover:bg-gray-700
						duration-200 rounded p-2 h-10 w-10'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='h-6 w-6 text-black dark:text-gray-100'>
							<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
							<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
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
								viewBox='0 0 20 20'
								fill='currentColor'
								className='h-6 w-6 text-black dark:text-gray-100'>
								{theme === 'dark' ? (
									<path
										fill-rule='evenodd'
										d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
										clip-rule='evenodd'
									/>
								) : (
									<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
								)}
							</svg>
						)}
					</button>
				</li>
			</ul>
		</nav>
	)
}
