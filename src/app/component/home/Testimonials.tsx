import React from 'react'

import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
    return (
        <section className="xl:px-32 px-6 lg:px-24 sm:px-12  lg:py-20 sm:py-14 py-6 h-screen md:h-[40rem] w-full relative">
            <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0.8),rgba(255,255,255,0.8))]'></div>
            <Image
                src={'/p5.jpg'}
                alt='hero image'
                fill
                className='object-cover'
            />
            <div className='absolute z-20'>
                <div className='grid grid-cols-12 items-center gap-8 md:gap-16 '>
                    <div className='md:col-span-4 col-span-12'>
                        <div className='flex items-center gap-3' data-aos="fade-right" data-aos-duration="1000">
                            <span className='text-blue-2 text-lg'>What our client say</span>
                            <p className='w-20 h-[2px] bg-cyan-1 '></p>
                        </div>
                        <h1 className='xl:text-7xl md:text-5xl sm:text-4xl text-3xl text-blue-2 font-extrabold leading-extra-tight my-3'>
                            Client&apos;s Testimonials
                        </h1>
                        <p className='text-gray-1 text-lg'>
                            Here what our customer are saying about Your Business Name LLC
                        </p>
                    </div>
                    <div className='hidden sm:col-span-1'></div>
                    <div className="relative col-span-12 md:col-span-7 h-[28rem]">
                        <div className='absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(22,33,84,0.8),rgba(55,92,157,0.8))]'></div>
                        <Image
                            src={'/p7.jpg'}
                            alt='hero image'
                            fill
                            className='object-cover'
                        />
                        <div className='z-20 absolute'>
                            <div className=' relative w-full h-[28rem] flex flex-col justify-between'>
                                <div className='border-l-[10px] border-solid border-cyan-1 px-12 flex flex-col'>
                                    <div className='text-gray-2 lg:ml-[92%] ml-[88%] text-7xl px-2 pt-2  '>
                                        <FaQuoteLeft />
                                    </div>
                                    <p className='text-white text-xl max-h-[12rem] overflow-hidden pb-6'>
                                        We have used your business name LLC for several years and consider Tim and his men as a part of your company,
                                        Great Customer service and very fast service. I am thankful to have such a reliable, express and trustworthy
                                        company to work with.
                                    </p>
                                </div>
                                <p className=' text-white text-2xl  absolute right-10 bottom-6'>
                                    - John F. Kennedy
                                </p>
                            </div>

                            <div
                                className='mt-[-10%] sm:ml-[-10%] ml-[30%] border-[10px] border-solid border-cyan-1 rounded-[50%] w-[11rem] h-[11rem]'
                                data-aos="zoom-in" data-aos-duration="1000"
                            >
                                <Image src={'/man.jpg'} alt='testimonials' fill className='rounded-[50%]' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Testimonials