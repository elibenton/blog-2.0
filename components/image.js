import Image from 'next/image'

export default function ImageFill({
	path,
	caption,
	vertical,
	thin,
	priority,
	fill,
	width,
	height
}) {
	return (
		<>
			<figure
				style={
					fill
						? {
								width: '100vw',
								position: 'relative',
								left: '50%',
								right: '50%',
								marginLeft: '-50vw',
								marginRight: '-50vw'
						  }
						: { width: '100%' }
				}>
				<Image
					src={path}
					alt={caption}
					layout="responsive"
					width={width || (vertical ? (thin ? 9 : 3) : thin ? 16 : 4) * 150}
					height={height || (vertical ? (thin ? 16 : 4) : thin ? 9 : 3) * 150}
					priority={priority ? true : false}
				/>
			</figure>
			<figcaption
				className="text-sm flex justify-end text-gray-800 font-plex mt-2 mb-12 px-2"
				style={
					fill
						? {
								width: '100vw',
								position: 'relative',
								left: '50%',
								right: '50%',
								marginLeft: '-50vw',
								marginRight: '-50vw'
						  }
						: { width: '100%' }
				}>
				{caption}
			</figcaption>
		</>
	)
}
