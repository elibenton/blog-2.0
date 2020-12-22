import moment from 'moment'

export default function group(post) {
	const postDate = moment(post.date)

	if (postDate.isAfter(moment().subtract(1, 'year'))) {
		return {
			...post,
			display: postDate.format('MMMM YYYY'),
			tier: 'tier_1'
		}
	} else if (
		postDate.isBetween(
			moment().subtract(3, 'year'),
			moment().subtract(1, 'year')
		)
	) {
		if (['12', '1', '2'].includes(postDate.format('M'))) {
			return {
				...post,
				display: `Winter ${postDate.format('YYYY')}`,
				tier: 'tier_2'
			}
		} else if (['3', '4', '5'].includes(postDate.format('M'))) {
			return {
				...post,
				display: `Spring ${postDate.format('YYYY')}`,
				tier: 'tier_2'
			}
		} else if (['6', '7', '8'].includes(postDate.format('M'))) {
			return {
				...post,
				display: `Summer ${postDate.format('YYYY')}`,
				tier: 'tier_2'
			}
		} else {
			return {
				...post,
				display: `Autumn ${postDate.format('YYYY')}`,
				tier: 'tier_2'
			}
		}
	} else {
		return {
			...post,
			display: postDate.format('YYYY'),
			tier: 'tier_3'
		}
	}
}
