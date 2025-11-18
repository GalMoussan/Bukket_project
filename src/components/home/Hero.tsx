import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
	return (
		<section className="relative overflow-hidden pb-12 pt-10 sm:pb-20 sm:pt-16">
			<div className="pointer-events-none absolute inset-0 opacity-40">
				<div className="bukket-container">
					<div className="h-64 w-64 rounded-full bg-bukket-primary/10 blur-3xl" />
				</div>
			</div>

			<div className="bukket-container relative flex flex-col gap-10 lg:flex-row lg:items-center">
				<div className="max-w-xl space-y-6">
					<motion.p
						className="inline-flex items-center rounded-bukket-pill border border-bukket-border-subtle bg-bukket-soft/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-bukket-text-soft"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.05, duration: 0.4 }}
					>
						Effortless gravity · Everyday ritual
					</motion.p>

					<motion.h1
						className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.12, duration: 0.45 }}
					>
						Meet <span className="text-bukket-primary">Bukket</span>. Gravity,
						perfected.
					</motion.h1>

					<motion.p
						className="max-w-lg text-sm text-bukket-text-soft sm:text-base"
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.18, duration: 0.45 }}
					>
						A waterless gravity lung designed for smooth, dense pulls with zero
						mess. Minimal form, maximum function, engineered for your nightly
						ritual.
					</motion.p>

					<motion.div
						className="flex flex-wrap items-center gap-3"
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.24, duration: 0.45 }}
					>
						<Button
							onClick={() => {
								window.location.href = '/products';
							}}
						>
							Shop Bukket
						</Button>
						<Button
							variant="secondary"
							size="md"
							onClick={() => {
								document
									.getElementById('how-it-works')
									?.scrollIntoView({ behavior: 'smooth' });
							}}
						>
							How it works
						</Button>
					</motion.div>

					<motion.div
						className="flex flex-wrap gap-4 text-[11px] text-bukket-text-soft"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.4 }}
					>
						<span>Waterless design</span>
						<span>Dishwasher safe</span>
						<span>Carry-anywhere form factor</span>
					</motion.div>
				</div>

				<motion.div
					className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 lg:ml-auto lg:mr-0"
					initial={{ opacity: 0, y: 20, scale: 0.96 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ delay: 0.28, duration: 0.45 }}
				>
					<div className="absolute inset-0 rounded-[32px] border border-bukket-border-subtle bg-gradient-to-b from-bukket-soft to-bukket-bg shadow-bukket-soft" />
					<motion.div
						className="absolute inset-4 rounded-[26px] bg-gradient-to-tr from-bukket-primary/10 via-bukket-bg to-bukket-soft"
						animate={{ y: [0, -6, 0] }}
						transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
					/>
					<div className="absolute inset-6 flex items-center justify-center">
						<div className="flex h-full w-full items-center justify-center rounded-[24px] border border-bukket-border-subtle/60 bg-bukket-bg/50">
							<span className="text-xs text-bukket-text-soft">
								Product render / image placeholder
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};