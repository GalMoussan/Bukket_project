import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const BananaPage: React.FC = () => {
	const TITLE_PREFIX = "The";
	const TITLE_SUFFIX = "Bukket shop";

	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 200]);
	const y2 = useTransform(scrollY, [0, 500], [0, -150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	return (
		<div className="relative min-h-screen overflow-hidden bg-black text-yellow-400 font-sans selection:bg-yellow-400 selection:text-black">
			{/* Background Noise & Grid */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
			</div>

			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center perspective-1000">
				<motion.div
					className="relative z-10 text-center"
					style={{ y: y1, opacity }}
				>
					<motion.h1
						className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, ease: "circOut" }}
					>
						{TITLE_PREFIX} <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600">{TITLE_SUFFIX}</span>
					</motion.h1>
					<motion.p
						className="mt-4 text-xl md:text-2xl font-mono text-yellow-200/80 tracking-widest"
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						POTASSIUM. OPTIMIZED.
					</motion.p>
				</motion.div>

				{/* Floating Nano Banana Image */}
				<motion.div
					className="absolute inset-0 z-0 flex items-center justify-center"
					style={{ y: y2 }}
				>
					<motion.div
						className="relative w-[80vw] max-w-[600px] aspect-square"
						initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						{/* Glow Effect */}
						<div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full animate-pulse-slow" />

						<img
							src="/images/nano-banana-hero.webp"
							alt="Nano Banana"
							className="relative w-full h-full object-contain drop-shadow-[0_0_50px_rgba(234,179,8,0.5)]"
						/>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					className="absolute bottom-10 left-1/2 -translate-x-1/2 text-yellow-500/50 flex flex-col items-center gap-2"
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<span className="text-xs font-mono uppercase">Initialize</span>
					<div className="w-px h-12 bg-gradient-to-b from-yellow-500/0 via-yellow-500 to-yellow-500/0" />
				</motion.div>
			</section>

			{/* Content Section */}
			<section className="relative z-10 py-32 px-6">
				<div className="max-w-4xl mx-auto space-y-32">

					{/* Feature 1 */}
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<h2 className="text-4xl font-bold mb-6 text-white">Molecular Perfection</h2>
							<p className="text-lg text-gray-400 leading-relaxed">
								Engineered at the atomic level. The Nano Banana eliminates the peel friction coefficient, delivering 100% pure fruit efficiency. No strings attached. Literally.
							</p>
						</motion.div>
						<motion.div
							className="h-64 rounded-2xl bg-gradient-to-br from-yellow-900/20 to-black border border-yellow-500/20 flex items-center justify-center"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
						>
							<span className="font-mono text-yellow-500 text-6xl">99.9%</span>
						</motion.div>
					</div>

					{/* Feature 2 */}
					<div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
						<motion.div
							className="order-2 md:order-1 h-64 rounded-2xl bg-gradient-to-bl from-yellow-900/20 to-black border border-yellow-500/20 flex items-center justify-center"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
						>
							<div className="w-32 h-32 rounded-full border-2 border-yellow-500/50 flex items-center justify-center animate-spin-slow">
								<div className="w-24 h-24 rounded-full border-2 border-dashed border-yellow-500/30" />
							</div>
						</motion.div>
						<motion.div
							className="order-1 md:order-2"
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<h2 className="text-4xl font-bold mb-6 text-white">Quantum Ripening</h2>
							<p className="text-lg text-gray-400 leading-relaxed">
								Stuck with green bananas? Not anymore. Our quantum entanglement technology ensures your Nano Banana is always at peak sweetness, existing in a superposition of perfect ripeness.
							</p>
						</motion.div>
					</div>

					{/* CTA */}
					<motion.div
						className="text-center pt-20"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">
							FUTURE IS YELLOW
						</h2>
						<Button
							size="lg"
							className="bg-yellow-500 text-black hover:bg-yellow-400 border-none shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] text-lg px-12 py-6 rounded-none clip-path-polygon"
							onClick={() => window.location.href = '/products'}
						>
							ACQUIRE NANO BANANA
						</Button>
					</motion.div>

				</div>
			</section>
		</div>
	);
};
