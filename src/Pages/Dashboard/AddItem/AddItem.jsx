const AddItem = () => {
	const handleAddItem = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.pname.value;
		const image = form.image.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const description = form.description.value;
		const data = { name, image, price, rating, description };

		fetch('http://localhost:9000/products', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					form.reset();
					alert('Item Added Successfully');
				}
			});
	};

	return (
		<div className="w-3/4">
			<h2 className="text-center text-5xl font-semibold text-neutral-focus mb-4">
				Add Product
			</h2>
			<form
				onSubmit={handleAddItem}
				className="w-full border p-10 rounded-lg bg-base-200"
			>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Product Name</span>
					</label>
					<input
						type="text"
						name="pname"
						placeholder="Product Name"
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Image Url</span>
					</label>
					<input
						type="text"
						name="image"
						placeholder="Image Url of this product"
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Price</span>
					</label>
					<input
						type="number"
						name="price"
						step="0.01"
						min="0"
						placeholder="Price Of this product"
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Rating</span>
					</label>
					<input
						type="number"
						name="rating"
						step="0.01"
						min="0"
						placeholder="Rating Of this product"
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Description</span>
					</label>
					<textarea
						className="textarea textarea-bordered"
						placeholder="Describe Your Product"
						name="description"
					></textarea>
				</div>
				<div className="form-control mt-5">
					<button type="submit" className="btn btn-outline w-32">
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddItem;
