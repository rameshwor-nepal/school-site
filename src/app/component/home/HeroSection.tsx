"use client"
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdArrowForward, MdMenu } from 'react-icons/md'
import Carousel from './ui/Carousel'
import { ImCross } from 'react-icons/im'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
    const [isMobileNavBar, setIsMobileNavBar] = useState<boolean>(false)
    const router = useRouter();
    return (
        <>
            {/* upper navbar */}
            <section className="bg-cyan-1 py-3 lg:px-14 px-10">
                <div className="flex justify-between items-center text-sm text-black">
                    <p>
                        <span className="mr-3">
                            Sun-Fri: 9AM - 5PM
                        </span>
                        <span>
                            yourschool@school.com
                        </span>
                    </p>

                    <div className="flex gap-4 text-lg">
                        <FaInstagram />
                        <FaWhatsapp />
                        <FaFacebook />
                    </div>

                </div>
            </section>

            {/* main hero section */}
            <section className='  grid grid-cols-12 grid-rows-12 relative'>
                <div className="col-span-12 row-span-10 h-screen text-white relative">
                    <div className='absolute h-screen w-full z-10 bg-[linear-gradient(to_right,rgba(22,33,84,0.8),rgba(55,92,157,0.6))]'>
                    </div>
                    <div className='absolute z-0 h-screen w-full'>
                        <Carousel />
                    </div>
                    {/* <Image
                        src={'/school0.jpg'}
                        alt='hero image'
                        fill
                        className='object-cover'
                    /> */}
                    <div className='absolute z-20'>
                        <nav className="lg:px-14 px-10 py-6 flex justify-between items-center">
                            <div className="">
                                <span className="text-xl sm:text-2xl lg:text-3xl tracking-wider font-medium">School Logo</span>
                            </div>
                            <div className='hidden sm:block '>
                                <ul className="flex gap-5 cursor-pointer no-underline">
                                    <a href="/">
                                        <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                            Home
                                        </li>
                                    </a>
                                    <a href="/about">
                                        <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                            About
                                        </li>
                                    </a>
                                    <a href="/facilities">
                                        <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                            Facilities
                                        </li>
                                    </a>
                                    <a href="/program">
                                        <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                            Program
                                        </li>
                                    </a>
                                    <a href="/gallery">
                                        <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                            Gallery
                                        </li>
                                    </a>

                                    <a href="/contact">
                                        <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                            Contact
                                        </li>
                                    </a>

                                </ul>
                            </div>

                            <div className='block sm:hidden cursor-pointer' onClick={() => setIsMobileNavBar(true)}>
                                <MdMenu size={50} />
                            </div>
                        </nav>
                        <div className=" flex justify-between  items-center mt-24  xl:px-32 lg:px-24 sm:px-16 px-12">
                            <div className="w-[42rem]">
                                <p className="md:pb-4 pb-3 text-lg">
                                    Empowering Tomorrow&apos;s  Leaders
                                </p>
                                <h1
                                    className="text-5xl md:text-[80px] leading-extra-tight font-bold"
                                >
                                    Dream Big, <br /> Build Strong, Succeed Always
                                </h1>
                                <p>
                                    Passionate, Personalized Education for Every Student&apos;s  Journey
                                </p>
                                <button
                                    className="md:py-5 md:px-10 py-4 px-8 text-lg w-56 bg-white text-blue-2 font-bold flex items-center gap-2 mt-8 mb-20 transition-all hover:gap-3"
                                    data-aos="fade-right" data-aos-duration="500"
                                    onClick={() => router.push('/about')}
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
                </div>
                {/* <div
                    className="hidden lg:block xl:w-[27rem] xl:h-[40rem] w-[20rem] h-[25rem] top-48 right-3 z-10 absolute  xl:right-32"
                >
                    <Carousel />
                </div> */}
                <div className="bg-cyan-1 col-span-12 row-span-2 lg:pt-14 pt-10 xl:px-32 lg:px-24 sm:px-12 px-12">
                    <p data-aos="fade-right" data-aos-duration="500"
                        className="lg:text-5xl text-xl sm:3xl font-extrabold text-white">
                        20+ Years of Experience
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
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                Home
                            </li>
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                About
                            </li>
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                Facilities
                            </li>
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                Projects
                            </li>
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                Gallery
                            </li>
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
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