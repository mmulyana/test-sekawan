'use client'

import PriceRating from '@/components/common/price-rating'
import StarRating from '@/components/common/star-rating'
import StatusBadge from '@/components/common/status-badge'
import { Skeleton } from '@/components/ui/skeleton'
import { useRestaurant } from '@/features/restaurant/hooks/use-restaurant'
import CardReview from '@/features/review/components/card-review'
import { useReviews } from '@/features/review/hooks/use-reviews'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Page() {
	const params = useParams<{ id: string }>()

	const { data, isPending } = useRestaurant(params)
	const { data: reviews, isPending: isPendingReview } = useReviews({
		restaurantId: params.id,
	})

	if (isPending) {
		return (
			<div className='space-y-4 pt-4'>
				<Skeleton className='w-1/2 h-8 bg-gray-200 mx-auto' />
				<Skeleton className='w-full h-10 bg-gray-200 mx-auto' />
				<Skeleton className='w-1/2 h-10 bg-gray-200 mx-auto' />
			</div>
		)
	}

	return (
		<div className='pt-4'>
			<Link href={'/'} className='flex gap-1 items-center mb-4 px-0'>
				<ChevronLeft />
				Back
			</Link>
			<div className='relative'>
				<img className='w-full h-[400px] rounded-xl' src={data?.photo} />
				<div className='absolute bottom-4 right-4 bg-black/50 rounded-full px-1.5 pr-2.5 py-0.5 backdrop-blur-xs'>
					<StatusBadge
						variant={data?.status ? 'success' : 'danger'}
						text={data?.status ? 'OPEN NOW' : 'CLOSED'}
						className='text-white'
					/>
				</div>
			</div>
			<p className='text-2xl mt-4'>{data?.name}</p>
			<div className='flex gap-2 items-center'>
				<p className='text-left'>{data?.category}</p>
				<div className='h-1.5 w-1.5 rounded-full bg-gray-400' />
				<StarRating rating={data?.rating} />
				<div className='h-1.5 w-1.5 rounded-full bg-gray-400' />
				<PriceRating rating={data?.rating} />
			</div>
			<div className='border-t-2 border-gray-100 mt-4'>
				<p className='text-lg mt-2 mb-4'>Review</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{isPendingReview && (
						<>
							<Skeleton className='h-40 rounded-lg bg-gray-200' />
							<Skeleton className='h-40 rounded-lg bg-gray-200' />
							<Skeleton className='h-40 rounded-lg bg-gray-200' />
						</>
					)}
					{reviews?.map((i) => (
						<CardReview key={i.id} data={i} />
					))}
				</div>
			</div>
		</div>
	)
}
