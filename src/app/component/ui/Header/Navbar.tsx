"use client"
import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { MdMenu } from 'react-icons/md'

const Navbar = () => {
    const [isMobileNavBar, setIsMobileNavBar] = useState<boolean>(false)
    return (
        <>
            <nav className="lg:px-14 px-10 py-6 flex justify-between items-center text-xl bg-slate-50">
                <div className="">
                    <span className="text-xl sm:text-2xl lg:text-3xl tracking-wider font-medium">Business Logo</span>
                </div>
                <div className='hidden sm:block '>
                    <ul className="flex gap-5 cursor-pointer no-underline">
                        <a href="/">
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out ">
                                Home
                            </li>
                        </a>
                        <a href="/about">
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out">
                                About
                            </li>
                        </a>
                        <a href="/projects">
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out">
                                Projects
                            </li>
                        </a>
                        <a href="/services">
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out">
                                Services
                            </li>
                        </a>
                        <a href="/contact">
                            <li className="hover:scale-105 transition-transform duration-300 ease-in-out">
                                Contact
                            </li>
                        </a>

                    </ul>
                </div>
                <div className='hidden sm:block'>
                </div>
                <div className='block sm:hidden cursor-pointer' onClick={() => setIsMobileNavBar(true)}>
                    <MdMenu size={50} />
                </div>
            </nav>
            {/* section for mobile navbar */}
            {
                isMobileNavBar &&
                <section className='block absolute top-0 w-full bg-blue-1 text-xl h-screen text-white sm:hidden'>
                    <nav className="lg:px-14 px-10 py-6 flex flex-col gap-6 items-center">
                        <div className="flex justify-between items-center">
                            <span className="text-2xl lg:text-3xl tracking-wider font-medium">Business Logo</span>
                        </div>
                        <ul className="flex flex-col gap-5 no-underline text-xl">
                            <li className="hover:scale-105 transition">
                                Home
                            </li>
                            <li className="hover:scale-105 transition">
                                About
                            </li>
                            <li className="hover:scale-105 transition">
                                Projects
                            </li>
                            <li className="hover:scale-105 transition">
                                Services
                            </li>
                            <li className="hover:scale-105 transition">
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

export default Navbar