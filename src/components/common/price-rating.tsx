import { DollarSign } from 'lucide-react'

export default function PriceRating({ rating = 0 }: { rating?: number }) {
	return (
		<div className='flex flex-nowrap'>
			{[...Array(5)].map((_, index) => (
				<DollarSign
					key={index}
					size={14}
					className={index < rating ? 'stroke-gray-900' : 'stroke-gray-300'}
				/>
			))}
		</div>
	)
}
