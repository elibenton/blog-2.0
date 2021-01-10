export default function Section({ sectionName, children }) {
	return (
		<div className="flex" id={sectionName}>
			<div className="self-start sticky-top vertical mt-1 text-green-500 overflow-scroll">
				{sectionName}
			</div>
			<div className="ml-2.5 flex-col">{children}</div>
		</div>
	)
}
