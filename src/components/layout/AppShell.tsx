import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const AppShell: React.FC = () => {
	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-b from-bukket-bg via-bukket-bg to-bukket-soft">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};