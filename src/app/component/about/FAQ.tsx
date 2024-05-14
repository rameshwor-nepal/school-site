import React from 'react'
import Image from 'next/image'

const FAQ = () => {
    return (
        <div className='flex items-start gap-20 justify-between max-sm:flex-wrap'>
            <div className='w-[50rem] h-[30rem] relative bg-slate-300 rounded-t-[50%]'>
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
                <details
                    className="group border-s-4 border-blue-3 bg-blue-50 p-6 "
                    open
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
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

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
                    </p>
                </details>

                <details
                    className="group border-s-4 border-blue-3 bg-blue-50 p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
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

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
                    </p>
                </details>
                <details
                    className="group border-s-4 border-blue-3 bg-blue-50 p-6"
                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
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

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                        recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
                    </p>
                </details>
            </div>
        </div>
    )
}

export default FAQ