import React from 'react'
import Image from 'next/image'
import { PiStudentBold } from 'react-icons/pi'

interface PropI {
    schoolProgram: {
        data: FacilitiesI[];
        message: string;
    };
}

const ProgramCard = ({ schoolProgram }: PropI) => {
    return (
        <main className=''>
            {/* what we offer */}
            <section className='grid md:grid-cols-3 grid-cols-1 gap-8 h-[20rem] xl:px-32 md:px-24 px-12 py-12'>
                <div>
                    <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-2 border-cyan-1'>
                        What We Offer
                    </h1>
                </div>
                <p className='h-full w-full overflow-hidden text-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur tenetur aperiam, ullam porro, consequatur
                    exercitationem, sint facere fugiat a odio libero debitis maxime nemo dolorem voluptas ipsum vero! Laboriosam,
                    corrupti. Exercitationem, sint facere fugiat a odio libero debitis maxime nemo dolorem voluptas ipsum vero!
                    Laboriosam.
                </p>
                <p className='h-full w-full overflow-hidden text-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur tenetur aperiam, ullam porro, consequatur
                    exercitationem, sint facere fugiat a odio libero debitis maxime nemo dolorem.Exercitationem, sint facere fugiat a odio libero debitis maxime nemo dolorem voluptas ipsum vero!
                    Laboriosam.
                </p>
            </section>

            {/* different program list */}
            <section className='bg-blue-50 lg:py-16 md:py-10 py-8 xl:px-32 md:px-24 px-12 '>
                {
                    schoolProgram && schoolProgram.data.length > 0 ? (

                        schoolProgram.data.map((el, index) => (
                            <div className='flex flex-col md:flex-row items-center' key={index}>
                                {
                                    index % 2 == 0 ? (
                                        <>
                                            <div className='flex flex-col gap-3  text-gray-1 flex-1'>
                                                <i>
                                                    <PiStudentBold size={40} />
                                                </i>
                                                <h2 className='text-3xl text-blue-1 font-bold'>
                                                    {el.title}
                                                </h2>
                                                <p className='text-lg max-h-56 overflow-hidden pr-6 line-clamp-[8]'>
                                                    {el.desc}
                                                </p>
                                            </div>
                                            <div className='flex-1 w-full h-[30rem] relative' data-aos="fade-left">
                                                <Image
                                                    src={el.image}
                                                    alt='hero image'
                                                    fill
                                                    className='object-cover rounded-xl'
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='flex-1 w-full h-[30rem] relative mr-10' data-aos="fade-right">
                                                <Image
                                                    src={el.image}
                                                    alt='hero image'
                                                    fill
                                                    className='object-cover rounded-xl'
                                                />
                                            </div>
                                            <div className='flex flex-col gap-3  text-gray-1 flex-1'>
                                                <i>
                                                    <PiStudentBold size={40} />
                                                </i>
                                                <h2 className='text-3xl text-blue-1 font-bold'>
                                                    {el.title}
                                                </h2>
                                                <p className='text-lg max-h-56 overflow-hidden pr-6 line-clamp-[8]'>
                                                    {el.desc}
                                                </p>
                                            </div>

                                        </>
                                    )
                                }

                            </div>

                        ))
                    ) : (
                        <h1 className='text-center text-xl font-semibold text-gray-3'>
                            There is no any school Program
                        </h1>
                    )
                }
            </section>
        </main>
    )
}

export default ProgramCard