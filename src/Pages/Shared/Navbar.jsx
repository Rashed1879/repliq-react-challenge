import { Link, NavLink } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Navbar = () => {
	return (
		<div className="navbar bg-neutral text-white px-10">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52"
					>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/products">Products</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
					</ul>
				</div>
				<a className="normal-case text-xl">E-Commerce</a>
			</div>
			<div className="navbar-center text-white hidden lg:flex">
				<ul className="flex items-center space-x-4">
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'pb-1 px-1 border-b-2 border-white rounded-md'
									: 'hover:text-slate-300'
							}
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'pb-1 px-1 border-b-2 border-white rounded-md'
									: 'hover:text-slate-300'
							}
							to="/products"
						>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? 'pb-1 px-1 border-b-2 border-white rounded-md'
									: 'hover:text-slate-300'
							}
							to="/dashboard"
						>
							Dashboard
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end space-x-4">
				<Link to={'/myCart'} className="flex items-center gap-2">
					<p>My Cart</p> <HiOutlineShoppingCart />
				</Link>
				<Link to="/login">Sign In</Link>
				<Link to="/register">Sign Up</Link>
			</div>
		</div>
	);
};

export default Navbar;
