import { create } from 'zustand';

export type CartItem = {
	productId: string;
	variantId?: string;
	quantity: number;
};

type CartState = {
	items: CartItem[];
	addItem: (item: CartItem) => void;
	updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
	removeItem: (productId: string, variantId?: string) => void;
	clearCart: () => void;
	cartCount: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
	items: [],
	addItem: (item) => {
		const existing = get().items.find(
			(i) => i.productId === item.productId && i.variantId === item.variantId,
		);
		if (existing) {
			set({
				items: get().items.map((i) =>
					i.productId === item.productId && i.variantId === item.variantId
						? { ...i, quantity: i.quantity + item.quantity }
						: i,
				),
			});
		} else {
			set({ items: [...get().items, item] });
		}
	},
	updateQuantity: (productId, variantId, quantity) => {
		if (quantity <= 0) {
			get().removeItem(productId, variantId);
			return;
		}
		set({
			items: get().items.map((i) =>
				i.productId === productId && i.variantId === variantId ? { ...i, quantity } : i,
			),
		});
	},
	removeItem: (productId, variantId) => {
		set({
			items: get().items.filter(
				(i) => !(i.productId === productId && i.variantId === variantId),
			),
		});
	},
	clearCart: () => set({ items: [] }),
	cartCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));