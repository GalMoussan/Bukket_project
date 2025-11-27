import type { Product } from '../types/product';

export const products: Product[] = [
	{
		id: 'bukket-classic',
		name: 'Bukket Classic',
		price: 89,
		currency: 'USD',
		description:
			'The original waterless gravity lung. Effortless draws, cool dense smoke, and a ritual you can take anywhere.',
		features: [
			'Waterless gravity system',
			'Dishwasher safe components',
			'Compact and portable',
			'Designed for smooth, dense pulls',
		],
		images: [
			'/images/bukket-classic-1.webp',
			'/images/bukket-classic-2.webp',
			'/images/bukket-classic-3.webp',
		],
		variants: [
			{
				id: 'classic-matte-black',
				label: 'Matte Black',
				colorHex: '#111827',
				inStock: true,
			},
			{
				id: 'classic-smoke',
				label: 'Smoke',
				colorHex: '#4B5563',
				inStock: true,
			},
		],
		tags: ['gravity', 'starter', 'signature'],
		isFeatured: true,
		recommendedIds: ['bukket-travel-bag'],
	},
	{
		id: 'bukket-travel-bag',
		name: 'Bukket Travel Bag',
		price: 39,
		currency: 'USD',
		description:
			'Padded, minimal travel case designed specifically to protect your Bukket on the move.',
		features: ['Impact padding', 'Water-resistant exterior', 'Internal straps'],
		images: ['/images/bukket-bag-1.webp'],
		variants: [
			{
				id: 'bag-black',
				label: 'Black',
				colorHex: '#020617',
				inStock: true,
			},
		],
		tags: ['accessory', 'travel'],
		isFeatured: true,
	},
	{
		id: 'bukket-pro',
		name: 'Bukket Pro',
		price: 119,
		currency: 'USD',
		description:
			'The professional grade gravity system. Enhanced airflow, larger chamber, and premium finish for the connoisseur.',
		features: [
			'Enhanced airflow control',
			'Larger smoke chamber',
			'Premium matte finish',
			'Includes travel bag',
		],
		images: ['/images/bukket-pro-1.webp'],
		variants: [
			{
				id: 'pro-obsidian',
				label: 'Obsidian',
				colorHex: '#000000',
				inStock: true,
			},
		],
		tags: ['pro', 'premium', 'kit'],
		isFeatured: true,
	},
	{
		id: 'bukket-limited',
		name: 'Bukket Limited Edition',
		price: 149,
		currency: 'USD',
		description:
			'Exclusive limited run with unique colorways and numbered engraving. The ultimate collector\'s piece.',
		features: [
			'Limited edition colorway',
			'Numbered engraving',
			'Collector\'s box',
			'Lifetime VIP support',
		],
		images: ['/images/bukket-limited-1.webp'],
		variants: [
			{
				id: 'limited-gold',
				label: 'Stardust Gold',
				colorHex: '#FFD700',
				inStock: true,
			},
		],
		tags: ['limited', 'exclusive', 'collector'],
		isFeatured: true,
	},
];