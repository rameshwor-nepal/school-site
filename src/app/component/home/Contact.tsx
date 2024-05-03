import React from 'react'

const Contact = () => {
    return (
        <section className='relative'>
            <div className="bg-[linear-gradient(to_bottom,rgba(22,33,84,0.8),rgba(55,92,157,0.9)),url('/p5.jpg')] w-full h-[28rem] py-16" style={{ backgroundSize: 'cover', backgroundPosition: "center" }}>
                <div className='text-center'>
                    <div className='flex items-center gap-3 lg:ml-[40%] sm:ml-[30%] ml-[20%]' data-aos="fade-right" data-aos-duration="500">
                        <span className='text-cyan-1 text-lg'>Have some work with us? </span>
                        <p className='w-20 h-[2px] bg-cyan-1 '></p>
                    </div>
                    <h1 className='lg:text-6xl text-4xl text-white font-extrabold leading-extra-tight my-3'>
                        Request A Quote Today
                    </h1>
                    <p className='text-white text-lg'>
                        Please contact us with all your water needs. We look forward to serving you.
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-20 gap-10 xl:px-32 lg:px-24 sm:px-12 px-12 lg:my-10 sm:my-6 my-4 '>
                <section className="bg-gray-100 w-full flex-1 shadow-[8px_8px_0px_0px_rgba(84,219,255)] mt-[-10rem] h-fit">
                    <div className=" bg-white p-8 shadow-lg  lg:p-12 border-2 border-gray-3 border-solid">
                        <h1 className='lg:text-3xl text-2xl text-blue-2 font-extrabold leading-extra-tight my-6'>
                            Request A Free Quote
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
                                    placeholder="Service title"
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="500">
                                <textarea
                                    className="w-full  border-gray-3 border-2 border-solid p-3 text-sm"
                                    placeholder="Service Description"
                                    rows={8}
                                    id="message"
                                ></textarea>
                            </div>

                            <div
                                className="mt-4 w-full text-center  bg-blue-2 px-5 py-3 font-medium text-white sm:w-auto"
                                data-aos="fade-right" data-aos-duration="500"
                            >
                                Send Request
                            </div>
                        </form>
                    </div>
                </section>

                <section className='lg:py-12 py-1 flex-1'>
                    <div className='py-6'>
                        <div className='flex items-center gap-3' data-aos="fade-right" data-aos-duration="500">
                            <span className='text-cyan-1 text-lg'>Have some work with us? </span>
                            <p className='w-20 h-[2px] bg-cyan-1 '></p>
                        </div>
                        <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight'>
                            Our Main Office
                        </h1>
                    </div>
                    <div>
                        <p className='text-gray-1'>
                            We are welcome you to visit our company during office hour. Find details of our
                            location and business hour below:
                        </p>
                        <span className='block my-4 h-[1px] w-40 bg-gray-3'></span>
                        <div className='flex flex-col gap-4 text-gray-1 my-5'>
                            <p className=''>
                                <span className='font-medium mr-4'> Address: </span>
                                <span> LaPorte, IN 46350 </span>
                            </p>
                            <p className=''>
                                <span className='font-medium mr-4'> Phone: </span>
                                <span> (123) 123-1234</span>
                            </p>
                            <p className=''>
                                <span className='font-medium mr-4'> Business Hours: </span>
                                <span> Mon-Fri: 9 am-5 pm </span>
                            </p>
                            <p className=''>
                                <span className='font-medium mr-4'>Email Address: </span>
                                <span> yourbusiness@business.com </span>
                            </p>
                        </div>
                        <h2 className='text-xl text-blue-2 font-extrabold leading-extra-tight py-4'>
                            Area Covered
                        </h2>
                        <p className='flex flex-col '>
                            <span>LaPorte Countries</span>
                            <span>Porter Countries</span>
                            <span>Michigan City</span>
                            <span>Michigan</span>
                        </p>
                    </div>

                </section>
            </div>
        </section>

    )
}

export default Contact