import { useParams } from 'react-router-dom';

export const ProductDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<div className="bukket-container py-10">
			<h1 className="mb-4 text-2xl font-semibold">Product detail</h1>
			<p className="text-sm text-bukket-text-soft">
				Product detail for <span className="font-mono">{id}</span> will go here.
			</p>
		</div>
	);
};
