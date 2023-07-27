import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FiShoppingBag } from 'react-icons/fi';
import { BsCartCheck } from 'react-icons/bs';

const Dashboard = () => {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center mt-5">
				<Outlet></Outlet>
				<label
					htmlFor="my-drawer-2"
					className="btn btn-outline drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<div className="p-4 w-80 h-full bg-neutral text-white">
					{/* Sidebar content here */}
					<h2 className="text-center text-3xl font-bold mb-5">
						Admin Dashboard
					</h2>

					<ul className="text-white px-5 space-y-5">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? 'pb-1 border-b-2 border-white text-white rounded-md flex items-center gap-3'
										: 'hover:text-slate-300 flex items-center gap-3'
								}
							>
								<FaHome />
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/overview"
								className={({ isActive }) =>
									isActive
										? 'pb-1 border-b-2 border-white text-white rounded-md flex items-center gap-3'
										: 'hover:text-slate-300 flex items-center gap-3'
								}
							>
								<MdOutlineDashboardCustomize />
								Overview
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/productList"
								className={({ isActive }) =>
									isActive
										? 'pb-1 border-b-2 border-white text-white rounded-md flex items-center gap-3'
										: 'hover:text-slate-300 flex items-center gap-3'
								}
							>
								<FiShoppingBag />
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/orders"
								className={({ isActive }) =>
									isActive
										? 'pb-1 border-b-2 border-white text-white rounded-md flex items-center gap-3'
										: 'hover:text-slate-300 flex items-center gap-3'
								}
							>
								<BsCartCheck />
								Orders
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
