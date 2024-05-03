import React from 'react'
import Image from 'next/image'
import { MdArrowForward } from 'react-icons/md'

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 justify-between  xl:px-32 lg:px-24 sm:px-12 px-12 lg:py-20 sm:py-14 py-6 h-fit bg-[linear-gradient(to_right,rgba(255,255,255,1),rgba(255,255,255,0.9),rgba(255,255,255,0.8)),url('/p5.jpg')]" style={{ backgroundSize: 'cover' }}>
            <div className='relative flex-1 lg:pb-16 pb-6'>
                <div className='lg:w-[35rem] lg:h-[34rem] w-[30rem] h-[24rem] sm:w-[40rem] sm:h-[29rem] shadow-lg relative bg-white'>
                    <Image src={'/watertreatment.jpg'} alt='image' fill objectFit='cover' className='p-3' />
                </div>

                <div className='hidden lg:block absolute right-0 top-[25rem] w-[20rem] h-[14rem] bg-white shadow-lg'>
                    <Image src={'/p3.jpg'} alt='image' fill objectFit='cover' className='p-3' />
                </div>
            </div>


            <div className='max-w-[35rem]'>
                <div className='flex items-center gap-3' data-aos="fade-left" data-aos-duration="1000">
                    <span className='text-blue-2 text-lg'>About Our Company</span>
                    <p className='w-20 h-[2px] bg-cyan-1 '></p>
                </div>

                <h1 className='lg:text-6xl text-4xl text-blue-2 font-extrabold leading-extra-tight md:my-4 my-3'>
                    Your Business Name LLC
                </h1>
                <p className='text-gary-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde harum nemo quam odio dolor
                    id nam totam saepe quasi necessitatibus, blanditiis voluptate animi consequuntur delectus eligendi tenetur
                    id nam totam saepe quasi necessitatibus, blanditiis voluptate animi consequuntur delectus eligendi tenetur
                    accusamus placeat!
                </p>
                <p className='text-gary-1 my-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde harum nemo quam odio dolor
                    id nam totam saepe quasi necessitatibus, blanditiis voluptate animi consequuntur delectus eligendi tenetur
                    accusamus placeat!eligendi tenetur accusamus placeat!
                </p>
                <button
                    className="md:py-5 md:px-10 py-4 px-8 text-lg bg-blue-2 text-white font-bold flex items-center gap-2 mt-12"
                    data-aos="zoom-in" data-aos-duration="1000"
                >
                    <span>
                        Read More
                    </span>
                    <span>
                        <MdArrowForward size={20} />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default About