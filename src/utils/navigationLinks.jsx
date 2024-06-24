
import { HiOutlineCog, HiOutlineCube, HiOutlineDocumentText, HiOutlineQuestionMarkCircle, HiOutlineShoppingCart, HiOutlineUserRemove, HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
// navbar navigation links 
export const NAVBAR_NAVIGATION_LINKS = [
    {
        key: '',
        lable: '',
        path: '',
        icon: ''
    },
];


// sidebar navigation link
export const SIDEBAR_TOP_NAVIGATION_LINKS = [
    {
        key:'dashboard',
        lable: 'Dashboard',
        icon: <HiOutlineViewGrid/>,
        path: '/react-dashboard/user'
    },
    {
        key:'product',
        lable: 'Products',
        icon: <HiOutlineCube />,
        path: '/react-dashboard/user/products'
    },
    {
        key:'order',
        lable: 'Orders',
        icon: <HiOutlineShoppingCart/>,
        path: '/react-dashboard/user/orders'
    },
    {
        key:'transaction',
        lable: 'Transactions',
        icon: <HiOutlineDocumentText/>,
        path: '/react-dashboard/user/transactions'
    },
];


// sidebar bottom links
export const SIDEBAR_BOTTOM_NAVIGATION_LINKS = [
    {
        key:'setting',
        lable: 'Settings',
        icon: <HiOutlineCog/>,
        path: '/react-dashboard/user/settings'
    },
    {
        key:'support',
        lable: 'Help & Supports',
        icon: <HiOutlineQuestionMarkCircle/>,
        path: '/react-dashboard/user/supports'
    },
    // {
    //     key:'logout',
    //     lable:"Logout",
    //     icon:<HiOutlineArrowRightStartOnRectangle color="red"/>,
    //     path:'/react-dashboard/user/logout'
    // }
]