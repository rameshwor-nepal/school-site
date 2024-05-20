import React from 'react'
import Image from 'next/image'

const Contact = () => {
    return (
        <section className='relative mb-9 md:mb-0'>
            <div className="w-full h-[28rem] py-16 relative">
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(22,33,84,0.8),rgba(55,92,157,0.9))]'></div>
                <Image
                    src={'/cartoon1.jpeg'}
                    alt='hero image'
                    fill
                    className='object-cover'
                />
                <div className='absolute z-20 ml-[20%]'>
                    <div className='text-center'>
                        <div className='flex items-center gap-3 lg:ml-[40%] sm:ml-[30%] ml-[20%]' data-aos="fade-right" data-aos-duration="500">
                            <span className='text-cyan-1 text-lg'>Do you want more information? </span>
                            <p className='w-20 h-[2px] bg-cyan-1 '></p>
                        </div>
                        <h1 className='lg:text-6xl text-4xl text-white font-extrabold leading-extra-tight my-3'>
                            Request A Message Today
                        </h1>
                        <p className='text-white text-lg'>
                            Please contact us with all your queries. We look forward to serving you.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-slate-50 lg:flex-row lg:gap-20 gap-10 xl:px-32 lg:px-24 sm:px-12 px-12 '>
                <section className="bg-gray-100 w-full z-30 flex-1 shadow-[8px_8px_0px_0px_rgba(84,219,255)] mt-[-10rem] h-fit">
                    <div className=" bg-white p-8 shadow-lg  lg:p-12 border-2 border-gray-3 border-solid">
                        <h1 className='lg:text-3xl text-2xl text-blue-2 font-extrabold leading-extra-tight my-6'>
                            Request A Free Messsage
                        </h1>
                        <form action="" className="space-y-4 pb-10">
                            <div data-aos="fade-right" data-aos-duration="500">
                                <input
                                    className="w-full  border-gray-3 border-2 border-solid p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="500">
                                <input
                                    className="w-full  border-gray-3 border-2 border-solid p-3 text-sm"
                                    placeholder="Your Email"
                                    type="email"
                                    id="name"
                                />
                            </div>

                            <div data-aos="fade-right" data-aos-duration="500">
                                <input
                                    className="w-full  border-gray-3 border-2 border-solid p-3 text-sm"
                                    placeholder="Contact Number"
                                    type="number"
                                    id="name"
                                />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="500">
                                <input
                                    className="w-full  border-gray-3 border-2 border-solid p-3 text-sm"
                                    placeholder="Message title"
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="500">
                                <textarea
                                    className="w-full  border-gray-3 border-2 border-solid p-3 text-sm"
                                    placeholder="Message Description"
                                    rows={8}
                                    id="message"
                                ></textarea>
                            </div>

                            <div
                                className="mt-4 w-full text-center  bg-blue-2 px-5 py-3 font-medium text-white sm:w-auto"
                                data-aos="fade-right" data-aos-duration="500"
                            >
                                Send Message
                            </div>
                        </form>
                    </div>
                </section>

                <section className='lg:py-12 py-1 flex-1'>
                    <div className='py-6'>
                        <div className='flex items-center gap-3' data-aos="fade-right" data-aos-duration="500">
                            <span className='text-cyan-1 text-lg'>Contact now </span>
                            <p className='w-20 h-[2px] bg-cyan-1 '></p>
                        </div>
                        <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight'>
                            Our Main Building
                        </h1>
                    </div>
                    <div>
                        <p className='text-gray-1'>
                            We are welcome you to visit our school during office hour. Find details of our
                            location and school hour below:
                        </p>
                        <span className='block my-4 h-[1px] w-40 bg-gray-3'></span>
                        <div className='flex flex-col gap-4 text-gray-1 my-5'>
                            <p className=''>
                                <span className='font-medium mr-4'> Address: </span>
                                <span> Kapan, Kathmandu, Nepal </span>
                            </p>
                            <p className=''>
                                <span className='font-medium mr-4'> Phone: </span>
                                <span> 01-4673562</span>
                            </p>
                            <p className=''>
                                <span className='font-medium mr-4'> Business Hours: </span>
                                <span> Sun-Fri: 9 am-5 pm </span>
                            </p>
                            <p className=''>
                                <span className='font-medium mr-4'>Email Address: </span>
                                <span> yourschool@school.com </span>
                            </p>
                        </div>
                        <h2 className='text-xl text-blue-2 font-extrabold leading-extra-tight py-4'>
                            Branches
                        </h2>
                        <p className='flex flex-col text-gray-1 '>
                            <span>Jorpati, Kathmandu</span>
                            <span>Patandhoka, Lalitpur</span>
                            <span>Sakhu, Kathmandu</span>
                            <span>Banepa, Kavrepalanchok</span>
                        </p>
                    </div>

                </section>
            </div>
        </section>

    )
}

export default Contact