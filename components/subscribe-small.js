import { useState, useRef } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import format from 'comma-number'

import fetcher from '../utils/fetcher'

function ErrorMessage({ children }) {
	return (
		<p className='flex items-center text-sm font-bold text-red-800 dark:text-red-400'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 20 20'
				fill='currentColor'
				className='mr-2 h-4 w-4'>
				<path
					fillRule='evenodd'
					d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
					clipRule='evenodd'
				/>
			</svg>
			{children}
		</p>
	)
}

function SuccessMessage({ children }) {
	return (
		<p className='flex items-center text-sm font-bold text-green-800 dark:text-green-400'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 20 20'
				fill='currentColor'
				className='mr-2 h-4 w-4'>
				<path
					fillRule='evenodd'
					d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
					clipRule='evenodd'
				/>
			</svg>
			{children}
		</p>
	)
}

export default function Subscribe() {
	const [form, setForm] = useState(false)
	const inputEl = useRef(null)
	const { data } = useSWR('/api/subscribers', fetcher)
	const subscriberCount = format(data?.count)

	const subscribe = async e => {
		e.preventDefault()
		setForm({ state: 'loading' })

		const res = await fetch('/api/subscribe', {
			body: JSON.stringify({
				email: inputEl.current.value
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		})

		const { error } = await res.json()
		if (error) {
			setForm({
				state: 'error',
				message: error
			})
			return
		}

		inputEl.current.value = ''
		setForm({
			state: 'success',
			message: `Hooray! You're now on the list.`
		})
	}

	// const handleKeypress = e => {
	// 	console.log(inputEl)
	// 	//it triggers by pressing the enter key
	// 	if (e.charCode === 13) {
	// 		subscribe()
	// 	}
	// }

	return (
		<div>
			{form.state === 'error' ? (
				<ErrorMessage>{form.message}</ErrorMessage>
			) : form.state === 'success' ? (
				<SuccessMessage>{form.message}</SuccessMessage>
			) : (
				<div />
			)}
			<div className='relative'>
				<input
					ref={inputEl}
					// onKeyPress={() => handleKeypress}
					aria-label='Email for newsletter'
					placeholder='you@domain.com'
					type='email'
					autoComplete='email'
					required
					className='px-2 py-2 mt-1 text-sm block w-full bg-gray-100 dark:bg-black border-black dark:border-white border-b text-black dark:text-gray-100'
				/>
				<button
					className='flex items-center justify-center absolute right-1 top-1 px-2 text-sm h-7 border border-black dark:bg-white text-black rounded w-20'
					onClick={subscribe}>
					{form.state === 'loading' ? (
						<svg
							className='animate-spin h-5 w-5 text-gray-900 dark:text-gray-100'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'>
							<circle
								className='opacity-25'
								cx='12'
								cy='12'
								r='10'
								stroke='currentColor'
								strokeWidth='4'
							/>
							<path
								className='opacity-75'
								fill='currentColor'
								d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
							/>
						</svg>
					) : (
						'Subscribe'
					)}
				</button>
			</div>
		</div>
	)
}
