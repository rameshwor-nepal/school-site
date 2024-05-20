import React from 'react'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdAccessTimeFilled, MdFacebook, MdMail } from 'react-icons/md'

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-2">
                <section className="mx-auto w-full xl:px-32 lg:px-24 sm:px-8 px-6 lg:py-20 sm:py-14 py-6 ">
                    <div className="flex flex-col lg:flex-row md:gap-10 lg:gap-16">
                        <div
                            className="mb-6 bg-white p-6 w-[23.5rem] h-[12rem] overflow-hidden flex flex-col gap-4"
                            data-aos="zoom-in" data-aos-duration="1000"
                        >
                            <span className="lg:text-3xl text-xl text-blue-2 font-medium">School Logo</span>
                            <span className="self-center text-gray-1">
                                Locally owned and operated school with 20 years of education experience. We value honesty and integrity in all
                                aspects of the education faclities.
                            </span>
                        </div>
                        <div className='flex gap-8 lg:gap-16'>
                            <div>
                                <h2 className="mb-6 text-2xl text-cyan-1 font-extrabold">Quick Links</h2>
                                <ul className="text-white space-y-4">
                                    <li className="hover:underline cursor-pointer">
                                        About Us
                                    </li>
                                    <li className="hover:underline cursor-pointer">
                                        Facilities
                                    </li>
                                    <li className="hover:underline cursor-pointer">
                                        Programs
                                    </li>
                                    <li className="hover:underline cursor-pointer">
                                        Gallery
                                    </li>
                                    <li className="hover:underline cursor-pointer">
                                        Contact
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-2xl text-cyan-1 font-extrabold">Get In Touch</h2>
                                <ul className="text-white space-y-4">
                                    <li className="hover:underline cursor-pointer">
                                        Facebook
                                    </li>
                                    <li className="hover:underline cursor-pointer">
                                        Instagram
                                    </li>
                                    <li className="hover:underline cursor-pointer">
                                        Youtube
                                    </li>
                                    <li className="hover:underline cursor-pointer">
                                        Twitter
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-2xl text-cyan-1 font-extrabold">Basic Info</h2>
                                <ul className="text-white space-y-4">
                                    <li className="hover:underline cursor-pointer flex gap-3 items-center">
                                        <span><FaMapLocationDot size={20} /></span>Kapan, Kathmandu, Nepal
                                    </li>
                                    <li className="hover:underline cursor-pointer flex gap-3 items-center">
                                        <span><FaPhoneAlt size={20} /></span>  01-4673562
                                    </li>
                                    <li className="hover:underline cursor-pointer flex gap-3 items-center">
                                        <span><MdMail size={20} /></span> Sun-Fri: 9 am-5 pm
                                    </li>
                                    <li className="hover:underline cursor-pointer flex gap-3 items-center">
                                        <span><MdAccessTimeFilled size={20} /></span> yourschool@school.com
                                    </li>
                                </ul>
                            </div>
                            <div className='hidden xl:block'>
                            </div>
                        </div>

                    </div>
                </section>
                <section className='h-26 xl:px-32 lg:px-24 sm:px-8 px-6 bg-blue-1 flex justify-between items-center'>
                    <div className=' py-4 text-white'>
                        <span> Copyright 2023 - All rights reserved. Designed By
                        </span>
                        <a href="#" className='underline ml-1'>
                            rNepal Solution
                        </a>
                    </div>
                    <div className='flex gap-5'>
                        <span className='p-2 rounded-[50%] border-gray-3 border-solid border-2 text-white'>
                            <FaFacebookF size={15} />
                        </span>
                        <span className='p-2 rounded-[50%] border-gray-3 border-solid border-2 text-white text-xl'>
                            <FaInstagram size={15} />
                        </span>
                        <span className='p-2 rounded-[50%] border-gray-3 border-solid border-2 text-white text-xl'>
                            <FaTwitter size={15} />
                        </span>
                    </div>
                </section>

            </footer>


        </>
    )
}

export default Footer