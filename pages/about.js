import Link from 'next/link'
import Image from 'next/image'
import SimpleNav from '../components/layout/simple-nav'
import TopTracks from '../components/spotify-top-tracks'

export default function About() {
	return (
		<>
			<SimpleNav />

			<div className='flex flex-col md:max-w-3xl mx-auto pt-2 sm:pt-12 text-left'>
				<Image src='/headshot.jpeg' width={1200} height={1200} />
				<h2 className='text-2xl sm:text-3xl max-w-3xl'>
					I'm a freelance journalist working in multiple mediums —
					primarily{' '}
					<Link href='/'>
						<a className='text-red-500 expand pb-0'>data</a>
					</Link>
					,{' '}
					<Link href='/'>
						<a className='text-blue-500 expand pb-0'>audio</a>
					</Link>
					, and{' '}
					<Link href='/'>
						<a className='text-yellow-500 expand pb-0'>photography</a>
					</Link>
					. I'm interested in the politics of technology, late-stage
					capitalism, and the American South.
				</h2>
				<h2 className='text-2xl sm:text-3xl max-w-3xl'>
					As a 2020 Watson Fellow, I traveled the world to explore the
					politics of technology. Before that, I produced public radio at
					KQED in San Francisco and researched the US Congress at The
					Brookings Institution in Washington D.C. I graduated from Pomona
					College in Los Angeles, where I studied politics and computer
					science.
				</h2>
				<h2 className='text-2xl sm:text-3xl max-w-3xl'>
					I currently live in Birmingham, Alabama.
				</h2>
				<TopTracks />
			</div>
		</>
	)
}
