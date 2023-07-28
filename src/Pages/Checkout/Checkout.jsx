import { useEffect, useState } from 'react';

const Checkout = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch('http://localhost:9000/cart')
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	const totalPrice = items.reduce((total, item) => total + item.price, 0);

	return (
		<>
			<div>
				<h2 className="text-center text-5xl text-neutral-focus font-semibold mt-5">
					Checkout
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
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item, i) => (
							<tr key={i}>
								<th>{i + 1}</th>
								<td>{item.name}</td>
								<td>${item.price}</td>
								<td>1</td>
							</tr>
						))}
						<tr>
							<td className="text-blue-800">
								Total Price: ${totalPrice.toFixed(2)}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex justify-end mx-10 mb-5">
				<button className="btn btn-outline">Buy Now</button>
			</div>
		</>
	);
};

export default Checkout;
