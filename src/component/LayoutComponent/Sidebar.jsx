import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SIDEBAR_BOTTOM_NAVIGATION_LINKS, SIDEBAR_TOP_NAVIGATION_LINKS } from '../../utils/navigationLinks'
import ListingItems from './ListingItems'


const Sidebar = () => {

    return (
        <>
            <aside className='w-60 p-3 flex flex-col bg-gray-200'>
                {/* upper navigation links  */}
                <div className='flex-1'>
                    {
                        SIDEBAR_TOP_NAVIGATION_LINKS.map((navigation_item) => (
                            <ListingItems navigation_item={navigation_item}/>                            
                        ))
                    }
                </div>

                {/* bottom navigation link  */}
                <div>
                    {
                        SIDEBAR_BOTTOM_NAVIGATION_LINKS.map((navigation_item) => (
                            <ListingItems navigation_item={navigation_item}/>
                        ))
                    }
                </div>
            </aside>
        </>
    )
}

export default Sidebar