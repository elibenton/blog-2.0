import ImageFill from '../components/image-fill'
import image from '../public/cdale.jpeg'

export default function Image() {
	return (
		<>
			<ImageFill
				title='Will Trump Concede?'
				date='10-26-2020'
				location='Carbondale, Colorado'
				caption='Mount Sopris is one heck of a mount'
				imagePath={`url(${require('../public/cdale.jpeg')})`}
			/>
		</>
	)
}
