// Default Imports
import Link from 'next/link'

// Package Imports
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

//Component Imports
import SimpleNav from '../../components/layout/simple-nav'

export default function Portfolio({ tagsUniq }) {
	return (
		<>
			<SimpleNav />
			<div className='flex flex-col'>
				<h1 className='text-5xl sm:text-6xl md:text-7xl leading-tight text-left font-bold my-5 sm:mb-8'>
					Tags
				</h1>
				<div className='inline-flex flex-wrap'>
					{Object.entries(tagsUniq).map(([key, value]) => (
						<h2 className='self-start m-0 py-1 font-normal'>
							<Link href={`tags/${_.kebabCase(key)}`}>
								<a className='hover:bg-yellow-200 rounded border border-transparent hover:border-opacity-100 hover:border-yellow-400 p-1'>
									{key} ({value})
								</a>
							</Link>
							&nbsp;•&nbsp;
						</h2>
					))}
				</div>
			</div>
		</>
	)
}

const root = process.cwd()

export async function getStaticProps() {
	const contentRoot = path.join(root, 'posts')

	const tags = fs.readdirSync(contentRoot).map(p => {
		const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
		return matter(content).data.tags
	})

	const tagsUniq = _.countBy(tags.flat())

	return { props: { tagsUniq } }
}
