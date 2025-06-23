import { Card, CardContent } from '@/components/ui/card'
import { Review } from '../types'
import StarRating from '@/components/common/star-rating'

export default function CardReview({ data }: { data: Review }) {
	return (
		<Card>
			<CardContent>
				<div className='flex gap-4'>
					<img className='h-10 w-10 rounded-full' src={data.avatar} />
					<div>
						<p className='text-gray-900'>{data.name}</p>
						<p className='text-gray-400 mb-2'>{data.message}</p>
						<StarRating rating={data.rating} />
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
