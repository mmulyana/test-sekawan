import { apiRestaurant } from '@/constant/api'
import axios from 'axios'
import { Restaurant } from '../types'

export const fetchRestaurants = async ({
	category,
	page = 1,
	limit = 10,
}: {
	category?: string
	page?: number
	limit?: number
}): Promise<Restaurant[]> => {
	const res = await axios.get(apiRestaurant, {
		params: {
			...(category ? { category } : {}),
			page,
			limit,
		},
	})

	return res.data
}
