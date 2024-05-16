"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaNewspaper } from 'react-icons/fa6'
import { PiTargetBold } from 'react-icons/pi'
import { GiBoltEye } from 'react-icons/gi'
import { Certificate } from './Certificate'
import FAQ from './FAQ'

interface PropI {
    schoolHistory: {
        data: SchoolHistoryI[];
        message: string;
    };
    certificateImages: {
        data: CertificateI[];
        message: string;
    };
    schoolFeatures: {
        data: CertificateI[];
        message: string;
    };
    faqData: {
        data: FAQI[];
        message: string;
    };

}
const SchoolInfo = ({ schoolHistory, certificateImages, schoolFeatures, faqData }: PropI) => {
    const [historyData, setHistoryData] = useState<SchoolHistoryI | null>(null)
    const [uploadedDocument, setUploadedDocument] = useState<CertificateI[]>([]);

    useEffect(() => {
        if (schoolHistory) {
            setHistoryData(schoolHistory.data[0])

        } else {
            console.log('Failed to fetch school history data:', schoolHistory);
        }
    }, [schoolHistory]);

    useEffect(() => {
        if (certificateImages) {
            setUploadedDocument(certificateImages.data)

        } else {
            console.log('Failed to fetch school history data:', certificateImages);
        }
    }, [certificateImages]);

    return (
        <main className='mb-12 '>
            {/* history section */}
            <section className='grid md:grid-cols-3 grid-cols-1 gap-8 xl:px-32 md:px-24 px-12 py-12 h-[20rem]'>
                <div>
                    <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-2 border-cyan-1'>
                        Business&apos;s History
                    </h1>
                </div>
                <p className='h-full w-full overflow-hidden text-lg'>
                    {historyData?.history.slice(0, 350)}
                </p>
                <p className='h-full w-full overflow-hidden text-lg line-clamp-[8]'>
                    {historyData?.history.slice(350)}
                </p>
            </section>

            {/* mission, vision and objective section */}
            <section className="relative h-[30rem] w-full xl:px-32 md:px-24 px-12 md:py-7 lg:py-14 sm:py-14 py-6 overflow-hidden">
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(22,33,84,0.8),rgba(22,33,84,0.8))]'></div>
                <Image
                    src={'/school.jpg'}
                    alt='hero image'
                    fill
                    className='object-fill bg-center'
                />
                <div className='absolute z-20 h-full'>
                    <div className=' flex flex-col md:flex-row items-start gap-10'>
                        <div className='flex flex-col gap-6 p-4 max-w-[28rem] text-white'>
                            <i>
                                <FaNewspaper size={40} />
                            </i>
                            <h2 className='text-3xl text-cyan-1 font-bold'>
                                School Mission
                            </h2>
                            <p className='text-lg max-h-56 overflow-hidden line-clamp-[8]'>
                                {historyData?.mission}
                            </p>
                        </div>
                        <div className='flex flex-col gap-6 p-4 max-w-[28rem] text-white'>
                            <i>
                                <GiBoltEye size={40} />
                            </i>
                            <h2 className='text-3xl text-cyan-1 font-bold'>
                                School Vision
                            </h2>
                            <p className='text-lg max-h-56 overflow-hidden line-clamp-[8]'>
                                {historyData?.vision}
                            </p>
                        </div>
                        <div className='flex flex-col gap-6 p-4 max-w-[28rem] text-white'>
                            <i>
                                <PiTargetBold size={40} />
                            </i>
                            <h2 className='text-3xl text-cyan-1 font-bold'>
                                School Objective
                            </h2>
                            <p className='text-lg max-h-56 overflow-hidden line-clamp-[8]'>
                                {historyData?.objective}
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
                        src={'/man-2.jpg'}
                        alt='principal image'
                        fill
                        className='object-cover rounded-xl'
                    />
                </div>
                <div className=''>
                    <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-3 border-cyan-1'>
                        Manager&apos;s Message
                    </h1>
                    <p className='w-[42rem] max-h-[26rem] my-8 text-lg line-clamp-[15]'>
                        <span className="text-cyan-1 text-5xl font-bold pr-2"> “</span>
                        {historyData?.principalMessage?.slice(0, 412)}
                        <br /> <br />
                        {historyData?.principalMessage?.slice(412)}
                        <span className="text-cyan-1 text-4xl font-bold m-0"> ”</span>
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
                    <Certificate schoolCertificates={uploadedDocument} />
                </div>
            </section>

            {/* discover our school */}
            <section className="relative min-h-screen max-h-fit w-full  md:px-20 px-12 text-center md:py-7 lg:py-14 sm:py-14 py-6 overflow-hidden">
                <div className='absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(22,33,84,0.9),rgba(22,33,84,0.8))]'></div>
                <Image
                    src={'/school.jpg'}
                    alt='hero image'
                    fill
                    className='object-fill bg-center'
                />
                <div className='absolute z-20 w-[85%]  text-white'>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='text-3xl text-cyan-1 font-bold px-1 '>
                            Discover Our Business
                        </h1>
                        <h6 className='text-lg leading-6 max-w-[50rem]'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam culpa corporis sit nulla ad, minima ut possimus magnam
                            porro voluptatum at accusamus debitis expedita quaerat unde deserunt, magni, asperiores dignissimos?
                        </h6>
                        <div className='w-full pt-3 grid grid-cols-4 items-center  gap-x-8 gap-y-[68px]'>

                            {schoolFeatures && schoolFeatures?.data.length > 0 ? (

                                schoolFeatures?.data.map((feature) => (
                                    <div className='col-span-4 md:col-span-2 lg:col-span-1' key={feature.id}>
                                        <div className='w-full h-[10rem] relative flex items-center justify-center'>
                                            <Image
                                                src={feature.image || '/plumbing-home.jpg'}
                                                alt='features image'
                                                fill
                                                className='object-cover rounded-xl'
                                            />
                                            <div className='px-3 py-3 absolute bottom-[-30px] border-b-8 border-cyan-1 bg-slate-50 text-blue-1 transition duration-500 ease-out hover:bg-cyan-1 hover:text-gray-50'>
                                                <h2 className='text-[16px] font-semibold'>{feature.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h1 className='text-center text-xl font-semibold text-gray-3'>
                                    There is no any feature
                                </h1>
                            )
                            }
                        </div>

                    </div>
                </div>
            </section>

            {/* faq section */}
            <div className="relative h-fit w-full xl:px-32 md:px-24 px-12 text-center md:py-7 lg:py-14 sm:py-14 py-6 overflow-hidden">
                <FAQ faqData={faqData?.data} />
            </div>
        </main>
    )
}

export default SchoolInfo