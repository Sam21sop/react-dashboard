import React from 'react'

const CourseCard = (props) => {

    const { slides } = props

    return (
        <>
            {
                slides.map((course) => (
                    <div class="min-w-[30%] bg-white rounded-xl shadow-md overflow-hidden">
                        <div class="md:shrink-0">
                            <img
                                class="h-52 w-full rounded-t-md  object-cover"
                                src={course.courseImage}
                                alt="image"
                            />
                        </div>
                        <div class="p-8 flex flex-col">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{course.courseTitle}</div>
                            <p class="mt-2 text-slate-500">{course.courseDescription}</p>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default CourseCard