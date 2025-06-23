export type Restaurant = {
	createdAt: string
	name: string
	photo: string
	category: string
	rating: number
	status: boolean
	priceRange: number
	id: string
}

export type Filter = {
	status?: string
	price?: string
	category?: string
}
