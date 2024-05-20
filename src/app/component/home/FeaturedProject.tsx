import React from 'react'
import Image from 'next/image'

const FeaturedProject = () => {
    return (
        <>
            <div className='mb-14 pt-16'>
                <div className='text-center'>
                    <div
                        className='flex items-center gap-3 lg:ml-[45%] sm:ml-[35%] ml-[25%]'
                        data-aos="fade-right" data-aos-duration="500"
                    >
                        <span className='text-blue-2 text-lg'>Honorable memories</span>
                        <p className='w-20 h-[2px] bg-cyan-1 '></p>
                    </div>
                    <h1 className='lg:text-6xl text-4xl text-blue-2 font-extrabold leading-extra-tight lg:my-3 my-2'>
                        Recent Activities
                    </h1>
                    <p className='text-gray-1'>
                        Some of memories from recent activities
                    </p>
                </div>

                <div className='pl-14 pr-10 mt-5 h-[30rem] grid grid-cols-12'>
                    <div
                        className="lg:col-span-3 sm:col-span-6 col-span-12 relative"
                        data-aos="zoom-in" data-aos-duration="1000"
                    >
                        <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8))]'></div>
                        <Image
                            src={'/dancing.jpg'}
                            alt='hero image'
                            fill
                            className='object-cover'
                        />
                        <div className='absolute z-20 right-1'>
                            <h1 className='text-white text-right text-3xl font-extrabold pt-7 px-6'>
                                Dancing Competition
                            </h1>
                            <h6 className='text-white text-right py-3 px-6'>
                                Jan 15, 2024
                            </h6>
                        </div>
                    </div>

                    <div
                        className="lg:col-span-3 sm:col-span-6 col-span-12 relative"
                        data-aos="zoom-in" data-aos-duration="1000"
                    >
                        <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8))]'></div>
                        <Image
                            src={'/tabletennis.jpeg'}
                            alt='hero image'
                            fill
                            className='object-cover'
                        />
                        <div className='z-20 absolute right-1'>
                            <h1 className='text-white text-right text-3xl font-extrabold pt-7 px-6'>
                                Table Tennis Competition
                            </h1>
                            <h6 className='text-white text-right py-3 px-6'>
                                Jan 22, 2024
                            </h6>
                        </div>
                    </div>

                    <div
                        className="lg:col-span-3 sm:col-span-6 col-span-12 relative"
                        data-aos="zoom-in" data-aos-duration="1000"
                    >
                        <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8))]'></div>
                        <Image
                            src={'/classroom.jpg'}
                            alt='hero image'
                            fill
                            className='object-cover'
                        />
                        <div className='absolute z-20 right-1'>
                            <h1 className='text-white text-right text-3xl font-extrabold pt-7 px-6'>
                                Speech Competition
                            </h1>
                            <h6 className='text-white text-right py-3 px-6'>
                                Jan 29, 2024
                            </h6>
                        </div>
                    </div>

                    <div
                        className="lg:col-span-3 sm:col-span-6 col-span-12 relative"
                        data-aos="zoom-in" data-aos-duration="1000"
                    >
                        <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8))]'></div>
                        <Image
                            src={'/handwriting.jpg'}
                            alt='hero image'
                            fill
                            className='object-cover'
                        />
                        <div className='z-20 absolute right-1'>
                            <h1 className='text-white text-right text-3xl font-extrabold pt-7 px-6'>
                                Handwriting Competition
                            </h1>
                            <h6 className='text-white text-right py-3 px-6'>
                                Feb 15, 2024
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProject