import React from 'react'
import { NavLink } from 'react-router-dom';
import heroImage from '../../assets/hero02.jpeg'

const Home = () => {
  return (
    <>
      <section className="">
        <div className="grid sm:grid-cols-1 sm:mt-20 mt-0 gap-10 ">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="flex flex-col gap-10 place-content-center">
              <div className="">
                <h1 className="text-5xl font-bold px-8 py-6 capitalize">
                  Improve your skill <br/>
                  with different way
                </h1>
              </div>

              <div className="">
                <p className="px-8 text-wrap">
                  Lets take online course to improve your skill in different way, <br />
                  You can set your own study time according to your learning speed. <br /> So
                  You can con study comfortable also absorb tge material easily.
                </p>
              </div>

              <div className="px-6 flex gap-4">
                <NavLink>
                  <button className="text-xl font-semibold bg-gray-700 rounded-md hover:bg-gray-200 hover:text-black px-5 py-2 text-white hover:delay-5000">
                    Get Started
                  </button>
                </NavLink>
                <NavLink>
                  <button className='text-xl font-semibold bg-gray-700 rounded-md hover:bg-gray-200 hover:text-black px-5 py-2 text-white after:content-[">"] after:mx-2'>
                    Watch Demo
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="relative py-6 sm:py-0 px-6">
              <div className="">
                <img className='rounded-xl' width={500} src={heroImage} alt="hero Image" /> 
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-2 grid-cols-2 items-center px-4 py-4">
            <div className="bg-white py-1 rounded-xl text-center shadow-xl border border-gray-200">
              <p className="text-3xl text-orange-500 font-semibold">1M+</p>
              <h4>Students</h4>
            </div>
            <div className="bg-white py-1 rounded-xl text-center shadow-xl border border-gray-200">
              <p className="text-3xl text-orange-500 font-semibold">1+</p>
              <h4>Courses</h4>
            </div>
            <div className="bg-white py-1 rounded-xl text-center shadow-xl border border-gray-200">
              <p className="text-3xl text-orange-500 font-semibold">1:1</p>
              <h4>Session</h4>
            </div>
            <div className="bg-white py-1 rounded-xl text-center shadow-xl border border-gray-200">
              <p className="text-3xl text-orange-500 font-semibold">10+</p>
              <h4>Mentors</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home