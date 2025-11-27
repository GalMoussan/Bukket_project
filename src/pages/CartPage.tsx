import { useCartStore } from '../stores/useCartStore';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const CartPage: React.FC = () => {
	const { items, updateQuantity, removeItem, cartCount } = useCartStore();

	// Calculate totals
	const cartItems = items.map((item) => {
		const product = products.find((p) => p.id === item.productId);
		return {
			...item,
			product,
			totalPrice: (product?.price || 0) * item.quantity,
		};
	});

	const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
	const shipping = 0; // Free shipping for now
	const total = subtotal + shipping;

	if (cartCount() === 0) {
		return (
			<div className="bukket-container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					className="mb-6 rounded-full bg-bukket-surface p-8"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-bukket-text-muted">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
					</svg>
				</motion.div>
				<h2 className="text-2xl font-bold">Your cart is empty</h2>
				<p className="mt-2 text-bukket-text-muted">Looks like you haven't added anything yet.</p>
				<Button className="mt-8" onClick={() => window.location.href = '/products'}>
					Start Shopping
				</Button>
			</div>
		);
	}

	return (
		<div className="bukket-container py-12 sm:py-20">
			<h1 className="mb-12 text-3xl font-bold">Shopping Cart</h1>

			<div className="grid gap-12 lg:grid-cols-12">
				{/* Cart Items List */}
				<div className="lg:col-span-8 space-y-6">
					<AnimatePresence>
						{cartItems.map((item) => (
							<motion.div
								key={`${item.productId}-${item.variantId}`}
								layout
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, x: -20 }}
								className="glass-panel flex gap-6 rounded-bukket-lg p-4 sm:p-6"
							>
								{/* Image Placeholder */}
								<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-bukket-md bg-bukket-soft border border-bukket-border-subtle">
									<div className="h-full w-full bg-gradient-to-br from-bukket-surface to-bukket-bg" />
								</div>

								<div className="flex flex-1 flex-col justify-between">
									<div className="flex justify-between">
										<div>
											<h3 className="font-medium text-bukket-text">
												{item.product?.name || 'Unknown Product'}
											</h3>
											<p className="mt-1 text-sm text-bukket-text-muted">
												{item.product?.variants.find(v => v.id === item.variantId)?.label || 'Standard'}
											</p>
										</div>
										<p className="font-medium text-bukket-text">
											${item.product?.price}
										</p>
									</div>

									<div className="mt-4 flex items-center justify-between">
										<div className="flex items-center gap-3 rounded-bukket-pill border border-bukket-border-subtle bg-bukket-bg/50 px-3 py-1">
											<button
												className="text-bukket-text-muted hover:text-bukket-text"
												onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
											>
												-
											</button>
											<span className="text-sm w-4 text-center">{item.quantity}</span>
											<button
												className="text-bukket-text-muted hover:text-bukket-text"
												onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
											>
												+
											</button>
										</div>
										<button
											onClick={() => removeItem(item.productId, item.variantId)}
											className="text-sm text-red-400 hover:text-red-300 transition-colors"
										>
											Remove
										</button>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>

				{/* Order Summary */}
				<div className="lg:col-span-4">
					<div className="glass-panel sticky top-24 rounded-bukket-xl p-6 sm:p-8">
						<h2 className="text-lg font-semibold">Order Summary</h2>

						<div className="mt-6 space-y-4 border-t border-bukket-border-subtle pt-4">
							<div className="flex justify-between text-sm text-bukket-text-muted">
								<span>Subtotal</span>
								<span className="text-bukket-text">${subtotal.toFixed(2)}</span>
							</div>
							<div className="flex justify-between text-sm text-bukket-text-muted">
								<span>Shipping</span>
								<span className="text-green-400">Free</span>
							</div>
						</div>

						<div className="mt-6 flex justify-between border-t border-bukket-border-subtle pt-4">
							<span className="text-base font-semibold">Total</span>
							<span className="text-xl font-bold text-bukket-primary-glow">${total.toFixed(2)}</span>
						</div>

						<Button className="mt-8 w-full" size="lg">
							Proceed to Checkout
						</Button>

						<p className="mt-4 text-center text-xs text-bukket-text-muted">
							Secure checkout powered by Stripe (Coming Soon)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};