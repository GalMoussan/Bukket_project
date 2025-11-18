export type ProductVariant = {
	id: string;
	label: string;      // e.g. "Matte Black"
	colorHex?: string;
	inStock: boolean;
};

export type Product = {
	id: string;
	name: string;
	price: number;
	currency: 'USD' | 'EUR' | 'ILS';
	description: string;
	features: string[];
	images: string[];
	variants: ProductVariant[];
	tags?: string[];
	isFeatured?: boolean;
	recommendedIds?: string[];
};