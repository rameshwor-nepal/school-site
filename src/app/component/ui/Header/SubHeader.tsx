"use client"
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface PropI {
    subTitle: string;
    img: string;
}

const SubHeader = ({ subTitle, img }: PropI) => {
    const pathname = usePathname();
    const capitalizedPathname = pathname.charAt(1).toUpperCase() + pathname.slice(2).toLowerCase();

    return (
        <div className='h-96 w-full bg-blue-200 relative'>
            <div className='absolute h-full w-full z-10 bg-[linear-gradient(to_bottom,rgba(55,92,157,0.7),rgba(22,33,84,0.8))]'></div>
            <Image
                src={`/${img}`}
                alt='hero image'
                fill
                className='object-fill bg-center'
            />
            <div className='absolute z-20 text-white bottom-16 left-16'>
                <h6 className='text-xl font-normal mb-3 text-cyan-1'>{subTitle}</h6>
                <h1 className='text-5xl font-semibold'>
                    {capitalizedPathname}
                </h1>
            </div>
        </div>
    )
}

export default SubHeader