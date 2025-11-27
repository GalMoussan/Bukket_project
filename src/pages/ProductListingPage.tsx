import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { useCartStore } from '../stores/useCartStore';
import { motion } from 'framer-motion';

export const ProductListingPage: React.FC = () => {
	const addItem = useCartStore((state) => state.addItem);

	const handleAddToCart = (product: typeof products[0]) => {
		addItem({
			productId: product.id,
			// Defaulting to first variant for now if available
			variantId: product.variants[0]?.id,
			quantity: 1,
		});
		// Optional: Add toast notification here
		console.log(`Added ${product.name} to cart`);
	};

	return (
		<div className="bukket-container py-12 sm:py-20">
			<motion.div
				className="mb-12 text-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Shop Bukket</h1>
				<p className="mt-4 text-lg text-bukket-text-muted max-w-2xl mx-auto">
					Explore our collection of gravity-defying smoking accessories.
					Engineered for the perfect draw.
				</p>
			</motion.div>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{products.map((product, index) => (
					<motion.div
						key={product.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<ProductCard
							title={product.name}
							price={`$${product.price}`}
							onAddToCart={() => handleAddToCart(product)}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};