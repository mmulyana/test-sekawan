import { apiReview } from '@/constant/api'
import axios from 'axios'
import { Review } from '../types'

export const fetchReviews = async ({
	restaurantId,
	page = 1,
	limit = 10,
}: {
	restaurantId?: string
	page?: number
	limit?: number
}): Promise<Review[]> => {
	const res = await axios.get(apiReview, {
		params: {
			...(restaurantId ? { restaurantId } : {}),
			page,
			limit,
		},
	})

	return res.data
}
