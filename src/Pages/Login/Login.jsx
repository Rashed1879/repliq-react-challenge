import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		setEmail(email);
		setPassword(password);
		const loginData = { email, password };
		if (isValidate()) {
			fetch(`http://localhost:9000/login`, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(loginData),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						alert('Login Successfull');
						navigate('/');
					}
				});
		}
	};

	const isValidate = () => {
		let result = true;
		if (email === ' ' || email === null) {
			result = false;
			alert('Please enter email');
		}
		if (password === ' ' || password === null) {
			result = false;
			alert('Please enter password');
		}
		return result;
	};

	return (
		<div className="bg-base-200">
			<h2 className="text-center py-5 text-5xl font-bold text-neutral-focus">
				Sign In
			</h2>
			<div className="flex items-center">
				<div className="card w-full md:w-96 mx-auto mb-8 shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
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
