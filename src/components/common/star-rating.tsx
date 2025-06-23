import { cn } from '@/lib/utils'
import { StarIcon } from 'lucide-react'

export default function StarRating({ rating = 0 }) {
	return (
		<div className='flex space-x-1'>
			{[...Array(5)].map((_, index) => (
				<StarIcon
					key={index}
					size={18}
					className={cn(
						'stroke-yellow-400 fill-transparent',
						index < rating && 'fill-yellow-400'
					)}
				/>
			))}
		</div>
	)
}
