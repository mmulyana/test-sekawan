import { Restaurant } from '../types'
import StarRating from '@/components/common/star-rating'
import PriceRating from '@/components/common/price-rating'
import StatusBadge from '@/components/common/status-badge'
import Link from 'next/link'

export default function CardRestaurant({ data }: { data: Restaurant }) {
	return (
		<div className='hover:scale-105 transition-all ease-in'>
			<img src={data.photo} className='w-full h-40' />
			<p className='text-lg text-gray-800'>{data.name}</p>
			<StarRating rating={data.rating} />
			<div className='flex justify-between'>
				<div className='flex gap-2 items-center'>
					<p>{data.category}</p>
					<div className='h-1.5 w-1.5 rounded-full bg-gray-400' />
					<PriceRating rating={data.priceRange} />
				</div>
				<StatusBadge
					variant={data.status ? 'success' : 'danger'}
					text={data.status ? 'OPEN NOW' : 'CLOSED'}
				/>
			</div>
			<Link
				href={`/${data.id}`}
				className='bg-blue-950 mt-4 text-sm text-white flex justify-center items-center py-2'
			>
				LEARN MORE
			</Link>
		</div>
	)
}
