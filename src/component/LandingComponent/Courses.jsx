import React, { useState } from 'react'
import CourseCard from './CourseCard'

const Courses = () => {

  const [courseData, setCourseData] = useState([
    {
      courseTitle: 'Machine Learning',
      courseImage: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?s=612x612&w=0&k=20&c=mJeYiZyGQXLXXZ6AWKbLwQDiuLr-YLRGV4VjHKdX0pM=",
      courseDescription: 'Trainding course which has lot of demand in the industry now a days.'
    },
    {
      courseTitle: 'Machine Learning',
      courseImage: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?s=612x612&w=0&k=20&c=mJeYiZyGQXLXXZ6AWKbLwQDiuLr-YLRGV4VjHKdX0pM=",
      courseDescription: 'Trainding course which has lot of demand in the industry now a days.'
    },
    {
      courseTitle: 'Machine Learning',
      courseImage: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?s=612x612&w=0&k=20&c=mJeYiZyGQXLXXZ6AWKbLwQDiuLr-YLRGV4VjHKdX0pM=",
      courseDescription: 'Trainding course which has lot of demand in the industry now a days.'
    },
    {
      courseTitle: 'Machine Learning',
      courseImage: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?s=612x612&w=0&k=20&c=mJeYiZyGQXLXXZ6AWKbLwQDiuLr-YLRGV4VjHKdX0pM=",
      courseDescription: 'Trainding course which has lot of demand in the industry now a days.'
    },
    {
      courseTitle: 'Machine Learning',
      courseImage: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?s=612x612&w=0&k=20&c=mJeYiZyGQXLXXZ6AWKbLwQDiuLr-YLRGV4VjHKdX0pM=",
      courseDescription: 'Trainding course which has lot of demand in the industry now a days.'
    },
    {
      courseTitle: 'Machine Learning',
      courseImage: "https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?s=612x612&w=0&k=20&c=mJeYiZyGQXLXXZ6AWKbLwQDiuLr-YLRGV4VjHKdX0pM=",
      courseDescription: 'Trainding course which has lot of demand in the industry now a days.'
    },
  ]);

  return (
    <>
      <section className='bg-gradient-to-tl from-slate-500 to-purple-500 bg-gray-900 h-full'>
        <div className='flex justify-center py-4 text-center'>
          <h1 className='text-3xl font-bold text-white capitalize'>Most Popular courses</h1>
        </div>

        <div className='flex  rounded-lg flex-col sm:flex-row sm:max-w-[66%]  max-w-[50%] py-10 gap-10 px-2 sm:mx-auto sm:overflow-hidden'>
          <CourseCard slides={courseData} />
        </div>

        <div class="relative max-w-[90%] mx-auto">
          <button type="button" class="absolute left-0 py-10 flex  cursor-pointer px-4 ">
            <span class="inline-flex h-8 w-8 bg-gray-900 items-center justify-center rounded-full bg-white/30  sm:h-10 sm:w-10 dark:bg-gray-800/30">
              <svg class="h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </span>
          </button>
          <button type="button" class="absolute right-0 py-10 flex cursor-pointer px-4 " >
            <span class="inline-flex h-8 w-8 bg-gray-900 items-center justify-center rounded-full bg-white/30  sm:h-10 sm:w-10 dark:bg-gray-800/30">
              <svg class="h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Courses