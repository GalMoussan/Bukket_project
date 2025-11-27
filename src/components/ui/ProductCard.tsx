import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface ProductCardProps {
	title: string;
	price: string;
	image?: string;
	onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
	title,
	price,
	onAddToCart,
}) => {
	return (
		<motion.div
			className="group relative overflow-hidden rounded-bukket-xl bg-bukket-surface/40 border border-bukket-border-subtle backdrop-blur-sm transition-all duration-500 hover:border-bukket-primary/30 hover:shadow-bukket-glow hover:-translate-y-2"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			{/* Image Placeholder Area */}
			<div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-bukket-soft to-bukket-bg p-8">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bukket-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

				{/* Abstract Product Representation */}
				<div className="flex h-full w-full items-center justify-center rounded-bukket-lg border border-bukket-border-subtle/30 bg-bukket-surface/50 shadow-inner">
					<div className="h-1/2 w-1/3 rounded-full bg-gradient-to-b from-bukket-primary/20 to-transparent blur-md" />
				</div>

				{/* Quick Add Button (Visible on Hover) */}
				<div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
					<Button size="sm" onClick={onAddToCart} className="shadow-lg">
						Add to Cart
					</Button>
				</div>
			</div>

			{/* Content */}
			<div className="p-5">
				<h3 className="text-lg font-medium text-bukket-text group-hover:text-bukket-primary transition-colors">
					{title}
				</h3>
				<p className="mt-1 text-sm text-bukket-text-muted">Gravity Lung</p>
				<div className="mt-4 flex items-center justify-between">
					<span className="text-xl font-semibold text-bukket-text">{price}</span>
					<div className="h-8 w-8 rounded-full border border-bukket-border-subtle flex items-center justify-center text-bukket-text-muted group-hover:border-bukket-primary/50 group-hover:text-bukket-primary transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
						</svg>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
