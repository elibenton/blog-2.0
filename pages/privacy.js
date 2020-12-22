import SimpleNav from '../components/layout/simple-nav'

export default function About() {
	return (
		<>
			<SimpleNav />
			<section className='flex flex-col md:max-w-3xl mx-auto pt-2 sm:pt-12 min-h-screen text-left'>
				<div className='max-w-3xl'>
					<h2 className='text-2xl sm:text-3xl  max-w-3xl text-left leading-tight'>
						PRIVATE PIRATES
					</h2>
				</div>
			</section>
		</>
	)
}
