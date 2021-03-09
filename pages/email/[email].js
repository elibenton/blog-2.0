import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { useRouter } from 'next/router'

export default function Email() {
	const router = useRouter()
	const { email } = router.query

	const { data, error } = useSWR(`/api/getInfoByEmail/${email}`, fetcher)

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>
	return (
		<form className="flex flex-col md:w-1/2">
			<h1 className="text-4xl font-bold font-akzidenz">Hi {data.metadata.firstName}!</h1>
			<p>Here is the info we have you:</p>
			<div className="flex flex-col">
				<label htmlFor="first_name">First name</label>
				<input
					className="text-xl rounded-md p-2 mb-4 bg-gray-100 text-gray-600"
					defaultValue={data.metadata.firstName}
					type="text"
					id="first_name"
					name="first_name"
				/>
				<label htmlFor="last_name">Last name</label>
				<input
					className="text-xl rounded-md p-2 mb-4 bg-gray-100 text-gray-600"
					defaultValue={data.metadata.lastName}
					type="text"
					id="last_name"
					name="last_name"
				/>
				<label htmlFor="email">Email</label>
				<input
					className="text-xl rounded-md p-2 mb-4 bg-gray-100 text-gray-600"
					defaultValue={email}
					type="email"
					id="email"
				/>
			</div>
			<div className="flex flex-col">
				<div className="text-lg space-x-2">
					<input type="radio" id="contactChoice1" name="contact" value="email" />
					<label htmlFor="contactChoice1">Every Post (Immediately at publishing)</label>
				</div>
				<div className="text-lg space-x-2">
					<input type="radio" id="contactChoice1" name="contact" value="email" />
					<label htmlFor="contactChoice1">Weekly (Sundays at 9am)</label>
				</div>
				<div className="text-lg space-x-2">
					<input type="radio" id="contactChoice1" name="contact" value="email" />
					<label htmlFor="contactChoice1">Monthly (First calendar day)</label>
				</div>
			</div>
			<div>
				<button type="submit">Update</button>
			</div>
			<div>
				<button type="unsubscribe">Unsubscribe</button>
			</div>
		</form>
	)
}
