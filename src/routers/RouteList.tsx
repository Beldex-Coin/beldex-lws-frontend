import Login from "../pages/login";
import MyWallet from "../pages/myWallet";
import Terms from "../pages/term";
import Privacy from "../pages/privacy";
import Settings from "../pages/settings";
interface RouteListObj {
    id: string,
    title: string,
    component: any,
    path: string
}

const RouteList: Array<RouteListObj> = [
    {
        id: 'login',
        title: 'Login',
        component: <Login/>,
        path: '/'
    },
    {
        id: 'myWallet',
        title: 'My Wallet',
        component: <MyWallet/>,
        path: '/mywallet'
    },
    {
        id: 'privacy',
        title: 'Privacy',
        component: <Privacy/>,
        path: '/privacy'
    },
    {
        id: 'terms',
        title: 'Terms',
        component: <Terms/>,
        path: '/terms'
    },

    {
        id: 'support',
        title: 'Support',
        component: '',
        path: '/support'
    },
    {
        id: 'website',
        title: 'Website',
        component: '',
        path: '/website'
    },

    {
        id: 'settings',
        title: 'Settings',
        component: <Settings/>,
        path: '/settings'
    }
]

export default RouteList;