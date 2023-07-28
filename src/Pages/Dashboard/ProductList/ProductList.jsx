import { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:9000/products')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div>
			<h2 className="text-center mb-5 text-3xl">Products</h2>
			<div className="overflow-x-auto">
				<table className="table border-2 border-black">
					{/* head */}
					<thead className="bg-base-200 text-black">
						<tr>
							<th>#</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Rating</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, index) => (
							<tr key={product.id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src={product.image}
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">
												{product.name}
											</div>
										</div>
									</div>
								</td>
								<td>${product.price}</td>
								<td>{product.rating}</td>
								<th title="View Details">
									<Link to={`/productDetail/${product.id}`}>
										<button className="btn btn-sm">
											<FcViewDetails />
										</button>
									</Link>
								</th>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex justify-end my-5">
					<Link to={'/dashboard/additem'}>
						<button className="btn btn-sm btn-outline">
							Add Item
							<MdAdd />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
