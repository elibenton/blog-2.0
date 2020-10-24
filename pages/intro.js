export default function Intro() {
	return (
		<section className='max-w-5xl mx-auto p-8 relative min-h-screen'>
			<h1 className='text-6xl text-left font-bold my-5'>Hello, I'm Eli.</h1>
			<h2 className='text-5xl text-left'>
				I'm freelance journalist and web developer
				<br /> working in multiple media — primarily
				<br /> <span className='font-russo text-red-500'>audio</span>,{' '}
				<span className='font-russo text-blue-500'>photography</span>, and{' '}
				<span className='font-plex text-yellow-500'>data</span>.
			</h2>

			<div className='arrow'>
				<div className='arrow-top'></div>
				<div className='arrow-bottom'></div>
			</div>
		</section>
	)
}
