import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Order from './components/Order.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'
import Prodetails from './components/Prodetails.vue'
import Pay from './components/Pay.vue'
import ComfrimOrder from './components/ComfrimOrder.vue'
import Address from './components/Address.vue'
import User from './components/User.vue'
import OrderDetails from './components/OrderDetails.vue'
import ShopCart from './components/ShopCart.vue'

export default[
	{
		path:'/home',
		component:Home
	},
	{
		path:'/product',
		component:Product
	},
	{
		path:'/order',
		component:Order
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/reg',
		component:Reg
	},
	{
		path:'/prodetails',
		component:Prodetails
	},
	{
		path:"/pay",
		component:Pay
	},
	{
		path:'/comfrimOrder',
		component:ComfrimOrder
	},
	{
		path:'/address',
		component:Address
	},
	{
		path:'/user',
		component:User
	},
	{
		path:'/orderDetails',
		component:OrderDetails
	},
	{
		path:'/shopCart',
		component:ShopCart
	},
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'*',
		redirect: '/home'
	}
];