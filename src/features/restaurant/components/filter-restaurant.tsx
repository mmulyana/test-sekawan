'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import { ChevronsUpDownIcon } from 'lucide-react'
import { Filter } from '../types'

type Props = {
	filter: Filter
	setFilter: (val: Filter) => void
}

const categories = [
	'Perancis',
	'Mediterania',
	'Italia',
	'Korea',
	'Turki',
	'Timur Tengah',
	'Tradisional',
]

export default function FilterRestaurant({ filter, setFilter }: Props) {
	const hasActiveFilter = Object.values(filter).some(Boolean)

	const handleReset = () => {
		setFilter({
			status: '',
			price: '',
			category: '',
		})
	}

	return (
		<div className='mt-4 py-4 border rounded-lg mb-6 flex justify-between items-center px-4'>
			<div className='flex gap-4'>
				<div>
					<p className='text-sm leading-none mb-1 font-medium'>Status</p>
					<Select
						value={filter.status ?? ''}
						onValueChange={(val) => setFilter({ ...filter, status: val })}
					>
						<SelectTrigger className='max-w-[200px]'>
							<SelectValue placeholder='Select status' />
						</SelectTrigger>
						<SelectContent>
							{['OPEN NOW', 'CLOSED'].map((i) => (
								<SelectItem key={i} value={i}>
									{i}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<p className='text-sm leading-none mb-1 font-medium'>Price</p>
					<Select
						value={filter.price ?? ''}
						onValueChange={(val) => setFilter({ ...filter, price: val })}
					>
						<SelectTrigger className='max-w-[200px]'>
							<SelectValue placeholder='Select price' />
						</SelectTrigger>
						<SelectContent>
							{[1, 2, 3, 4].map((i) => (
								<SelectItem key={i} value={String(i)}>
									{i}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div>
					<p className='text-sm leading-none mb-1 font-medium'>Category</p>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant='outline'
								role='combobox'
								className='w-[200px] justify-between'
							>
								{filter.category || 'Select category'}
								<ChevronsUpDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-[200px] p-0'>
							<Command>
								<CommandInput placeholder='Search category...' />
								<CommandList>
									<CommandEmpty>No category found.</CommandEmpty>
									<CommandGroup>
										{categories.map((val) => (
											<CommandItem
												key={val}
												value={val}
												onSelect={() => setFilter({ ...filter, category: val })}
											>
												{val}
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
				</div>
			</div>

			{hasActiveFilter && (
				<Button variant='outline' onClick={handleReset}>
					Reset
				</Button>
			)}
		</div>
	)
}
