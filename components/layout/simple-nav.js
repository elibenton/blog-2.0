import Link from 'next/link'
import DarkMode from '../dark-mode-toggle'

export default function SimpleNav() {
	return (
		<nav className=" dark:bg-black bg-white mb-8 border-b-2 border-black dark:border-gray-100 sticky top-0 z-10">
			<ul className="flex justify-between items-center pt-5 pb-3">
				<li className="inline-flex items-center gap-x-3">
					<Link href="/">
						<button
							aria-label="Go Home"
							type="button"
							className="hover:bg-gray-300 dark:hover:bg-gray-700
						duration-200 rounded p-2 h-10 w-10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
								/>
							</svg>
						</button>
					</Link>
					<Link href="/about">
						<a className="rounded p-2 hover:bg-gray-300 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700">
							About
						</a>
					</Link>
					<Link href="/projects">
						<a className="rounded p-2 hover:bg-gray-300 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700">
							Projects
						</a>
					</Link>
					<Link href="/newsletter">
						<a className="rounded p-2  hover:bg-gray-300 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-700">
							Newsletter
						</a>
					</Link>
				</li>
				<li className="inline-flex items-center">
					<DarkMode />
				</li>
			</ul>
		</nav>
	)
}
