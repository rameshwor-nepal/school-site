import React from 'react'

const FeaturedProject = () => {
    return (
        <>
            <div className=' pt-16'>
                <div className='text-center'>
                    <div
                        className='flex items-center gap-3 lg:ml-[45%] sm:ml-[35%] ml-[25%]'
                        data-aos="fade-right" data-aos-duration="500"
                    >
                        <span className='text-blue-2 text-lg'>Honorable Mentions</span>
                        <p className='w-20 h-[2px] bg-cyan-1 '></p>
                    </div>
                    <h1 className='lg:text-6xl text-4xl text-blue-2 font-extrabold leading-extra-tight lg:my-3 my-2'>
                        Featured Projects
                    </h1>
                    <p className='text-gray-1'>
                        Some of business name repair
                    </p>
                </div>

                <div className='pl-14 pr-10 mt-5 h-[30rem] grid grid-cols-12'>
                    <div
                        className="lg:col-span-3 sm:col-span-6 col-span-12 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8)),url('/p4.jpg')]"
                        style={{ backgroundSize: 'cover' }}
                        data-aos="zoom-in" data-aos-duration="1000"
                    >
                        <h1 className='text-white text-right text-3xl font-extrabold pt-7 px-6'>
                            Project Title 01
                        </h1>
                        <h6 className='text-white text-right py-3 px-6'>
                            Jan 15, 2020
                        </h6>
                    </div>
                    <div
                        className="lg:col-span-3 sm:col-span-6 col-span-12 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8)),url('/p5.jpg')]"
                        style={{ backgroundSize: 'cover' }}
                        data-aos="zoom-in" data-aos-duration="1000"
                    >
                        <h1 className='text-white text-right text-3xl font-extrabold pt-7 px-6'>
                            Project Title 02
                        </h1>
                        <h6 className='text-white text-right py-3 px-6'>
                            Jan 15, 2020
                        </h6>
                    </div>
                    <div
                        className="lg:col-span-3 sm:col-span-6 col-span-12 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8)),url('/p6.jpg')]"
                        style={{ backgroundSize: 'cover' }}
                        data-aos="zoom-in" data-aos-duration="1000"
                    >
                        <h1 className='text-white text-right text-3xl font-extrabold pt-7 px-6'>
                            Project Title 03
                        </h1>
                        <h6 className='text-white text-right py-3 px-6'>
                            Jan 15, 2020
                        </h6>
                    </div>
                    <div
                        className="lg:col-span-3 sm:col-span-6 col-span-12 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8)),url('/p7.jpg')]"
                        style={{ backgroundSize: 'cover' }}
                        data-aos="zoom-in" data-aos-duration="1000"
                    >
                        <h1 className='text-white text-right text-3xl font-extrabold pt-7 px-6'>
                            Project Title 04
                        </h1>
                        <h6 className='text-white text-right py-3 px-6'>
                            Jan 15, 2020
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProject