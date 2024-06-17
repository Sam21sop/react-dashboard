import React from 'react'

const Courses = () => {
  return (
    <>
      <section class="bg-gradient-to-br from-purple-300 to-orange-200">
        <div class="grid gap-2 p-4 sm:mt-20 mt-0 sm:grid-cols-2 ">
            <div class="flex place-content-center place-items-center">
              <h1 class="text-xl sm:font-sans sm:text-5xl sm:font-bold">Most Popular courses</h1>
            </div>
            <div class="rounded-md bg-gray-800 text-white dark:bg-white dark:text-black">
              <div class="mx-auto max-w-2xl">
                <div class="relative">
                  <div class="relative h-72 overflow-hidden rounded-lg sm:h-80 xl:h-80 2xl:h-96">

                    <div class="flex place-content-center place-items-center h-full">
                      <div class="flex h-64 w-60 min-w-40 items-center justify-center rounded-xl bg-white text-black">
                        <img src=".project.jpg" alt="projectImage" />
                        <h1>Example course</h1>
                      </div>
                    </div>
                  </div>

                  <button type="button" class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none" data-carousel-prev>
                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                      <svg class="h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                      <span class="hidden">Previous</span>
                    </span>
                  </button>
                  <button type="button" class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none" data-carousel-next>
                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                      <svg class="h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>

                <div class=" mb-2 flex justify-center gap-2">
                <button class="h-2 w-14 rounded-full bg-white px-1 text-white"></button>
                <button class="h-2 w-14 rounded-full bg-white px-1 text-white"></button>
                <button class="h-2 w-14 rounded-full bg-white px-1 text-white"></button>
                <button class="h-2 w-14 rounded-full bg-white px-1 text-white"></button>
              </div>
              </div>              
            </div>
          </div>
      </section>
    </>
  )
}

export default Courses