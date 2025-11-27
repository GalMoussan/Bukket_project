import { Route, Routes } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { HomePage } from '../pages/HomePage';
import { ProductListingPage } from '../pages/ProductListingPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { WishlistPage } from '../pages/WishlistPage';
import { BananaPage } from '../pages/BananaPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const RootRouter: React.FC = () => {
	return (
		<Routes>
			<Route element={<AppShell />}>
				<Route index element={<HomePage />} />
				<Route path="products" element={<ProductListingPage />} />
				<Route path="products/:id" element={<ProductDetailPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="checkout" element={<CheckoutPage />} />
				<Route path="wishlist" element={<WishlistPage />} />
				<Route path="banana" element={<BananaPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};