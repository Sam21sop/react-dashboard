import React, { useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'


const navigationData = [
  { title: 'Home', href: '/react-dashboard' },
  { title: 'Courses', href: 'courses' },
  { title: 'Testimonial', href: 'testimonial' },
  { title: 'Mentor', href: 'mentor' },
];


const LandingPage = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className='h-screen w-screen flex flex-col'>
        
        {/* nav component  */}
        <nav className="bg-white border-gray-50">
                <div className="p-4 flex justify-between items-center bg-gray-100 h-16">
                    <div className="flex gap-2 items-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/3115/3115090.png" width="40" height="40" alt="logo" />
                        <h2>My Career</h2>
                    </div>

                    <div
                        className={`
                            ${showMenu ?
                                'absolute w-full flex gap-4 flex-col bg-white top-[8%] left-0 p-4 min-h-[25vh]' :
                                'hidden sm:flex gap-4 items-center '
                            } 
                        `}
                    >
                        {
                            navigationData.map((data) => (
                                <NavLink
                                    to={data.href}
                                    key={data.href}
                                    className={`hover:underline hover:text-blue-500 focus:font-semibold focus:text-blue-500 focus:underline`}
                                >
                                    {data.title}
                                </NavLink>
                            ))
                        }
                    </div>


                    <div className="flex gap-6 items-center">
                        <Link
                            to={'login'}
                            className="text-md text-black bg-gray-50  hover:bg-green-50 py-1 px-4 border rounded-md"
                        >
                            Sign In
                        </Link>
                        <button onClick={() => setShowMenu(!showMenu)} className="sm:hidden text-xl h-16 w-6 cursor-pointer">
                            {showMenu ? "X" : '='}
                        </button>
                    </div>
                </div>
            </nav>

        {/* outlet component  */}
        <main className=''>
          <Outlet />
        </main>
      </div>
    </>
  )
}



export default LandingPage