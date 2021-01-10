export default async (_, res) => {
	const API_KEY = process.env.BUTTONDOWN_API_KEY

	const responseIssues = await fetch('https://api.buttondown.email/v1/newsletters', {
		headers: {
			Authorization: `Token ${API_KEY}`,
			'Content-Type': 'application/json'
		},
		method: 'GET'
	})

	const { count: countIssues } = await responseIssues.json()

	res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

	return res.status(200).json({ countIssues })
}
