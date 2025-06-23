import { apiRestaurant } from '@/constant/api'
import axios from 'axios'
import { Restaurant } from '../types'

export const fetchRestaurant = async ({
	id,
}: {
	id?: string
}): Promise<Restaurant> => {
	const res = await axios.get(`${apiRestaurant}/${id}`)

	return res.data
}
