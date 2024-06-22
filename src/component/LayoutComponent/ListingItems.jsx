import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const ListingItems = (props) => {

    const { navigation_item } = props;
    const { pathname } = useLocation();

    return (
        <>
            <div
                key={navigation_item.key}
                className={`
                                    ${pathname === navigation_item.path ?
                        'flex font-medium px-3 py-1 items-center gap-2 bg-gray-500 rounded-sm text-white' :
                        'flex font-medium px-3 py-1 items-center gap-2'
                    }`
                }
            >
                <span className='text-xl'>
                    {navigation_item.icon}
                </span>
                <NavLink to={navigation_item.path}>
                    {navigation_item.lable}
                </NavLink>
            </div>

        </>
    )
}

export default ListingItems