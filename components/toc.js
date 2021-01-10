import React, { useEffect, useState } from 'react'
// https://nickymeuleman.netlify.app/blog/table-of-contents

// https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/

// https://lab.hakim.se/progress-nav/

export default function TableOfContents() {
	function useActiveId(itemIds) {
		const [activeId, setActiveId] = useState(`test`)

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveId(entry.target.id)
						}
					})
				},
				{ rootMargin: `0% 0% -80% 0%` }
			)
			itemIds.forEach((id) => {
				observer.observe(document.getElementById(id))
			})
			return () => {
				itemIds.forEach((id) => {
					observer.unobserve(document.getElementById(id))
				})
			}
		}, [itemIds])
		return activeId
	}

	function renderItems(items) {
		return (
			<ol>
				{items.map((item) => (
					<li key={item.url}>
						<a href={item.url}>{item.title}</a>
					</li>
				))}
			</ol>
		)
	}

	function getIds(items) {
		return items.reduce((acc, item) => {
			if (item.url) {
				// url has a # as first character, remove it to get the raw CSS-id
				acc.push(item.url.slice(1))
			}
			if (item.items) {
				acc.push(...getIds(item.items))
			}
			return acc
		}, [])
	}

	return (
		<aside className="hidden lg:flex flex-col flex-wrap max-w-sm sticky-top self-start">
			{/* {renderItems(props.items)} */}
			<ul className="mt-6 mr-12">
				<li>
					<a className="text-lg expand active:text-red-600" href="#projects">
						Projects
					</a>
				</li>
				<li>
					<a className="text-lg expand" href="#articles">
						Articles
					</a>
				</li>
				<li>
					<a className="text-lg expand" href="#education">
						Education
					</a>
				</li>
				<li>
					<a className="text-lg expand" href="#experience">
						Experience
					</a>
				</li>
				<li>
					<a className="text-lg expand" href="#reading">
						Reading
					</a>
				</li>
				<li>
					<a className="text-lg expand" href="#blog">
						Blog
					</a>
				</li>
			</ul>
		</aside>
	)
}
