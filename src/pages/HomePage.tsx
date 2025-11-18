import { Hero } from '../components/home/Hero';
import { PageSection } from '../components/layout/PageSection';

export const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<PageSection id="how-it-works" className="bg-bukket-soft/30">
				<div className="space-y-6">
					<h2 className="text-xl font-semibold sm:text-2xl">How Bukket works</h2>
					<p className="max-w-2xl text-sm text-bukket-text-soft sm:text-base">
						Expand. Ignite. Lift. Inhale. Bukket’s waterless gravity system cools
						smoke as it expands, giving you dense, smooth draws without the cleanup
						or the mess.
					</p>
					<ol className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								step: 'Step 1',
								title: 'Fill & pack',
								text: 'Load your bowl and get Bukket ready with a simple, intuitive setup.',
							},
							{
								step: 'Step 2',
								title: 'Ignite',
								text: 'Light the bowl as you lift to generate cool, dense smoke.',
							},
							{
								step: 'Step 3',
								title: 'Connect',
								text: 'Swap to the mouthpiece and get ready for the cleanest draw of your night.',
							},
							{
								step: 'Step 4',
								title: 'Inhale',
								text: 'Enjoy smooth, gravity-cooled smoke with minimal effort.',
							},
						].map((item) => (
							<li
								key={item.step}
								className="rounded-bukket-md border border-bukket-border-subtle bg-bukket-surface/80 p-4"
							>
								<span className="text-xs uppercase tracking-[0.2em] text-bukket-text-soft">
									{item.step}
								</span>
								<p className="mt-2 font-medium">{item.title}</p>
								<p className="mt-1 text-xs text-bukket-text-soft">{item.text}</p>
							</li>
						))}
					</ol>
				</div>
			</PageSection>
		</>
	);
};