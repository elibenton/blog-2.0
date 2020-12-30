import useSWR from 'swr'

import fetcher from '../lib/fetcher'

export default function TopTracks() {
	const { data } = useSWR('/api/spotify', fetcher)

	if (!data) {
		return null
	}

	return data.tracks.map((track, index) => (
		<div
			key={track.songUrl}
			className='flex flex-row items-baseline border-b border-gray-300 dark:border-gray-800 max-w-3xl w-full mt-2'>
			<p className='text-sm font-bold text-gray-400 dark:text-gray-600'>
				{index + 1}
			</p>
			<div className='flex flex-col pl-3'>
				<a
					className='font-medium text-sm text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full'
					href={track.songUrl}
					target='_blank'
					rel='noopener noreferrer'>
					{track.title}
				</a>
				<div
					className='text-gray-500 text-sm mb-2 truncate w-60 sm:w-96 md:w-full'
					color='gray.500'>
					{track.artist}
				</div>
			</div>
		</div>
	))
}
