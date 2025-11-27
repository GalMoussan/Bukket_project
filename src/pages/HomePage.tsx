import { Hero } from '../components/home/Hero';
import { PageSection } from '../components/layout/PageSection';
import { ProductCard } from '../components/ui/ProductCard';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
	const products = [
		{ id: 1, title: 'Bukket Original', price: '$49.99' },
		{ id: 2, title: 'Bukket Pro', price: '$69.99' },
		{ id: 3, title: 'Travel Edition', price: '$39.99' },
	];

	return (
		<>
			<Hero />

			{/* Featured Products */}
			<PageSection id="products" className="relative z-10">
				<div className="mb-12 text-center">
					<motion.h2
						className="text-3xl font-bold tracking-tight sm:text-4xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						The Collection
					</motion.h2>
					<motion.p
						className="mt-4 text-bukket-text-muted max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						Precision engineered for the perfect draw. Choose your gravity.
					</motion.p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							title={product.title}
							price={product.price}
							onAddToCart={() => console.log('Added to cart')}
						/>
					))}
				</div>
			</PageSection>

			{/* How it Works (Redesigned) */}
			<PageSection id="how-it-works" className="relative overflow-hidden bg-bukket-soft/20">
				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

				<div className="relative z-10 space-y-12">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How Bukket Works</h2>
						<p className="mt-4 text-bukket-text-muted max-w-2xl mx-auto">
							Expand. Ignite. Lift. Inhale. The physics of perfect smoke.
						</p>
					</div>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								step: '01',
								title: 'Fill & Pack',
								text: 'Load your bowl. The intuitive design makes setup effortless.',
							},
							{
								step: '02',
								title: 'Ignite',
								text: 'Light as you lift. Gravity does the heavy lifting for you.',
							},
							{
								step: '03',
								title: 'Connect',
								text: 'Swap to the mouthpiece. No water, no mess, just physics.',
							},
							{
								step: '04',
								title: 'Inhale',
								text: 'Enjoy the smoothest, coolest draw you have ever experienced.',
							},
						].map((item, index) => (
							<motion.div
								key={item.step}
								className="group relative overflow-hidden rounded-bukket-lg border border-bukket-border-subtle bg-bukket-surface/40 p-6 backdrop-blur-sm transition-colors hover:border-bukket-primary/30 hover:bg-bukket-surface/60"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								<div className="mb-4 text-4xl font-bold text-bukket-border-subtle group-hover:text-bukket-primary/20 transition-colors">
									{item.step}
								</div>
								<h3 className="text-lg font-semibold text-bukket-text mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-bukket-text-muted leading-relaxed">
									{item.text}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</PageSection>
		</>
	);
};