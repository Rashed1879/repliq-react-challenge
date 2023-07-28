import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const data = { name, email, password };

		fetch('http://localhost:9000/register', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.accessToken);
				alert('Registration Successfull');
				navigate('/login');
			})
			.catch((err) => {
				alert(`Failed : ${err.message}`);
			});
	};

	return (
		<div className="bg-base-200">
			<h2 className="text-center py-5 text-5xl font-bold text-neutral-focus">
				Sign Up
			</h2>
			<div className="flex items-center">
				<div className="card w-full md:w-96 mx-auto mb-8 shadow-2xl bg-base-100">
					<form className="card-body" onSubmit={handleRegister}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="Enter Your Email"
								name="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								name="password"
								className="input input-bordered"
								required
							/>
							<p className="mt-2">
								Already have an account?{' '}
								<Link
									className="underline text-info font-bold"
									to="/login"
								>
									Please Login
								</Link>
							</p>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-outline">
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
