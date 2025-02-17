export default async (_, res) => {
	const API_KEY = process.env.BUTTONDOWN_API_KEY

	const responseSubs = await fetch('https://api.buttondown.email/v1/subscribers', {
		headers: {
			Authorization: `Token ${API_KEY}`,
			'Content-Type': 'application/json'
		},
		method: 'GET'
	})

	const { count: countSubs } = await responseSubs.json()

	res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

	return res.status(200).json({ countSubs })
}
