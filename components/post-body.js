export default function PostBody({ content, slug }) {
	return (
		<div className="relative prose-lg dark:prose-dark md:w-7/12 xl:w-1/2 mx-auto mt-16 flex flex-col">
			<main className="border-b border-black pb-8 mb-4">{content}</main>
			<div className="text-right">
				See a typo? Help me fix it.
				<br />
				<a
					href={`https://github.com/elibenton/blog-2.0/tree/master/posts/${slug}.mdx`}
					className="font-bold">
					Edit on Github
				</a>
			</div>
		</div>
	)
}
