import { useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div className="px-10">
			<div className="mt-10">
				<h1 className="text-5xl font-semibold text-neutral-focus mb-5">
					Find Your Choice
				</h1>
				<div className="divider"></div>
			</div>
			<div className="grid grid-cols-3 gap-8 py-5">
				{products.map((product, index) => (
					<div
						key={index}
						className="card full bg-base-100 shadow-xl"
					>
						<figure>
							<img
								className="w-full h-72"
								src={product.image}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{product.name}</h2>
							<p>{product.description}</p>
							<div className="card-actions justify-between items-center">
								<div className="badge badge-outline">
									${product.price}
								</div>
								<div className="badge badge-outline">
									{product.rating}
								</div>
								<Link to="/productDetail">
									<button className="btn btn-outline btn-sm">
										<p>Add To Cart</p>
										<HiShoppingCart></HiShoppingCart>
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
