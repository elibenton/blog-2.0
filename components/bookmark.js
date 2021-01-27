import { useState } from 'react'
import { titleCase } from 'voca'

export default function Bookmark({
	id,
	searchValue,
	fields: { Title, Description, Author, Published, Link, Type, Tag, Publication }
}) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div key={id} className="flex flex-col">
				<div
					key={id}
					id="Bookmark"
					className="group flex flex-col sm:flex-row items-start z-10">
					<div
						id="Metadata"
						className="flex flex-row sm:flex-col sm:w-60 sm:pr-5 text-right gap-x-2 sm:gap-0">
						<a className="font-plex text-sm">
							{!searchValue
								? Author
								: Author.split(new RegExp(titleCase(searchValue), 'g')).map((part, index) =>
										index ===
										Author.split(new RegExp(titleCase(searchValue), 'g')).length - 1 ? (
											<span>{part}</span>
										) : (
											<>
												<span>{part}</span>
												<span className="bg-yellow-200 pt-2">
													{titleCase(searchValue)}
												</span>
											</>
										)
								  )}
						</a>
						<span className="text-sm flex sm:hidden">&bull;</span>
						<a className="font-plex text-sm">{Published}</a>
					</div>
					<div
						id="Title"
						className="flex flex-col sm:border-l-2 border-black pb-4 sm:w-10/12 sm:pl-5">
						<button
							onClick={() => (open ? setOpen(false) : setOpen(true))}
							href={Link}
							target="_blank"
							rel="noreferrer"
							className="text-left focus:outline-none hover:underline font-bold sm:font-normal leading-tight text-lg sm:text-3xl md:text-4xl font-akzidenz">
							{!searchValue
								? Title
								: Title.split(new RegExp(titleCase(searchValue), 'g')).map((part, index) =>
										index ===
										Title.split(new RegExp(titleCase(searchValue), 'g')).length - 1 ? (
											<span>{part}</span>
										) : (
											<>
												<span>{part}</span>
												<span className="bg-yellow-200 pt-2">
													{titleCase(searchValue)}
												</span>
											</>
										)
								  )}
						</button>
						<ul
							className={
								searchValue || open
									? 'flex flex-row gap-x-3 py-1 text-blue-600 text-sm mt-1 mb-2'
									: 'hidden'
							}>
							<li className="ring-1 rounded-md px-1 bg-blue-100 ring-blue-600">{Type}</li>
							{Type !== 'Blog' && (
								<li className="ring-1 rounded-md px-1 bg-blue-100 ring-blue-600">
									{Publication}
								</li>
							)}
							<li className="ring-1 rounded-md px-1 bg-blue-100 ring-blue-600">{Tag}</li>
						</ul>
						<p
							id="Description"
							className={searchValue || open ? 'inline max-w-2xl pb-6' : 'hidden'}>
							{searchValue.length < 3
								? Description
								: Description.split(new RegExp(searchValue, 'g')).map((part, index) =>
										index ===
										Description.split(new RegExp(searchValue, 'g')).length - 1 ? (
											<span>{part}</span>
										) : (
											<>
												<span>{part}</span>
												<span className="bg-yellow-200">{searchValue}</span>
											</>
										)
								  )}
						</p>
					</div>
				</div>
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
		</>
	)
}
