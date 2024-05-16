import React from 'react'
import Image from 'next/image'

const FAQ = ({ faqData }: { faqData: FAQI[] }) => {
    return (
        <div className='flex  gap-16 justify-between max-sm:flex-wrap'>
            <div className='w-[52rem] h-[30rem] mt-12 relative bg-slate-300 rounded-t-[50%]'>
                <Image
                    src={'/man-2.jpg'}
                    alt='hero image'
                    fill
                    className='object-cover rounded-t-[50%]'
                />
            </div>
            <div className="w-full space-y-4 mt-10">
                <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-2 mb-12 border-cyan-1'>
                    Frequently Asked Questions ?
                </h1>
                {
                    faqData && faqData.length > 0 ? (
                        faqData.map((el) => (
                            <details className="group border-s-4 border-blue-3 bg-blue-50 px-6 py-3" key={el.id}>
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                                    <h2 className="text-lg font-medium text-gray-900">
                                        {el?.question || ''}
                                    </h2>

                                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700  line-clamp-[5]">
                                    {el?.answer || ''}
                                </p>
                            </details>
                        ))

                    ) : (
                        <h1>
                            There is no FAQs
                        </h1>
                    )
                }
            </div>
        </div>
    )
}

export default FAQ