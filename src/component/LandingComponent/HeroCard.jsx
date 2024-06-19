import React from 'react'

const HeroCard = (props) => {

    const { tutors } = props

    return (
        <>
            {
                tutors.map((tutor) => (
                    <div key={tutor.tutorId} class="w-3/4 mx-auto">
                        <div class="mt-10">
                            <div class="flex flex-col bg-white shadow-2xl h-96 w-80 rounded-xl">
                                <div class="h-56 flex justify-center items-center rounded-t-xl bg-fuchsia-500 p-2">
                                    <img
                                        class="w-44 h-44 rounded-full"
                                        src={tutor.tutorImage}
                                        alt="profile"
                                    />
                                </div>

                                <div class="flex flex-col justify-center items-center gap-4 p-4">
                                    <h2 class="text-xl font-semibold capitalize">{tutor.tutorName}</h2>
                                    <p class="text-sm font-sans text-start">{tutor.tutorDescription}</p>
                                    <button class="bg-fuchsia-500 px-5 py-2 rounded-md text-white font-medium">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default HeroCard