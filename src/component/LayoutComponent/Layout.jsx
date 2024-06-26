import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = () => {

    return (
        <>
            <div className='flex flex-col h-screen w-screen overflow-hidden'>
                {/* header component navbar  */}
                <Navbar />

                <div className='flex flex-row h-full w-full'>
                    {/* side bar component  */}
                    <Sidebar />

                    {/* main section where all changes will reflected  */}
                    <main className='w-full h-full bg-gradient-to-br from-sky-200 to-yellow-100'>
                        <Outlet />
                    </main>
                </div>

                {/* footer component  */}
                <Footer />
            </div>
        </>
    )
}

export default Layout