// Component Imports
import SimpleNav from '../components/layout/simple-nav'
import ProjectCard from '../components/project-card'

export default function Projects() {
	const data = [
		{
			href: 'http://51.watson.foundation/fellows/eli-cohen.html',
			src: '/icons/watson.png',
			svg: 'icons/watson.svg',
			alt: 'Watson Logo',
			name: 'Watson Fellowship',
			date: 'August 2020',
			location: 'New York, New York',
			description: `In the modern world, we channel our almost every aspect of our lives through digital technology. Through a steady accumulation of seemingly neutral choices, I believe that we are changing our relationship to reality faster than we can understand the consequences.`
		},
		{
			href: 'https://dontwait.vote/',
			src: '/icons/vote.png',
			alt: 'Dont Wait Logo',
			name: `Don't Wait, Vote!`,
			date: 'November 2020',
			location: 'Birmingham, Alabama',
			description: `In the wake of George Floyd's murder, we sought a better way to inform the public about the elections that can fix policing in America. Our service pulls information on criminal justice races for any address in the country. The results show who is running, they're endorsements, and biographical information.`
		},
		{
			href:
				'https://www.dropbox.com/s/4taniiw0e2czg1z/the%20political%20arguments%20of%20podcasting.pdf?dl=0',
			src: '/icons/pomona.png',
			alt: 'Pomona Logo',
			name: `The Political Arguments of Podcasting`,
			date: 'May 2019',
			location: 'Los Angeles, California',
			description: `This thesis theorizes podcasts as a return, specifically along three different dimensions: a return to narrative form, a return to the spoken word, and a retreat from politics mediated by technology. Political theory has longs postulated about speech. Aristotle said that “Spoken sounds are tokens of affections in the soul.” Hannah Arendt believed that “speech is what makes man a political being.” Taken in this tradition, how podcasting orients, captures, and distributes speech become pressing political concerns of the current day`
		},
		{
			href: 'https://podcasts.apple.com/us/podcast/discussion-collective/id1437546006',
			src: '/icons/disco.png',
			alt: 'DisCo Logo',
			name: `Discussion Collective`,
			date: 'March 2019',
			location: 'Los Angeles, California',
			description: `Equal parts skeptical and vulnerable, a podcast that questions life at The Claremont Colleges by having the conversations we typically avoid. `
		}
	]
	return (
		<>
			<SimpleNav />
			{data.map(data => (
				<ProjectCard key={data.name} {...data} />
			))}
		</>
	)
}
