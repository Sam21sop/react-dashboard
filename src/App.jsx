import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/LandingComponent/Home'
import Login from './component/UserComponents/Login'
import Layout from './component/LayoutComponent/Layout'
import Register from './component/UserComponents/Register'
import ForgotPassword from './component/UserComponents/ForgotPassword'
import PrivateRoute from './component/Private/PrivateRoute'
import DashboardPage from './Pages/DashboardPage/DashboardPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import TransactionPage from './Pages/TransactionPage.jsx/TransactionPage'
import OrderPage from './Pages/OrderPage/OrderPage'
import PageNotFound from './Pages/ErrorPage/PageNotFound'
import Courses from './component/LandingComponent/Courses'
import Testimonial from './component/LandingComponent/Testimonial'
import Mentor from './component/LandingComponent/Mentor'
import LandingPage from './Pages/LandingPage/LandingPage'
import SettingPage from './Pages/SettingsPage/SettingPage'
import HelpAndSupport from './Pages/HelpAndSupportPage/HelpAndSupport'
import Logout from './component/UserComponents/Logout'



const App = () => {

  const router = createBrowserRouter([
    {
      path: '*',
      element: <PageNotFound />
    },
    {
      path: '/react-dashboard',
      element: <LandingPage/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path:'courses',
          element: <Courses />
        },
        {
          path: 'testimonial',
          element: <Testimonial />
        },
        {
          path: 'mentor',
          element: <Mentor />
        },
        {
          path :'login',
          element: <Login />
        },
        {
          path: 'register', 
          element: <Register />
        },
        {
          path: 'forgot-password',
          element: <ForgotPassword />
        }
      ]
    },
    {
      path: '/react-dashboard/user',
      element: (
        <PrivateRoute >
          <Layout />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <DashboardPage />
        },
        {
          path: 'products',
          element: <ProductPage />
        },
        {
          path: 'transactions',
          element: <TransactionPage />
        },
        {
          path: 'orders',
          element: <OrderPage />
        },
        {
          path:'settings',
          element: <SettingPage/>
        },
        {
          path:'supports',
          element:<HelpAndSupport/>
        },
        {
          path:'logout',
          element:<Logout/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App