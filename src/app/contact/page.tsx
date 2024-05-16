import React from 'react'
import Navbar from '../component/ui/Header/Navbar'
import Footer from '../component/home/Footer'
import { FaGlobe, FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'

const ContactPage = () => {
    return (
        <section className='bg-blue-50'>
            <Navbar />
            <div className="container my-16 mx-auto md:px-6">
                <section className="mb-32">
                    <div
                        className="relative h-[25rem] w-full overflow-hidden">
                        <Image
                            src={'/contactUs.jpg'}
                            alt='contact image'
                            fill
                            className='object-cover'
                        />
                    </div>

                    <div className="container px-6 md:px-12">
                        <div
                            className="block rounded-lg bg-green-100 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                                <div className="mx-auto mb-12 flex flex-col items-center gap-3 lg:mb-0">
                                    <i className='text-blue-1 text-5xl'>
                                        <FaLocationDot />
                                    </i>
                                    <h6 className="text-blue-1  font-medium">Kathmandu, Nepal</h6>
                                </div>
                                <div className="mx-auto mb-6  flex flex-col items-center gap-3 md:mb-0">
                                    <i className='text-blue-1 text-5xl'>
                                        <IoCall />
                                    </i>
                                    <h6 className=" font-medium">+977 9836325234 | 01 4454832</h6>
                                </div>
                                <div className="mx-auto flex flex-col items-center gap-3 ">
                                    <i className='text-blue-1  text-5xl'>
                                        <MdEmail />
                                    </i>
                                    <h6 className="font-medium">business@gmail.com</h6>
                                </div>
                                <div className="mx-auto  flex flex-col items-center gap-3 ">
                                    <i className='text-blue-1  text-5xl'>
                                        <FaGlobe />
                                    </i>
                                    <h6 className=" font-medium">www.business.com</h6>
                                </div>
                            </div>
                            <div className="mx-auto max-w-[700px]">
                                <form className="w-full mx-auto">
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                First name
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-5 group">
                                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Last name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Email address
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <textarea name="floating_email" rows={5} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Message
                                        </label>
                                    </div>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </section>
    )
}

export default ContactPage