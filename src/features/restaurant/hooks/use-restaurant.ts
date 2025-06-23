import { useQuery } from '@tanstack/react-query'
import { keys } from '@/constant/keys'
import { fetchRestaurant } from '../api/fetch-restaurant'

export const useRestaurant = (params: { id?: string }) => {
	return useQuery({
		queryKey: [keys.restaurantDetail, params.id],
		queryFn: () => fetchRestaurant(params),
	})
}
