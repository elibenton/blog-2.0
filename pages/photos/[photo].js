// Default Imports
import Link from 'next/link'
import Image from 'next/image'

// Component Imports
// import size from 'image-size'// MUST BE USED TO NOT ERROR
// import exif from 'exif'// MUST BE USED TO NOT ERROR

const images = [
	'https://images.pexels.com/photos/1842580/pexels-photo-1842580.jpeg?cs=srgb&dl=pexels-matt-hardy-1842580.jpg&fm=jpg',
	'https://images.pexels.com/photos/5877919/pexels-photo-5877919.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
	'https://images.pexels.com/photos/4947741/pexels-photo-4947741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
	'https://images.pexels.com/photos/5480759/pexels-photo-5480759.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
	'https://images.unsplash.com/5/unsplash-kitsune-4.jpg',
	'https://images.pexels.com/photos/5919596/pexels-photo-5919596.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
]

export default function ImageGrid() {
	return (
		<div className='flex flex-col'>
			<div className='relative flex-grow pb-7/12'>
				<Image className='object-contain' layout='fill' src={images[1]} />
			</div>
			<div className='flex flex-row justify-between'>
				<div className='mt-4'>This is the description of the photo</div>
				<div className='mt-4 self-end'>
					This is the description of the photo
				</div>
			</div>
		</div>
	)
}
