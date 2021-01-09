import Image from 'next/image'
import { svgMap } from '../lib/svg'

export default function PostHead({ href, src, alt, name, date, location, description }) {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<div className="mb-16 flex flex-row">
				<div className="flex flex-row gap-4 group">
					{svgMap.get(name)}
					<div className="flex flex-col">
						<div className="font-bold sm:font-normal text-2xl sm:text-3xl lg:text-4xl text-left group-hover:underline group-hover:text-blue-600 font-akzidenz leading-tight sm:leading-none mb-2">
							{name}
						</div>
						<span className="align-top font-normal relative group-hover:text-blue-600">
							{date}
							<br />
							{location}
						</span>
						<p className="max-w-3xl">{description}</p>
					</div>
				</div>
			</div>
		</a>
	)
}
