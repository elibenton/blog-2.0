import Image from 'next/image'

export default function ImageFill({ path, caption, fill, wide }) {
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
					width={wide ? 1600 : 2000}
					height={wide ? 900 : 1500}
					quality={100}
					priority={true}
				/>
			</figure>
			<figcaption
				className="text-sm md:text-base flex justify-end p-1 text-gray-800 font-plex mb-12"
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
