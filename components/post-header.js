import { titleCase } from 'voca'

export default function PostHead({
	title,
	description,
	date,
	location,
	country,
	type,
	readingTime: { minutes, words }
}) {
	return (
		<div className="flex flex-col sm:flex-row justify-between space-y-4">
			<div className="lg:ml-8">
				<h1 className="font-akzidenz text-4xl md:text-7xl max-w-3xl leading-none">{title}</h1>
				<p className="font-plex text-lg max-w-3xl">{description}</p>
			</div>
			<div className="self-start sm:self-center lg:mr-16">
				<ul className="border-l-2 border-black">
					<li className="pl-4">{date}</li>
					<li className="pl-4">
						{location},&nbsp;
						{country}
					</li>

					<li className="pl-4">
						{titleCase(type)}
						{type !== 'audio' && ` • ${Math.ceil(minutes)} minutes • ${words} words`}
					</li>
				</ul>
			</div>
		</div>
	)
}
