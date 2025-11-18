import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
	return (
		<footer className="mt-12 border-t border-bukket-border-subtle">
			<div className="bukket-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-bukket-text-soft sm:flex-row sm:text-sm">
				<p>© {new Date().getFullYear()} Bukket. All rights reserved.</p>
				<div className="flex gap-4">
					<Link to="#" className="hover:text-bukket-text">
						Shipping & Returns
					</Link>
					<Link to="#" className="hover:text-bukket-text">
						Support
					</Link>
					<Link to="#" className="hover:text-bukket-text">
						Privacy
					</Link>
				</div>
			</div>
		</footer>
	);
};