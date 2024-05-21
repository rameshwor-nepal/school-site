"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { DialogCard } from './DialogCard';

interface PropsI {
    image: string;
    title: string;
    body: string;
}

const FacilitiesCard = ({ image, title, body }: PropsI) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className='flex gap-4 h-fit items-center relative border-solid border-2 border-cyan-1 rounded-xl bg-white p-4 sm:p-6 shadow-lg transition hover:shadow-xl'
            >
                <div className='w-96 h-32 relative'>
                    <Image
                        src={`${image}`}
                        alt='hero image'
                        fill
                        className='object-cover rounded-sm'
                    />
                </div>
                <article className="">
                    <h3 className="mt-0.5 text-lg lg:text-xl font-medium text-blue-1">
                        {title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-2">
                        {body}
                    </p>

                    <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 cursor-pointer"
                        onClick={() => setOpenModal(true)}
                    >
                        Read more

                        <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </p>
                </article>
                <span data-aos="fade-down" data-aos-duration="1000" className='block absolute w-[6px] h-20 rounded-[6px] bg-blue-2 right-[-1px] bottom-0 '>
                </span>
                <span data-aos="fade-right" data-aos-duration="1000" className='block absolute w-20 h-[6px] rounded-[6px] bg-blue-2 right-[0px] bottom-[-1.5px] '></span>
            </div>
            {openModal &&
                <DialogCard
                    openDialog={openModal}
                    setOpenDialog={setOpenModal}
                    image={image}
                    title={title}
                    body={body}
                />
            }

        </>
    )
}

export default FacilitiesCard