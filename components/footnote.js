export default function Footnote(props) {
	return props.children.props.children.length === 1 ? (
		<sup
			className="hover:bg-blue-400 hover:text-yellow-400 bg-blue-200 rounded-full py-0.5 px-1.5 -mx-0.5"
			{...props}
		/>
	) : (
		<sup
			className="hover:bg-blue-400 hover:text-yellow-400 bg-blue-200 rounded-full p-1 -mx-0.5"
			{...props}
		/>
	)
}
