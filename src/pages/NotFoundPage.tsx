import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
	return (
		<div className="flex min-height-[60vh] items-center">
			<div className="bukket-container space-y-4 text-center">
				<p className="text-sm uppercase tracking-[0.2em] text-bukket-text-soft">
					404
				</p>
				<h1 className="text-2xl font-semibold sm:text-3xl">
					This page drifted into the gravity well.
				</h1>
				<p className="mx-auto max-w-md text-sm text-bukket-text-soft">
					The page you’re looking for doesn’t exist. Let’s bring you back to the
					ritual.
				</p>
				<Link
					to="/"
					className="inline-flex items-center justify-center rounded-bukket-pill bg-bukket-primary px-5 py-2 text-sm font-medium text-bukket-bg transition-colors hover:bg-bukket-primary-soft"
				>
					Back to homepage
				</Link>
			</div>
		</div>
	);
};