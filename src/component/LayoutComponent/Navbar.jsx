import React, { useState } from 'react';
import { HiOutlineBell, HiOutlineUserCircle, HiOutlineTrophy } from "react-icons/hi2";

const Navbar = (props) => {

    const { } = props;

    return (
        <>
            <nav className='h-16 flex px-8 items-center bg-slate-500 text-white justify-between'>

                {/* left side items of the navbar  */}
                <div className='flex flex-row gap-4 justify-center items-center text-2xl'>
                    <HiOutlineTrophy/>
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/14680/14680200.png" width={30} height={30} alt="logo" /> */}
                    <h1>E-Learning</h1>
                </div>

                {/* right side items of the navabar  */}
                <div className=' flex flex-row gap-10 justify-center items-center'>
                    <form>
                        <input type="text" name='search' id='search' className='border rounded-md px-2 py-1' placeholder='Search' />
                    </form>
                    <div className='flex gap-4 justify-center items-center'>
                        <span className='text-3xl'>
                            <HiOutlineBell />
                        </span>
                        <span className='text-3xl'>
                            <HiOutlineUserCircle />
                        </span>
                        {/* <img src="https://cdn-icons-png.flaticon.com/128/3602/3602123.png" className='bg-white rounded-full p-1' alt="icon" width={35} height={15}/> */}
                        {/* <img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" className='bg-white rounded-full p-1' alt="profile" width={35} height={15} /> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

