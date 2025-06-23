import { useQuery } from '@tanstack/react-query'
import { fetchRestaurants } from '../api/fetch-restaurants'
import { keys } from '@/constant/keys'

export const useRestaurants = (params: {
	category?: string
	page?: number
	limit?: number
}) => {
	return useQuery({
		queryKey: [keys.restaurant, params],
		queryFn: () => fetchRestaurants(params),
	})
}
