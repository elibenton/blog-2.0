import Image from 'next/image'

export default function ImageFill({ path, caption, width, height, fill, priority }) {
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
					width={width}
					height={height}
					priority={priority ? true : false}
				/>
			</figure>
			<figcaption
				className="text-sm flex justify-end text-gray-800 font-plex mt-2 mb-12"
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
