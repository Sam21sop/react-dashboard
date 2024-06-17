import React from 'react';
import herOne from '../../assets/hero04.png'

const Testimonial = () => {
  return (
    <section className="grid sm:grid-cols-3 grid-cols-1 place-content-center place-items-center">
      <div className='p-10 col-span-1'>
          <img src={herOne} className='border rounded-lg' width={400} alt="hero img" />
      </div>

      <div className='col-span-2 p-4 '>
        <div className="py-10 px-4">
          <h1 className=" py-4 sm:text-3xl md:text-5xl text-3xl font-bold capitalize">Make your learning enjoyable</h1>
          <p className="sm:text-lg text-sm">Set the way of learning according to your wishes with some of the benefits that you get us, so you on enjoy the lessons that we provide.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 p-2">
          <div className="flex p-2 gap-2 place-content-center shadow-xl place-items-center bg-white rounded-lg ">
            <div>
              <img width="60" height="100" src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png" alt="icon" />
            </div>
            <div>
              <h1 className='text-xl font-bold'>Easy Accessible</h1>
              <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt.</p>
            </div>
          </div>

          <div className="flex p-2 gap-2 place-content-center shadow-xl place-items-center bg-white rounded-lg ">
            <div>
              <img width="60" height="100" src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png" alt="icon" />
            </div>
            <div>
              <h1 className='text-xl font-bold'>Flexible study time</h1>
              <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt.</p>
            </div>
          </div>

          <div className="flex p-2  gap-2 place-content-center shadow-xl place-items-center bg-white rounded-lg ">
            <div>
              <img width="60" height="100" src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png" alt="icon" />
            </div>
            <div>
              <h1 className='text-xl font-bold'>More affordable cost</h1>
              <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt.</p>
            </div>
          </div>

          <div className="flex p-2 gap-2 place-content-center shadow-xl place-items-center bg-white rounded-lg ">
            <div>
              <img width="60" height="100" src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png" alt="icon" />
            </div>
            <div>
              <h1 className='text-xl font-bold'>1:1 sessions</h1>
              <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, deserunt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial