import React from 'react';

type PageSectionProps = {
	id?: string;
	className?: string;
	children: React.ReactNode;
};

export const PageSection: React.FC<PageSectionProps> = ({
	id,
	className,
	children,
}) => {
	return (
		<section id={id} className={className}>
			<div className="bukket-container py-10 sm:py-14">{children}</div>
		</section>
	);
};