// Default Imports
import dynamic from 'next/dynamic'

// Package Imports
import hydrate from 'next-mdx-remote/hydrate'
import { format, parseISO } from 'date-fns'
import readingTime from 'reading-time'

// Component Imports
import Nav from '../../components/layout/post-nav'
import BlogSEO from '../../components/blog-seo'
import Body from '../../components/post-body'
import Header from '../../components/post-header'
import Footnote from '../../components/footnote'

// Library Imports
import { getFilePaths, getFileBySlug } from '../../lib/mdx'
import CustomLink from '../../components/customLink'

const components = {
	sup: Footnote,
	a: CustomLink,
	Image: dynamic(() => import('../../components/image')),
	Citation: dynamic(() => import('../../components/citation/citation')),
	Subscribe: dynamic(() => import('../../components/subscribe-big'))
}

export default function PostPage({ mdxSource, frontMatter }) {
	const { slug, title, date, location } = frontMatter

	// const components = {
	// 	wrapper: ({ children, ...props }) => {
	// 		const updatedChildren = children.map((child) => {
	// 			if (child.props.className === 'footnote-ref') {
	// 				// Since we only have one element that will ever match this
	// 				// the key doesn't matter, but react will yell without a key.

	// 				console.log(child)

	// 				return <sup className="bg-blue-500 font-bold" {...child.props} />
	// 			}
	// 			return child
	// 		})
	// 		return <>{updatedChildren}</>
	// 	}
	// }

	const content = hydrate(mdxSource, { components })

	return (
		<>
			<BlogSEO {...frontMatter} />
			<Nav title={title} date={format(parseISO(date), 'MMMM dd, yyyy')} location={location} />
			<Header {...frontMatter} date={format(parseISO(date), 'MMMM dd, yyyy')} />
			<Body content={content} slug={slug} />
		</>
	)
}

export async function getStaticProps({ params }) {
	const post = await getFileBySlug(params.slug)

	return {
		props: post
	}
}

export async function getStaticPaths() {
	const posts = await getFilePaths('blog')

	return {
		paths: posts.map(({ slug }) => ({
			params: {
				slug: slug
			}
		})),
		fallback: false
	}
}
