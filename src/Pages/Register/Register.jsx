import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="bg-base-200">
			<h2 className="text-center py-5 text-5xl font-bold text-neutral-focus">
				Sign Up
			</h2>
			<div className="flex items-center">
				<div className="card w-full md:w-96 mx-auto mb-8 shadow-2xl bg-base-100">
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
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
