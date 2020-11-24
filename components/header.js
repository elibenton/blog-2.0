import React from 'react'

export default function Header() {
	return (
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
	)
}
