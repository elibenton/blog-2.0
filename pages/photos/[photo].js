// Default Imports
import Link from 'next/link'
import Image from 'next/image'

// Component Imports
// import size from 'image-size'// MUST BE USED TO NOT ERROR
// import exif from 'exif'// MUST BE USED TO NOT ERROR

export default function ImageGrid() {
	return (
		<div className='flex flex-col'>
			<div className='relative flex-grow pb-7/12'>
				{/* <Image className='object-contain' layout='fill' xsrc={images[1]} /> */}
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
