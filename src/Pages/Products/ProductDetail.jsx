import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
	const productData = useLoaderData();
	const { name, image, price, rating, description } = productData;

	const handleAddtoCart = () => {
		fetch('http://localhost:9000/cart', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(productData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.id) {
					alert('Added To Cart!!');
				}
			});
	};

	return (
		<div className="card lg:card-side w-3/4 bg-base-200 shadow-xl mx-auto my-10">
			<figure>
				<img src={image} alt="Album" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{description}</p>
				<p>Price: ${price}</p>
				<p>Rating: {rating}</p>
				<p>Limited Stock!! Add to your card for order.</p>
				<div className="card-actions justify-end">
					<button
						onClick={handleAddtoCart}
						className="btn btn-outline"
					>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
