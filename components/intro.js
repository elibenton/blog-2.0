import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function Intro() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	return (
		<section className='flex flex-col md:max-w-3xl mx-6 pt-2 sm:pt-12 min-h-screen text-left'>
			<div className='max-w-5xl flex flex-col justify-between'>
				<h1 className='text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8'>
					Hello,
					<br className='flex' /> I'm Eli
					<span className='hidden sm:inline'> Cohen</span>.
				</h1>
				{/* <div className='flex justify-between sm:px-1'>
					<div className='flex gap-2 lg:gap-4'>
						<Link href='/about'>
							<a className='text-sm bg-gray-200 rounded p-3 h-10hover:bg-gray-400 duration-200'>
								About
							</a>
						</Link>
						<Link href='/projects'>
							<a className='text-sm bg-gray-200 rounded p-3 h-10 hover:bg-gray-400 duration-200'>
								Projects
							</a>
						</Link>
						<Link href='/newsletter'>
							<a className='text-sm bg-gray-200 rounded p-3 h-10  hover:bg-gray-400 duration-200'>
								Newsletter
							</a>
						</Link>
					</div>
					<button
						aria-label='Toggle Dark Mode'
						type='button'
						className='bg-gray-200 dark:bg-black border-gray-100 hover:bg-gray-400 duration-200 rounded p-3 h-10 '
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						{mounted && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='h-4 w-4 text-black dark:text-gray-100'>
								{theme === 'dark' ? (
									<path
										fillRule='evenodd'
										d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
										clipRule='evenodd'
									/>
								) : (
									<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
								)}
							</svg>
						)}
					</button>
				</div>*/}
			</div>
			<p className='text-2xl sm:text-3xl max-w-3xl text-left leading-tight'>
				I'm a freelance journalist working in multiple mediums — primarily{' '}
				<span className='text-red-500 expand pb-0'>data</span>,{' '}
				<span className='text-blue-500'>audio</span>, and{' '}
				<span className='text-yellow-500'>photography</span>. I'm interested
				in the politics of technology, late-stage capitalism, and the
				American South. <br />
				<br /> I currently live in Birmingham, Alabama.
			</p>
			<div className='absolute bottom-0 inset-x-0 mb-8'>
				<div className='flex justify-center'>
					<svg
						className='animate-bounce w-12 h-12 text-black dark:text-gray-100'
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
