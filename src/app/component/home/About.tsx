"use client"
import React from 'react'
import Image from 'next/image'
import { MdArrowForward } from 'react-icons/md'
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter();
    return (
        <div className="relative xl:px-32 lg:px-24 h-screen sm:px-12 px-12 md:py-7 lg:py-20 sm:py-14 py-6 overflow-hidden">
            <div className='absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(255,255,255,1),rgba(255,255,255,0.9),rgba(255,255,255,0.8))]'></div>
            <Image
                src={'/p5.jpg'}
                alt='hero image'
                fill
                className='object-cover'
            />
            <div className='absolute inset-0 z-20 flex flex-col justify-center items-center'>
                <div className='flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto px-6'>
                    <div className='relative flex-1 lg:pb-16 pb-6'>
                        <div className='lg:w-[35rem] lg:h-[34rem] w-[30rem] h-[24rem] sm:w-[40rem] sm:h-[29rem] shadow-lg relative bg-white'>
                            <Image src={'/school1.jpg'} alt='image' fill className='p-3' />
                        </div>

                        <div className='hidden lg:block absolute right-0 top-[25rem] w-[20rem] h-[14rem] bg-white shadow-lg'>
                            <Image src={'/student.jpg'} alt='image' fill className='p-3' />
                        </div>
                    </div>
                    <div className='max-w-[35rem]'>
                        <div className='flex items-center gap-3' data-aos="fade-left" data-aos-duration="1000">
                            <span className='text-blue-2 text-lg'>About Our School</span>
                            <p className='w-20 h-[2px] bg-cyan-1 '></p>
                        </div>

                        <h1 className='lg:text-6xl text-4xl text-blue-2 font-extrabold leading-extra-tight md:my-4 my-3'>
                            Your School Name
                        </h1>
                        <p className='text-gray-1'>
                            Welcome to our school, where passionate and personalized education meets every unique journey.
                            At our school, we are dedicated to fostering a nurturing and inclusive environment where
                            each student is empowered to reach their fullest potential.
                        </p>
                        <p className='text-gray-1 my-4'>
                            Our experienced and caring faculty are committed to providing a comprehensive and engaging curriculum
                            that not only meets academic standards but also inspires a lifelong love of learning. We believe in the importance of
                            developing well-rounded individuals, to ensures that every student has the opportunity to explore their interests and talents.
                        </p>
                        <button
                            className="md:py-5 md:px-10 py-4 px-8 text-lg bg-blue-2 w-[13rem] text-white font-bold flex items-center gap-2 mt-12 transition-all hover:gap-3"
                            data-aos="zoom-in" data-aos-duration="1000"
                        >
                            <span onClick={() => router.push('/about')}>
                                Read More
                            </span>
                            <span>
                                <MdArrowForward size={20} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
