import Link from 'next/link'

export default function CustomLink({ as, href, ...otherProps }) {
	return (
		<div className="group">
			<Link as={as} href={href}>
				<a className="group-hover:underline group-hover:bg-yellow-200" {...otherProps} />
			</Link>
			<sup
				className="group-hover:bg-black group-hover:text-yellow-400 bg-yellow-300 rounded-full py-0.5 px-1.5"
				// {...props}
			>
				<span role="img" aria-label="link">
					⚡︎
				</span>
			</sup>
		</div>
	)
}
