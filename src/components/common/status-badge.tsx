import { cn } from '@/lib/utils'

export default function StatusBadge({
	variant,
	text,
	className,
}: {
	variant?: 'danger' | 'success'
	text: string
	className?: string
}) {
	return (
		<div className='flex gap-1 items-center'>
			<div
				className={cn(
					'h-1.5 w-1.5 rounded-full',
					variant === 'success' ? 'bg-green-600' : 'bg-red-600'
				)}
			></div>
			<p className={cn('text-sm text-gray-400', className)}>{text}</p>
		</div>
	)
}
