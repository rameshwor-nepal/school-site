"use client"
import React, { useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdArrowForward, MdMenu } from 'react-icons/md'
import Carousel from './ui/Carousel'
import { ImCross } from 'react-icons/im'

const HeroSection = () => {
    const [isMobileNavBar, setIsMobileNavBar] = useState<boolean>(false)
    return (
        <>
            <section className="bg-cyan-1 py-3 lg:px-14 px-10">
                <div className="flex justify-between items-center text-sm text-black">
                    <p>
                        <span className="mr-3">
                            Mon-Fri: 9AM - 5PM
                        </span>
                        <span>
                            yourbusiness@business.com
                        </span>
                    </p>

                    <div className="flex gap-4 text-lg">
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaWhatsapp />
                    </div>

                </div>
            </section>

            <section className=' grid grid-cols-12 grid-rows-12 relative'>
                <div className="col-span-12 row-span-10 bg-[linear-gradient(to_bottom,rgba(22,33,84,0.9),rgba(55,92,157,0.6)),url('/plumbing-home.jpg')]  text-white" style={{ backgroundSize: 'cover' }}>
                    <nav className="lg:px-14 px-10 py-6 flex justify-between items-center">
                        <div className="">
                            <span className="text-xl sm:text-2xl lg:text-3xl tracking-wider font-medium">Business Logo</span>
                        </div>
                        <div className='hidden sm:block'>
                            <ul className="flex gap-5 no-underline">
                                <li>
                                    Home
                                </li>
                                <li>
                                    About
                                </li>
                                <li>
                                    Projects
                                </li>
                                <li>
                                    Services
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </div>

                        <div className='block sm:hidden cursor-pointer' onClick={() => setIsMobileNavBar(true)}>
                            <MdMenu size={50} />
                        </div>
                    </nav>
                    <div className=" flex justify-between items-center mt-24  xl:px-32 lg:px-24 sm:px-16 px-12">
                        <div className="w-[39rem]">
                            <p className="md:pb-4 pb-3 text-lg">
                                Building with Confidence
                            </p>
                            <h1
                                className="text-5xl md:text-[80px] lg:text-[90px] leading-extra-tight font-bold"
                                data-aos="fade-right" data-aos-duration="500"
                            >
                                Building and Maintaining Your Dreams
                            </h1>
                            <p>
                                Fast, Friendly home repair service done right the first time!!
                            </p>
                            <button
                                className="md:py-5 md:px-10 py-4 px-8 text-lg bg-white text-blue-2 font-bold flex items-center gap-2 mt-8 mb-20"
                                data-aos="fade-right" data-aos-duration="500"
                            >
                                <span>
                                    Expore More
                                </span>
                                <span>
                                    <MdArrowForward size={20} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="hidden lg:block xl:w-[27rem] xl:h-[40rem] w-[20rem] h-[25rem] top-48 right-3 z-10 absolute  xl:right-32"
                    data-aos="fade-left" data-aos-duration="500"
                >
                    {/* <Image src={'/PLUMBING.jpg'} alt="image1" fill objectFit='cover' /> */}
                    <Carousel />
                </div>
                <div className="bg-cyan-1 col-span-12 row-span-2 lg:pt-14 pt-10 xl:px-32 lg:px-24 sm:px-12 px-12">
                    <p data-aos="zoom-in" data-aos-duration="500"
                        className="lg:text-5xl text-xl sm:3xl font-extrabold text-white">
                        20% Year of Experience
                    </p>
                </div>
            </section>

            {/* section for mobile navbar */}
            {
                isMobileNavBar &&
                <section className='block absolute top-0 w-full bg-blue-1 h-screen text-white sm:hidden'>
                    <nav className="lg:px-14 px-10 py-6 flex flex-col gap-6 items-center">
                        <div className="flex justify-between items-center">
                            <span className="text-2xl lg:text-3xl tracking-wider font-medium">Business Logo</span>
                        </div>
                        <ul className="flex flex-col gap-5 no-underline text-xl">
                            <li>
                                Home
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Projects
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                        <div className=' absolute top-6 right-2 cursor-pointer' onClick={() => setIsMobileNavBar(false)}>
                            <ImCross size={30} />
                        </div>
                    </nav>
                </section>
            }

        </>
    )
}

export default HeroSection