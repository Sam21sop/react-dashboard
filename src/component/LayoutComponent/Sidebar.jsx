import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import ListingItems from './ListingItems'
import { SIDEBAR_BOTTOM_NAVIGATION_LINKS, SIDEBAR_TOP_NAVIGATION_LINKS } from '../../utils/navigationLinks'
import { HiOutlineArrowRightStartOnRectangle } from 'react-icons/hi2'


const Sidebar = () => {

    const navigate = useNavigate();


    const logoutModal = () => {
        // navigate to landing page 
        const confirmation = confirm('Are you sure want to logout ?');
        if (confirmation) { 
            navigate('/react-dashboard/login'); 
            // notify the user 
        };
    };

    return (
        <>
            <aside className='w-60 p-3 flex flex-col bg-gray-100 border-r-2'>
                {/* upper navigation links  */}
                <div className='flex-1'>
                    {
                        SIDEBAR_TOP_NAVIGATION_LINKS.map((navigation_item) => (
                            <ListingItems navigation_item={navigation_item} />
                        ))
                    }
                </div>

                {/* bottom navigation link  */}
                <div>
                    {
                        SIDEBAR_BOTTOM_NAVIGATION_LINKS.map((navigation_item) => (
                            <ListingItems navigation_item={navigation_item} />
                        ))
                    }
                    <div className='flex font-medium px-3 py-1 items-center gap-2'>
                        <span>
                            <HiOutlineArrowRightStartOnRectangle color="red" />
                        </span>
                        <button
                            onClick={logoutModal}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar