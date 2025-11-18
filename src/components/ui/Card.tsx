import React from 'react';
import clsx from 'clsx';

type CardProps = {
	className?: string;
	children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, children }) => {
	return (
		<div
			className={clsx(
				'rounded-bukket-lg border border-bukket-border-subtle bg-bukket-surface/80 shadow-bukket-soft',
				className,
			)}
		>
			{children}
		</div>
	);
};