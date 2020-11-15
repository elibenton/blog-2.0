import React, { useState, useRef } from 'react'

const Subscribe = () => {
	// const [loading, setLoading] = useState(false)
	const inputEl = useRef(null)

	const subscribe = async e => {
		console.log
		e.preventDefault()
		// setLoading(true)

		const res = await fetch('/api/subscribe', {
			body: JSON.stringify({
				email: inputEl.current.value
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		})

		// setLoading(false)
		const { error } = await res.json()

		if (error) {
			console.log(error)
			alert('ERROR', error)
			return
		}

		inputEl.current.value = ''
	}

	return (
		<div className='container flex flex-col justify-center items-center mx-auto my-8 py-10'>
			<div
				// style='background-image: url(https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)'
				className='max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center'></div>

			<div className='bg-white -mt-24 shadow-md rounded-lg overflow-hidden'>
				<div className='items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center'>
					<div className='px-2 -mt-6'>
						<div className='text-center'>
							<h1 className='text-3xl text-grey-800 font-medium leading-loose my-3 w-full'>
								Get the Latest Information
							</h1>
							<div className='w-full text-center'>
								<form action='#'>
									<div className='max-w-sm mx-auto p-1 pr-0 flex items-center'>
										<input
											type='email'
											ref={inputEl}
											placeholder='yourmail@example.com'
											className='flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none'
										/>
										<button
											type='submit'
											onClick={subscribe}
											className='bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3'>
											Get started
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Subscribe
