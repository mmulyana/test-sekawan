import { useQuery } from '@tanstack/react-query'
import { keys } from '@/constant/keys'
import { fetchReviews } from '../api/fetch-reviews'

export const useReviews = (params: {
	restaurantId?: string
	page?: number
	limit?: number
}) => {
	return useQuery({
		queryKey: [keys.review, params],
		queryFn: () => fetchReviews(params),
	})
}
