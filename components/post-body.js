export default function PostBody({ content, slug }) {
  return (
    <div className="w-full md:w-2/3 xl:w-1/2 justify-center mx-auto mt-16">
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
