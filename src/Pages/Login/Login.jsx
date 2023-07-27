import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="bg-base-200">
			<h2 className="text-center py-5 text-5xl font-bold text-neutral-focus">
				Sign In
			</h2>
			<div className="flex items-center">
				<div className="card w-full md:w-96 mx-auto mb-8 shadow-2xl bg-base-100">
					<form className="card-body">
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
								New to this Website?{' '}
								<Link
									className="underline text-info font-bold"
									to="/register"
								>
									Please Register
								</Link>
							</p>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-outline">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
