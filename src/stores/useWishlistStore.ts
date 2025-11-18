import { create } from 'zustand';

type WishlistState = {
	productIds: string[];
	toggleWishlist: (productId: string) => void;
	isInWishlist: (productId: string) => boolean;
};

export const useWishlistStore = create<WishlistState>((set, get) => ({
	productIds: [],
	toggleWishlist: (productId) => {
		const { productIds } = get();
		if (productIds.includes(productId)) {
			set({ productIds: productIds.filter((id) => id !== productId) });
		} else {
			set({ productIds: [...productIds, productId] });
		}
	},
	isInWishlist: (productId) => get().productIds.includes(productId),
}));