import SimpleNav from '../components/layout/simple-nav'
import TopTracks from '../components/spotify-top-tracks'

export default function About() {
	return (
		<>
			<SimpleNav />
			<div className='flex flex-col md:max-w-3xl mx-auto pt-2 sm:pt-12 text-left'>
				<div className='max-w-3xl'>
					<h2 className='text-2xl sm:text-3xl  max-w-3xl text-left leading-tight'>
						I'm a freelance journalist working in multiple mediums —
						primarily{' '}
						<span className='text-red-500 expand pb-0'>data</span>,{' '}
						<span className='text-blue-500'>audio</span>, and{' '}
						<span className='text-yellow-500'>photography</span>. I'm
						interested in the politics of technology, late-stage
						capitalism, and the American South. <br />
						<br /> I currently live in Birmingham, Alabama.
					</h2>
				</div>
				<TopTracks />
			</div>
		</>
	)
}
