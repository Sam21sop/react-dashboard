import React from 'react'
import HeroCard from './HeroCard'

const tutorData = [
  {
    tutorId: 1,
    tutorName: "Sopan Bhere",
    tutorDescription: "This tutor have this much axperience in the that that technology. His experties in the specified technology.",
    tutorImage: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    tutorId: 2,
    tutorName: "Sopan Bhere",
    tutorDescription: "This tutor have this much axperience in the that that technology. His experties in the specified technology.",
    tutorImage: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    tutorId: 3,
    tutorName: "Sopan Bhere",
    tutorDescription: "This tutor have this much axperience in the that that technology. His experties in the specified technology.",
    tutorImage: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    tutorId: 4,
    tutorName: "Sopan Bhere",
    tutorDescription: "This tutor have this much axperience in the that that technology. His experties in the specified technology.",
    tutorImage: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  // {
  //   tutorId: 5,
  //   tutorName: "Sopan Bhere",
  //   tutorDescription: "This tutor have this much axperience in the that that technology. His experties in the specified technology.",
  //   tutorImage: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
  // },
  // {
  //   tutorId: 6,
  //   tutorName: "Sopan Bhere",
  //   tutorDescription: "This tutor have this much axperience in the that that technology. His experties in the specified technology.",
  //   tutorImage: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
  // },
]

const Mentor = () => {
  return (
    <>
      <section className='bg-gradient-to-tl from-slate-500 to-purple-500 bg-gray-900 h-full'>
        <div className='flex justify-center py-4 text-center'>
          <h1 className='text-3xl font-bold text-white capitalize'>Our Expert Mentor</h1>
        </div>

        <div className='flex rounded-lg flex-col sm:flex-row sm:max-w-[100%] px-6 max-w-[50%] sm:mx-auto sm:overflow-hidden'>
            <HeroCard tutors={tutorData} />
        </div>
      </section>
    </>
  )
}

export default Mentor