import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
	return (
		<section className="relative min-h-[90vh] overflow-hidden flex items-center">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-bukket-bg">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bukket-surface via-bukket-bg to-bukket-bg opacity-80" />
				<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-bukket-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
				<div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-bukket-accent/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
			</div>

			{/* Grid Pattern Overlay */}
			<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

			<div className="bukket-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
				{/* Text Content */}
				<div className="space-y-8 text-center lg:text-left">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<span className="inline-flex items-center px-4 py-1.5 rounded-full border border-bukket-primary/30 bg-bukket-primary/10 text-bukket-primary-glow text-xs font-medium tracking-wider uppercase backdrop-blur-sm">
							Gravity Perfected
						</span>
					</motion.div>

					<motion.h1
						className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						Elevate Your <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-bukket-text via-bukket-text to-bukket-text-muted">
							Ritual
						</span>
					</motion.h1>

					<motion.p
						className="text-lg sm:text-xl text-bukket-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Experience the cleanest draw with our waterless gravity system.
						Engineered for density, cooled by expansion, designed for you.
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<Button size="lg" onClick={() => window.location.href = '/products'}>
							Shop Collection
						</Button>
						<Button variant="secondary" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
							How it Works
						</Button>
					</motion.div>

					<motion.div
						className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-bukket-text-muted/60"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						<div className="flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-bukket-primary" />
							<span>Waterless</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-bukket-primary" />
							<span>Dishwasher Safe</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-1 h-1 rounded-full bg-bukket-primary" />
							<span>Lifetime Warranty</span>
						</div>
					</motion.div>
				</div>

				{/* Visual/Product Placeholder */}
				<motion.div
					className="relative h-[500px] w-full flex items-center justify-center perspective-1000"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{/* Abstract Gravity Chamber Representation */}
					<div className="relative w-80 h-[400px] animate-float-slow">
						{/* Glass Cylinder */}
						<div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
							{/* Inner Glow */}
							<div className="absolute inset-0 bg-gradient-to-tr from-bukket-primary/20 via-transparent to-bukket-accent/10" />

							{/* Smoke/Gravity Effect */}
							<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-bukket-soft to-transparent opacity-80" />

							{/* Floating Particles */}
							{[...Array(5)].map((_, i) => (
								<motion.div
									key={i}
									className="absolute w-2 h-2 rounded-full bg-white/20"
									initial={{ x: Math.random() * 300, y: 400 }}
									animate={{ y: -50, opacity: [0, 1, 0] }}
									transition={{
										duration: 3 + Math.random() * 2,
										repeat: Infinity,
										delay: Math.random() * 2,
										ease: "linear"
									}}
									style={{ left: `${Math.random() * 100}%` }}
								/>
							))}
						</div>

						{/* Rings */}
						<div className="absolute -inset-4 border border-bukket-primary/20 rounded-[48px] -z-10" />
						<div className="absolute -inset-8 border border-bukket-primary/10 rounded-[56px] -z-20" />
					</div>
				</motion.div>
			</div>
		</section>
	);
};