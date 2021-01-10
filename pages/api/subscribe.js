export default async (req, res) => {
	const { email } = req.body

	if (!email) {
		return res.status(400).json({ error: 'Email is required' })
	}

	try {
		const API_KEY = process.env.BUTTONDOWN_API_KEY
		const response = await fetch(`https://api.buttondown.email/v1/subscribers`, {
			body: JSON.stringify({
				email,
				tags: ['website']
			}),
			headers: {
				Authorization: `Token ${API_KEY}`,
				'Content-Type': 'application/json'
			},
			method: 'POST'
		})

		if (response.status >= 400) {
			const text = await response.text()

			if (text.includes('already subscribed')) {
				return res.status(400).json({
					error: `You're already on the list!`
				})
			}

			if (text.includes('valid email address')) {
				return res.status(400).json({
					error: `Please use a valid email address.`
				})
			}

			return res.status(400).json({
				error: text
			})
		}

		return res.status(201).json({ error: '' })
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() })
	}
}
