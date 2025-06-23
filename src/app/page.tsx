'use client'

import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import CardRestaurant from '@/features/restaurant/components/card-restaurant'
import FilterRestaurant from '@/features/restaurant/components/filter-restaurant'
import { useRestaurants } from '@/features/restaurant/hooks/use-restaurants'
import { Filter, Restaurant } from '@/features/restaurant/types'
import { ChevronsUpDownIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function Home() {
	const [filter, setFilter] = useState<Filter>({
		status: '',
		price: '',
		category: '',
	})
	const { data } = useRestaurants({ limit: 8, category: filter.category })

	const filteredData = useMemo(() => {
		if (!data) return []
		if (filter.status === '' && filter.price === '' && filter.category === '') {
			return data
		}

		return data.filter((item: Restaurant) => {
			const filterStatusBool =
				filter.status === 'OPEN NOW'
					? true
					: filter.status === 'CLOSED'
					? false
					: null

			const matchStatus =
				filter.status === '' || item.status === filterStatusBool

			const matchPrice =
				filter.price === '' || String(item.priceRange) === filter.price

			return matchStatus && matchPrice
		})
	}, [filter, data])
	console.log('filter', filteredData)

	return (
		<div className='min-h-screen pb-10 pt-4'>
			<div className='max-w-6xl px-4 mx-auto'>
				<p className='text-2xl'>Restaurant</p>
				<FilterRestaurant filter={filter} setFilter={setFilter} />
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{filteredData?.map((i) => (
						<CardRestaurant key={i.id} data={i} />
					))}
				</div>
			</div>
		</div>
	)
}
