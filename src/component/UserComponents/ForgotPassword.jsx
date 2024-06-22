import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const forgetPasswordLink = (event) => {
    event.preventDefault();
    console.log(email);
    // send password reset link over the email
    // nofity user
    // navigate to the home within 4 second
  };
  
  return (
    <>
      <div className='flex justify-center items-center h-full w-full sm:flex-col gap-4'>
        <h1 className='text-3xl font-semibold'>Forget Password</h1>
        <form onClick={forgetPasswordLink} className=''>
          <div className='py-4'>
            <input 
              className='px-3 py-2 rounded-lg border border-fuchsia-400' 
              type="email" 
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex justify-center py-2'>
            <button className='text-center px-5 py-2 bg-purple-700 rounded-md text-white' type='submit'>Get Reset Link</button>
          </div>
        </form>
      </div>
    </>
  )
};

export default ForgotPassword;