import React from 'react'
import Image from 'next/image'
import { FaNewspaper, FaQuoteLeft } from 'react-icons/fa6'
import { PiTargetBold } from 'react-icons/pi'
import { GiBoltEye } from 'react-icons/gi'

import { Certificate } from './Certificate'

const SchoolInfo = () => {
    return (
        <main className='mb-20 '>
            {/* history section */}
            <section className='grid md:grid-cols-3 grid-cols-1 gap-8 xl:px-32 md:px-24 px-12 py-12 h-[20rem]'>
                <div>
                    <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-2 border-cyan-1'>
                        Business&apos;s History
                    </h1>
                </div>
                <p className='h-full w-full overflow-hidden text-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur tenetur aperiam, ullam porro, consequatur
                    exercitationem, sint facere fugiat a odio libero debitis maxime nemo dolorem voluptas ipsum vero! Laboriosam,
                    corrupti. Exercitationem, sint facere fugiat a odio libero debitis maxime nemo dolorem voluptas ipsum vero!
                    Laboriosam.
                </p>
                <p className='h-full w-full overflow-hidden text-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur tenetur aperiam, ullam porro, consequatur
                    exercitationem, sint facere fugiat a odio libero debitis maxime nemo dolorem.Exercitationem, sint facere fugiat a odio libero debitis maxime nemo dolorem voluptas ipsum vero!
                    Laboriosam.
                </p>
            </section>

            {/* mission, vision and objective section */}
            <section className="relative h-[28rem] w-full xl:px-32 md:px-24 px-12 md:py-7 lg:py-14 sm:py-14 py-6 overflow-hidden">
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(22,33,84,0.8),rgba(22,33,84,0.8))]'></div>
                <Image
                    src={'/school.jpg'}
                    alt='hero image'
                    fill
                    className='object-fill bg-center'
                />
                <div className='absolute z-20 h-full'>
                    <div className=' flex flex-col md:flex-row items-center gap-10'>
                        <div className='flex flex-col gap-6 p-4 max-w-[28rem] text-white'>
                            <i>
                                <FaNewspaper size={40} />
                            </i>
                            <h2 className='text-3xl text-cyan-1 font-bold'>
                                School Mission
                            </h2>
                            <p className='text-lg min-h-48 overflow-hidden'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, temporibus? Nisi, iusto nulla. Fugiat, labore pariatur?
                                Ipsum, ipsa eos vel eius id natus sunt repellat, suscipit temporibus maxime laboriosam praesentium.
                                Ipsum, ipsa eos vel eius id natus sunt repellat, suscipit temporibus maxime laboriosam praesentium.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6 p-4 max-w-[28rem] text-white'>
                            <i>
                                <GiBoltEye size={40} />
                            </i>
                            <h2 className='text-3xl text-cyan-1 font-bold'>
                                School Vision
                            </h2>
                            <p className='text-lg min-h-48 overflow-hidden'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, temporibus? Nisi, iusto nulla. Fugiat, labore pariatur?
                                Ipsum, ipsa eos vel eius id natus sunt repellat, suscipit temporibus maxime laboriosam praesentium.
                            </p>
                        </div>
                        <div className='flex flex-col gap-6 p-4 max-w-[28rem] text-white'>
                            <i>
                                <PiTargetBold size={40} />
                            </i>
                            <h2 className='text-3xl text-cyan-1 font-bold'>
                                School Objective
                            </h2>
                            <p className='text-lg min-h-48 overflow-hidden'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, temporibus? Nisi, iusto nulla. Fugiat, labore pariatur?
                                Ipsum, ipsa eos vel eius id natus sunt repellat, suscipit temporibus maxime laboriosam praesentium.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  welcome */}
            <section className='py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col h-fit md:flex-row items-center justify-around'>
                <div></div>
                <div className='h-96 w-[30rem] relative '>
                    <Image
                        src={'/man.jpg'}
                        alt='principal image'
                        fill
                        className='object-cover rounded-xl'
                    />
                </div>
                <div className=''>
                    <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-3 border-cyan-1'>
                        Manager&apos;s Message
                    </h1>
                    <p className='w-[42rem] my-8 text-lg'>
                        <span className="text-cyan-1 text-5xl font-bold pr-2"> “</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolore sapiente totam iusto libero provident
                        enim cupiditate blanditiis, voluptate consequatur pariatur, et id tenetur qui harum culpa alias neque esse!
                        enim cupiditate blanditiis, voluptate consequatur pariatur, et id tenetur qui harum culpa alias neque esse!
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolore sapiente totam iusto libero provident
                        enim cupiditate blanditiis, voluptate consequatur pariatur, et id tenetur qui harum culpa alias neque esse!
                        enim cupiditate blanditiis, voluptate consequatur pariatur, et id tenetur qui harum culpa alias neque esse!
                        <span className="text-cyan-1 text-5xl font-bold m-0"> ”</span>
                    </p>
                </div>
            </section>

            {/* certification section */}
            <section className=' min-h-[32em]  w-full xl:px-32 md:px-24 px-12 py-12 overflow-hidden relative'>
                <div className='flex w-full h-full absolute z-[-10]'>
                    <div className='bg-white flex-1'></div>
                    <div className='bg-[#f9faff] flex-1 h-full'></div>
                </div>
                <div className='h-full w-full'>
                    <Certificate />
                </div>
            </section>
        </main>
    )
}

export default SchoolInfo