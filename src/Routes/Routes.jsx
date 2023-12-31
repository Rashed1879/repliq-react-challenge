import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Products from '../Pages/Products/Products';
import Dashboard from '../Layouts/Dashboard';
import Overview from '../Pages/Dashboard/Overview/Overview';
import ProductDetail from '../Pages/Products/productDetail';
import Orders from '../Pages/Dashboard/Orders/Orders';
import ProductList from '../Pages/Dashboard/ProductList/ProductList';
import MyCart from '../Pages/MyCart/MyCart';
import Checkout from '../Pages/Checkout/Checkout';
import AddItem from '../Pages/Dashboard/AddItem/AddItem';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: 'login',
				element: <Login></Login>,
			},
			{
				path: 'register',
				element: <Register></Register>,
			},
			{
				path: 'products',
				element: <Products></Products>,
			},
			{
				path: 'productDetail/:id',
				element: <ProductDetail></ProductDetail>,
				loader: ({ params }) =>
					fetch(`http://localhost:9000/products/${params.id}`),
			},
			{
				path: 'myCart',
				element: <MyCart></MyCart>,
			},
			{
				path: 'checkout',
				element: <Checkout></Checkout>,
			},
		],
	},

	{
		path: 'dashboard',
		element: <Dashboard></Dashboard>,
		children: [
			{
				path: 'overview',
				element: <Overview></Overview>,
			},
			{
				path: 'orders',
				element: <Orders></Orders>,
			},
			{
				path: 'productList',
				element: <ProductList></ProductList>,
			},
			{
				path: 'additem',
				element: <AddItem></AddItem>,
			},
		],
	},
]);
