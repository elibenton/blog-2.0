import React, { useState, useRef } from 'react'

const Subscribe = () => {
	const [loading, setLoading] = useState(false)
	const inputEl = useRef(null)

	console.log('hello')

	const subscribe = async e => {
		e.preventDefault()
		setLoading(true)

		const res = await fetch('/api/subscribe', {
			body: JSON.stringify({
				email: inputEl.current.value
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		})

		setLoading(false)
		const { error } = await res.json()

		//  if (error) {
		//    toast({
		//      title: 'An error occurred.',
		//      description: error,
		//      status: 'error',
		//      duration: 3000,
		//      isClosable: true
		//    });

		//    return;
		//  }

		//  trackGoal('JYFUFMSF', 0);
		//  inputEl.current.value = '';
		//  toast({
		//    title: 'Success!',
		//    description: 'You are now subscribed.',
		//    status: 'success',
		//    duration: 3000,
		//    isClosable: true
		//  });
	}

	return (
		<>
			<div className='bg-white rounded-lg p-6 self-start w-1/2 my-4 mx-1'>
				<h1 className='font-bold text-3xl'>Subscribe to the newsletter</h1>
				<p className='mb-4'>
					Get emails from me about web development, tech, and early access
					to new articles.
				</p>
				<input
					className='border-gray-300 rounded-lg py-2 mr-6 w-2/3'
					placeholder='name@domain.com'
					ref={inputEl}
					type='email'></input>
				<button className='bg-gray-500 rounded-lg py-2 px-4 w-1/4'>
					Subscribe
				</button>
			</div>
			{/* <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      w="100%"
    >
      <Heading as="h5" size="lg" mb={2}>
        Subscribe to the newsletter
      </Heading>
      <Text>
        Get emails from me about web development, tech, and early access to new
        articles.
      </Text>
      <InputGroup size="md" mt={4}>
        <Input
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          ref={inputEl}
          type="email"
        />
        <InputRightElement width="6.75rem">
          <Button
            isLoading={loading}
            fontWeight="bold"
            h="1.75rem"
            size="sm"
            onClick={subscribe}
          >
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box> */}
		</>
	)
}

export default Subscribe
