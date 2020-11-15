import React, { useState, useRef, useEffect } from 'react'

export default function Footer() {
	const [sticky, setSticky] = useState({ isSticky: false, offset: 0 })
	const headerRef = useRef(null)

	const handleScroll = (elTopOffset, elHeight) => {
		if (window.pageYOffset > elTopOffset + elHeight) {
			setSticky({ isSticky: true, offset: elHeight })
		} else {
			setSticky({ isSticky: false, offset: 0 })
		}
	}

	// add/remove scroll event listener
	useEffect(() => {
		var header = headerRef.current.getBoundingClientRect()
		const handleScrollEvent = () => {
			handleScroll(header.top, header.height)
		}

		window.addEventListener('scroll', handleScrollEvent)

		return () => {
			window.removeEventListener('scroll', handleScrollEvent)
		}
	}, [])

	return (
		<section
			// className='pt-16 sm:pt-32'
			className={`navbar${sticky.isSticky ? ' sticky' : ''}`}
			ref={headerRef}>
			<section className='flex justify-between py-8'>
				<a
					href='#yep'
					className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
					© {new Date().getFullYear()} Eli B. Cohen
				</a>
				<a
					href='#yep'
					className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
					Updated 10-25-2020
				</a>
				<a
					href='#yep'
					className='text-sm bg-gray-300 rounded-full text-gray-700 px-2 hover:bg-gray-400 hover:text-gray-900 duration-200'>
					GPLv3
				</a>
			</section>
		</section>
	)
}
