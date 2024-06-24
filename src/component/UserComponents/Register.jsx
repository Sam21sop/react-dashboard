import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccountHandler = (event) => {
    event.preventDefault();
    console.log("form submitted successfully");
    console.table({username, email, password})
    navigate('/react-dashboard/login');
  }

  return (
    <>
      <div className='grid grid-cols-1 place-content-center place-items-center h-full'>
        <div className='flex flex-col justify-center items-center bg-white md:w-1/4 sm:w-1/5  rounded-t-xl px-2 py-4 shadow-xl'>
          <h1 className='text-3xl font-semibold py-4 text-center'>Create Account</h1>
          <form onSubmit={createAccountHandler} className=''>
            <div className='flex flex-col py-3 gap-4'>
              <label htmlFor="username" className=''>UserName</label>
              <input
                type="text"
                placeholder='username'
                name='username'
                className='rounded-md text-gray-800 p-2 border border-gray-300 shadow'
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col py-3'>
              <label className='py-2 px-1' htmlFor="email">Email</label>
              <input
                type="email"
                placeholder='email'
                name='email'
                className='px-3 py-2 rounded-md border border-gray-300'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col py-6'>
              <label className='py-2 px-1' htmlFor="password">Password</label>
              <input
                type="password"
                placeholder='password'
                name='password  '
                className='px-3 py-2 rounded-md border border-gray-300'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='flex justify-center py-2'>
              <button type='submit' className='text-center px-5 py-2 bg-purple-700 rounded-md text-white'>Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register