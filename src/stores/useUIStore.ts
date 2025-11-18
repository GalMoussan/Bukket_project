import { create } from 'zustand';

export type ToastType = 'success' | 'error' | 'info';

export type Toast = {
	id: string;
	type: ToastType;
	message: string;
};

type UIState = {
	isMobileNavOpen: boolean;
	toasts: Toast[];
	toggleMobileNav: () => void;
	showToast: (toast: Omit<Toast, 'id'>) => void;
	dismissToast: (id: string) => void;
};

export const useUIStore = create<UIState>((set, get) => ({
	isMobileNavOpen: false,
	toasts: [],
	toggleMobileNav: () =>
		set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
	showToast: (toast) => {
		const id = crypto.randomUUID();
		set({ toasts: [...get().toasts, { ...toast, id }] });
	},
	dismissToast: (id) => {
		set({ toasts: get().toasts.filter((t) => t.id !== id) });
	},
}));
