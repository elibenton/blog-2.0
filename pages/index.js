import Entry from '../components/entry'
import Section from '../components/section'
import Wrapper from '../components/wrapper'
import Intro from '../components/intro'
import TableOfContents from '../components/toc'
import Footer from '../components/footer'
import ImageFill from '../components/image-fill'
import BlogList from '../components/blog-list'

export default function Portfolio() {
	return (
		<Wrapper>
			<Intro />
			<div className='flex flex-row'>
				<div className='flex-grow'>
					<Section sectionName='Projects'>
						<Entry
							title={`Don't Wait, Vote!`}
							dates='May 2020 - November 2020'
							locations='Birmingham, Alabama'
							mediums='Audio'
						/>
						<Entry
							title='The Watson Fellowship'
							dates='July 2019 - March 2020'
							locations='Yangon, Myanmar'
							mediums='Data'
						/>
						<Entry
							title='Discussion Collective'
							dates='January 2018 - May 2019'
							locations='Los Angeles, California'
							mediums='Photography'
						/>
						<Entry
							title='The Political Arguments of Podcasting'
							dates='August 2018 - May 2019'
							locations='Los Angeles, California'
						/>
					</Section>
					<BlogList />
					<Section sectionName='Clips'>
						<Entry title='The Life and Death of Zawgyi' dates='March 2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
					</Section>
					<Section sectionName='Project'>
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
					</Section>
					<Section sectionName='Project'>
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
						<Entry title='Watty' dates='2019-2020' />
					</Section>
				</div>
				<TableOfContents />
			</div>
			<Footer />
		</Wrapper>
	)
}
