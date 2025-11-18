import { products } from '../data/products';
import type { Product } from '../types/product';

export const apiClient = {
	async getProducts(): Promise<Product[]> {
		await new Promise((res) => setTimeout(res, 200)); // simulate latency
		return products;
	},
	async getProductById(id: string): Promise<Product | null> {
		await new Promise((res) => setTimeout(res, 200));
		return products.find((p) => p.id === id) ?? null;
	},
};