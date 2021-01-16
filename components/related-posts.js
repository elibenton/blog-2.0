export default function RelatedPost({ tag, location, date }) {
	return (
		<div className="border border-blue-500 bg-blue-100 rounded-md dark:border-white p-2">
			<div className="text-lg font-semibold">Related Posts</div>
			<div className="italic">Post 1</div>
			<div className="italic">Post 2</div>
			<div className="italic">Post 3</div>
		</div>
	)
}
