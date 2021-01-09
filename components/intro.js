import Link from 'next/link'
import DarkMode from './dark-mode-toggle'

export default function Intro() {
	return (
		<section className="flex flex-col md:max-w-3xl mx-6 pt-2 sm:pt-12 min-h-screen text-left">
			<div className="max-w-5xl flex flex-col justify-between">
				<h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8">
					Hello,
					<br className="flex" /> I'm Eli
					<span className="hidden sm:inline"> Cohen</span>.
				</h1>
				<div className="flex justify-between sm:px-1">
					<div className="flex gap-2 lg:gap-4">
						<Link href="/about">
							<a
								className="text-sm bg-gray-200 rounded p-3 h-10 hover:bg-gray-400 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700"
								href="/about">
								About
							</a>
						</Link>
						<Link href="/projects">
							<a
								className="text-sm bg-gray-200 rounded p-3 h-10 hover:bg-gray-400 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700"
								href="/projects">
								Projects
							</a>
						</Link>
						<Link href="/newsletter">
							<a
								className="text-sm bg-gray-200 rounded p-3 h-10  hover:bg-gray-400 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700"
								href="/newsletter">
								Newsletter
							</a>
						</Link>
					</div>
					<DarkMode />
				</div>
			</div>
			<p className="text-2xl sm:text-3xl max-w-3xl text-left leading-tight">
				I'm a freelance journalist working in multiple mediums — primarily{' '}
				<span className="text-red-500 expand pb-0">data</span>,{' '}
				<span className="text-blue-500">audio</span>, and{' '}
				<span className="text-yellow-500">photography</span>. I'm interested in the politics of
				technology, late-stage capitalism, and the American South. <br />
				<br /> I currently live in Birmingham, Alabama.
			</p>
			<div className="absolute bottom-0 inset-x-0 mb-8">
				<div className="flex justify-center">
					<svg
						className="animate-bounce w-12 h-12 text-black dark:text-gray-100"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
					</svg>
				</div>
			</div>
		</section>
	)
}
