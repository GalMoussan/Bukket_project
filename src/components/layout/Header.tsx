import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../../stores/useCartStore';
import { useUIStore } from '../../stores/useUIStore';

export const Header: React.FC = () => {
	const cartCount = useCartStore((s) => s.cartCount());
	const { isMobileNavOpen, toggleMobileNav } = useUIStore();

	return (
		<header className="sticky top-0 z-40 border-b border-bukket-border-subtle bg-bukket-bg/80 backdrop-blur">
			<div className="bukket-container flex h-16 items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<span className="text-lg font-semibold tracking-tight">Bukket</span>
					<span className="rounded-full border border-bukket-border-subtle px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-bukket-text-soft">
						Shop
					</span>
				</Link>

				<nav className="hidden items-center gap-8 text-sm text-bukket-text-soft md:flex">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? 'text-bukket-text' : 'hover:text-bukket-text'
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/products"
						className={({ isActive }) =>
							isActive ? 'text-bukket-text' : 'hover:text-bukket-text'
						}
					>
						Shop
					</NavLink>
					<NavLink
						to="/wishlist"
						className={({ isActive }) =>
							isActive ? 'text-bukket-text' : 'hover:text-bukket-text'
						}
					>
						Wishlist
					</NavLink>
					<NavLink
						to="/banana"
						className={({ isActive }) =>
							isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
						}
					>
						Banana
					</NavLink>
				</nav>

				<div className="flex items-center gap-4">
					<Link
						to="/cart"
						className="relative inline-flex items-center justify-center rounded-full border border-bukket-border-subtle px-3 py-1 text-xs hover:border-bukket-primary hover:text-bukket-primary"
					>
						<span>Cart</span>
						{cartCount > 0 && (
							<span className="ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-bukket-primary text-[10px] font-semibold text-bukket-bg">
								{cartCount}
							</span>
						)}
					</Link>

					<button
						className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bukket-border-subtle text-bukket-text-soft hover:border-bukket-primary hover:text-bukket-primary md:hidden"
						onClick={toggleMobileNav}
						aria-label="Toggle navigation"
					>
						<span className="sr-only">Menu</span>
						<div className="space-y-1.5">
							<span className="block h-0.5 w-4 bg-current" />
							<span className="block h-0.5 w-4 bg-current" />
						</div>
					</button>
				</div>
			</div>

			{isMobileNavOpen && (
				<div className="border-t border-bukket-border-subtle bg-bukket-bg md:hidden">
					<div className="bukket-container flex flex-col gap-3 py-3 text-sm text-bukket-text-soft">
						<NavLink to="/" onClick={toggleMobileNav} className="hover:text-bukket-text">
							Home
						</NavLink>
						<NavLink
							to="/products"
							onClick={toggleMobileNav}
							className="hover:text-bukket-text"
						>
							Shop
						</NavLink>
						<NavLink
							to="/wishlist"
							onClick={toggleMobileNav}
							className="hover:text-bukket-text"
						>
							Wishlist
						</NavLink>
					</div>
				</div>
			)}
		</header>
	);
};