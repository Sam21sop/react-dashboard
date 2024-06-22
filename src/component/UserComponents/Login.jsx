import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginFormHandler = (event) => {
    event.preventDefault();
    console.log('login form submitted successfully.');
    console.table({email, password })
    navigate('/react-dashboard/user')
  }

  return (
    <>
      <div className='grid grid-cols-1 place-content-center place-items-center h-full'>
        <div className='flex flex-col justify-center items-center bg-white md:w-1/4 sm:w-1/5 rounded-t-xl px-10 py-2 shadow-xl'>
          <h1 className='text-3xl py-8 font-bold'>Login</h1>
          <form onSubmit={loginFormHandler} className='w-full h-full'>
            
            <div className='flex flex-col py-3 gap-2'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder='email'
                name='email'
                className='rounded-md text-gray-800 p-2 border border-gray-300 shadow'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col py-3 gap-2'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder='password'
                name='password  '
                className='rounded-md text-gray-800 p-2 border border-gray-300 shadow'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex justify-start py-4'>
              <p className='text-sm text-gray-800'>
                don't know password ? &nbsp;
                <NavLink to={'/react-dashboard/forgot-password'} className='font-semibold underline text-blue-500'>
                  Reset Password
                </NavLink>
              </p>
            </div>

            <div className='flex justify-center py-2'>
              <button type='submit' className='text-center px-5 py-2 bg-purple-700 rounded-md text-white'>Login To Account</button>
            </div>
          </form>

          <div className='flex justify-end py-2'>
            <p className='text-sm text-gray-800'>
              Don't have account? &nbsp;
              <NavLink to={'/react-dashboard/register'} className='font-semibold underline text-blue-500'>
                Create Account
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login