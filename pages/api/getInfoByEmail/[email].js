export default async (req, res) => {
	const { email } = req.query
	const API_KEY = process.env.BUTTONDOWN_API_KEY

	const responseSubs = await fetch(`https://api.buttondown.email/v1/subscribers?email=${email}`, {
		headers: {
			Authorization: `Token ${API_KEY}`,
			'Content-Type': 'application/json'
		},
		method: 'GET'
	})

	const data = await responseSubs.json()

	console.log(data)

	res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

	return res.status(200).json(data.results[0])
}
