import { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const MyCart = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('http://localhost:9000/cart')
			.then((res) => res.json())
			.then((data) => setCart(data));
	}, [cart]);

	const handleDeleteFromCart = (id) => {
		fetch(`http://localhost:9000/cart/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					alert('Successfully Removed from Cart!!');
				}
			});
	};

	return (
		<>
			<div>
				<h2 className="text-center text-5xl text-neutral-focus font-semibold mt-5">
					My Cart
				</h2>
			</div>
			<div className="overflow-x-auto mx-10 my-10 border border-neutral-focus">
				<table className="table table-zebra">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((p, i) => (
							<tr key={i}>
								<th>{i + 1}</th>
								<td>{p.name}</td>
								<td>${p.price}</td>
								<td>
									<button
										onClick={() =>
											handleDeleteFromCart(p.id)
										}
									>
										<RiDeleteBin5Line className="text-red-500" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex justify-end mx-10 mb-5">
				<Link to={'/checkout'}>
					<button className="btn btn-outline">Checkout</button>
				</Link>
			</div>
		</>
	);
};

export default MyCart;
