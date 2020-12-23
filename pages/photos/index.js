// Default Import
import Link from 'next/link'
import Image from 'next/image'

// Package Import
import path from 'path'
import mapFolder from 'map-folder'
import exifr from 'exifr' // MUST BE USED TO NOT ERROR
import moment from 'moment'

// Component Imports
import SimpleNav from '../../components/layout/simple-nav'

export default function ImageGrid({ photosInfo }) {
	console.log(photosInfo)
	return (
		<>
			<SimpleNav />
			<h1 className='text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8'>
				Photos
			</h1>
			<div className='flex flex-row flex-wrap gap-y-4 sm:gap-1 overflow-hidden mt-20'>
				{photosInfo.map(image => (
					<Link href='/'>
						<a className='group relative flex flex-grow' href='/'>
							<p className='absolute invisible group-hover:visible group-hover:duration-200 font-bold text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
								{image.path.split(' - ')[1].split('.')[0]}
							</p>
							<img
								className='object-cover sm:h-80 flex-grow group-hover:opacity-30 group-hover:duration-200'
								src={image.path}
							/>
							{/* <Image
				className='absolute object-contain sm:h-80 flex-grow'
				layout='fill'
				src={image}
				/> */}
						</a>
					</Link>
				))}
			</div>
		</>
	)
}

const root = process.cwd()

export async function getStaticProps() {
	const photosRoot = path.join(root, 'public/photos')
	const folderMap = mapFolder(photosRoot)
	const photosInfo = await Promise.all(
		Object.entries(folderMap.entries).map(async d => {
			const imageData = await exifr.parse(
				path.join(photosRoot, `/${d[0]}`),
				['ISO', 'FNumber', 'DateTimeOriginal']
			)

			return {
				ISO: imageData.ISO && imageData.ISO,
				FNumber: imageData.FNumber && imageData.FNumber,
				Date:
					imageData.DateTimeOriginal &&
					moment(imageData.DateTimeOriginal).format('YYYY-MM-DD'),
				path: `/photos/${d[0]}`
			}
		})
	)

	return { props: { photosInfo } }
}
