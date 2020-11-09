import Link from 'next/link'

export default function Entry({ title, dates, locations, mediums, link }) {
	return (
		<div className="group mb-12">
			<Link href="/blog/[slug]" as={`/blog/${link}`}>
				<a className="font-bold sm:font-normal text-3xl sm:text-5xl text-left hover:underline font-akzidenz leading-tight mb-2">
					{title}
				</a>
			</Link>
			<div className="flex flex-col">
				<div className="flex flex-col sm:flex-row  space-y-2 sm:space-y-0 sm:space-x-4">
					<a className="self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200">
						{dates}
					</a>
					<a className="self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200">
						{locations}
					</a>
					<a className="self-start font-light text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200">
						{mediums}
					</a>
				</div>
			</div>
		</div>
	)
}
