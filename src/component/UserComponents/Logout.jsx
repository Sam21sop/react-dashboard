import React from 'react'
import { HiOutlineArrowRightStartOnRectangle } from 'react-icons/hi2'

const Logout = () => {


  return (
    <>
      <div className='flex justify-center items-center h-full bg-zinc-400'>
        <div className="p-6 text-center bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:p-5">
          <div className='flex justify-center py-4 text-5xl text-red-500'>
            <HiOutlineArrowRightStartOnRectangle />
          </div>

          <p className="py-6 px-6 text-gray-500 dark:text-gray-300">
            Are you sure you want to logout ?
          </p>

          <div className="flex justify-center items-center space-x-4">
            <button
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 "
            >
              No, cancel
            </button>

            <button
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-500 "
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logout