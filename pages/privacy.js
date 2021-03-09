import SimpleNav from '../components/layout/simple-nav'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/custom-player'), {
	ssr: false
})

const tracks = [
	{
		title: `Facebook's Very Large and Contentious Supreme Court`,
		artist: 'Radiolab',
		audioSrc: '/audio/rl.mp3',
		image: '/rl-logo.png',
		color: '#00aeb0'
	}
]

export default function About() {
	return (
		<>
			<SimpleNav />
			{/* <section className="flex flex-col md:max-w-3xl mx-auto pt-2 sm:pt-12 min-h-screen text-left">
				<div className="max-w-3xl">
					<h2 className="text-2xl sm:text-3xl  max-w-3xl text-left leading-tight">
						PRIVATE PIRATES
					</h2>
				</div>
			</section> */}
			<DynamicComponentWithNoSSR tracks={tracks} />
		</>
	)
}
