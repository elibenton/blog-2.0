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

// Library Imports
import { getFilePaths, getFileBySlug } from '../../lib/mdx'

const components = {
	Image: dynamic(() => import('../../components/image')),
	Citation: dynamic(() => import('../../components/citation/citation')),
	Subscribe: dynamic(() => import('../../components/subscribe-big')),
	RelatedPosts: dynamic(() => import('../../components/related-posts'))
}

const editUrl = (slug) => `https://github.com/elibenton/blog-2.0/tree/master/posts/${slug}.mdx`

export default function PostPage({ mdxSource, frontMatter }) {
	const { slug, title, date, location } = frontMatter

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
