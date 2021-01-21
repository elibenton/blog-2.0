import Image from 'next/image'
import { titleCase } from 'voca'
import { useInView } from 'react-intersection-observer'

export default function Entry({ Title, Description, Author, Published, Link, Images, searchTerm }) {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0
	})
	console.log(inView)
	return (
		<div ref={ref} id="Bookmark" className="group flex flex-col sm:flex-row items-start">
			<div
				id="Metadata"
				className="flex flex-row sm:flex-col sm:w-56 sm:pr-5 text-right gap-x-2 sm:gap-0 z-50">
				<a className="font-plex text-sm">{Author}</a>
				<span className="text-sm flex sm:hidden">&bull;</span>
				<a className="font-plex text-sm">{Published}</a>
			</div>
			<div
				id="Title"
				className="flex flex-col sm:border-l-2 border-black pb-4 sm:w-10/12 sm:pl-5 z-50">
				<a
					href={Link}
					className="font-bold sm:font-normal leading-tight text-lg sm:text-3xl md:text-4xl font-akzidenz group-hover:underline">
					{searchTerm === ''
						? Title
						: Title.split(new RegExp(titleCase(searchTerm), 'g')).map((part, index) =>
								index === Title.split(new RegExp(titleCase(searchTerm), 'g')).length - 1 ? (
									<span>{part}</span>
								) : (
									<>
										<span>{part}</span>
										<span className="bg-yellow-200 pt-2">{titleCase(searchTerm)}</span>
									</>
								)
						  )}
				</a>
				{/* <div className="hidden group-hover:block relative top-0 text-xl text-red-500">◉</div> */}
				<p id="Description" className="hidden group-hover:flex max-w-xl text-sm pb-6">
					{searchTerm === ''
						? Description
						: Description.split(new RegExp(searchTerm, 'g')).map((part, index) =>
								index === Description.split(new RegExp(searchTerm, 'g')).length - 1 ? (
									<span>{part}</span>
								) : (
									<>
										<span>{part}</span>
										<span className="bg-yellow-200">{searchTerm}</span>
									</>
								)
						  )}
				</p>
			</div>

			{/* <div id="Image" className="hidden group-hover:flex fixed bottom-12 right-0 z-0">
				{Images &&
					Images.map((image) => (
						<>
							{console.log(image)}
							<Image
								key={image.id}
								height={image.thumbnails.large.height}
								width={image.thumbnails.large.width}
								src={image.thumbnails.large.url}
							/>
						</>
					))}
			</div> */}
		</div>
	)
}
