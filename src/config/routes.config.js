import Loadable from 'react-loadable'
import DelayLoading from '@/components/DelayLoading'

const Home = Loadable({ loader: () => import('../container/Home'), loading: DelayLoading, delay: 500 })

// 路由配置
const routes = [
	{
		path: '/',
		name: '首页',
		icon: "home",
		component: Home,
		exact: true
	}
]
export default routes