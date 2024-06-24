import React, { useState } from 'react';
import { HiOutlineCog, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
import { HiOutlineBell, HiOutlineUserCircle, HiOutlineTrophy, HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Link } from 'react-router-dom';


const Navbar = (props) => {

    const { } = props;

    return (
        <>
            <nav className='h-16 flex px-8 items-center bg-gray-100 border-b-2 justify-between'>

                {/* left side items of the navbar  */}
                <div className='flex flex-row gap-4 justify-center items-center text-2xl'>
                    <HiOutlineTrophy />
                    <h1>E-Learning</h1>
                </div>

                {/* right side items of the navabar  */}
                <div className='flex flex-row gap-10 justify-center items-center'>
                    <div className='relative '>
                        <HiOutlineSearch className='absolute text-gray-500 top-1/2 left-3 -translate-y-2' />
                        <input
                            placeholder='Search'
                            className=' 
                                block w-full rounded-md border-2  
                                py-2 px-10 text-sm
                                focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2
                                text-black
                            '
                        />
                    </div>

                    <div className='flex gap-6 justify-center items-center'>
                        <div className=''>
                            <Popover className="relative px-0 ">
                                <PopoverButton className='hover:bg-white hover:text-black hover:rounded-md'>
                                    <HiOutlineBell className='text-3xl px-0' />
                                </PopoverButton>
                                <PopoverBackdrop
                                    transition
                                    className="fixed inset-0 bg-black/10 transition duration-100 ease-out"
                                />
                                <PopoverPanel
                                    anchor="bottom"
                                    transition
                                    className=" bg-white py-2 px-2 w-96 shadow-xl my-4 rounded-md"
                                >
                                    <p className=''>
                                        this is message for the @student from your tutor
                                        this is message for the @student from your tutor
                                        this is message for the @student from your tutor
                                        this is message for the @student from your tutor
                                        this is message for the @student from your tutor
                                        this is message for the @student from your tutor
                                    </p>
                                </PopoverPanel>
                            </Popover>
                        </div>

                        <div className=''>
                            <Popover className="relative">
                                <PopoverButton className='px-0 py-0'>
                                    <HiOutlineUserCircle className='text-3xl' />
                                </PopoverButton>
                                <PopoverBackdrop
                                    transition
                                    className="fixed inset-0 bg-black/15 transition duration-100 ease-out data-[closed]:opacity-0"
                                />
                                <PopoverPanel
                                    anchor="bottom"
                                    transition
                                    className="flex flex-col gap-2 bg-white py-2 px-4 my-4 rounded-md "
                                >
                                    <Link className='flex justify-start hover:bg-gray-200 px-2 py-1 rounded-md items-center gap-2'>
                                        <HiOutlineUser />
                                        <span>
                                            Profile
                                        </span>
                                    </Link>
                                    <Link className='flex justify-start hover:bg-gray-200 px-2 py-1 rounded-md items-center gap-2'>
                                        <HiOutlineCog />
                                        <span>
                                            Settings
                                        </span>
                                    </Link>
                                    <Link className='flex justify-start hover:bg-gray-200 px-2 py-1 rounded-md items-center gap-2'>
                                        <HiOutlineArrowRightStartOnRectangle color="red" />
                                        <span>
                                            Logout
                                        </span>
                                    </Link>
                                </PopoverPanel>
                            </Popover>
                        </div>
                    </div>


                    {/* <div className='flex gap-4 justify-center items-center'>
                        <span className='text-3xl'>
                            
                        </span>
                        <span className='text-3xl'>
                            <HiOutlineUserCircle />
                        </span>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;

