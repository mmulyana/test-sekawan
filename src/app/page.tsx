'use client'

import CardRestaurant from '@/features/restaurant/components/card-restaurant'
import { useRestaurants } from '@/features/restaurant/hooks/use-restaurants'

export default function Home() {
	const { data } = useRestaurants({ limit: 8 })
	return (
		<div className='min-h-screen'>
			<div className='max-w-6xl px-4 mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{data?.map((i) => (
						<CardRestaurant key={i.id} data={i} />
					))}
				</div>
			</div>
		</div>
	)
}
