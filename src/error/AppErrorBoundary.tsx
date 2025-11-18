import React from 'react';
import { logClientError } from '../lib/errorLogging';

type AppErrorBoundaryState = {
	hasError: boolean;
};

type AppErrorBoundaryProps = {
	children: React.ReactNode;
};

export class AppErrorBoundary extends React.Component<
	AppErrorBoundaryProps,
	AppErrorBoundaryState
> {
	state: AppErrorBoundaryState = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: unknown, info: unknown) {
		logClientError(error, info);
	}

	handleReload = () => {
		window.location.href = '/';
	};

	render() {
		if (this.state.hasError) {
			return (
				<div className="flex min-h-screen items-center justify-center bg-bukket-bg">
					<div className="bukket-container text-center">
						<h1 className="mb-4 text-2xl sm:text-3xl font-semibold">
							Something went wrong.
						</h1>
						<p className="mb-6 text-bukket-text-soft">
							We’re already on it. Try returning to the homepage.
						</p>
						<button
							onClick={this.handleReload}
							className="inline-flex items-center justify-center rounded-bukket-pill bg-bukket-primary px-6 py-2 text-sm font-medium text-bukket-bg hover:bg-bukket-primary-soft transition-colors"
						>
							Go to homepage
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}