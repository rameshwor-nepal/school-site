import React from 'react'
import Image from 'next/image'

const GalleryCard = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-8">
                <div className="h-56 rounded-xl cursor-pointer relative hover:scale-[1.03] transition duration-300 ease-in-out">
                    <div
                        className="absolute z-20 h-full w-full rounded-xl bg-[linear-gradient(to_top,rgba(55,92,157,0.1),rgba(22,33,84,0.8))] opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                    </div>
                    <div className='absolute h-full rounded-xl w-full z-10 bg-[linear-gradient(to_bottom,rgba(55,92,157,0.1),rgba(22,33,84,0.8))]'>

                    </div>
                    <Image
                        src={'/student.jpg'}
                        alt='hero image'
                        fill
                        className='object-cover rounded-xl'
                    />
                    <h3 className='absolute text-white text-xl  font-medium bottom-2 left-2 z-20'>
                        Business Photo Collection
                    </h3>
                </div>

                <div className="h-56 rounded-xl cursor-pointer relative hover:scale-[1.03] transition duration-300 ease-in-out">
                    <div
                        className="absolute z-20 h-full w-full rounded-xl bg-[linear-gradient(to_top,rgba(55,92,157,0.1),rgba(22,33,84,0.8))] opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                    </div>
                    <div className='absolute h-full rounded-xl w-full z-10 bg-[linear-gradient(to_bottom,rgba(55,92,157,0.1),rgba(22,33,84,0.8))]'>

                    </div>
                    <Image
                        src={'/student.jpg'}
                        alt='hero image'
                        fill
                        className='object-cover rounded-xl'
                    />
                    <h3 className='absolute text-white text-xl  font-medium bottom-2 left-2 z-20'>
                        Business Photo Collection
                    </h3>
                </div>

                <div className="h-56 rounded-xl cursor-pointer relative hover:scale-[1.03] transition duration-300 ease-in-out">
                    <div
                        className="absolute z-20 h-full w-full rounded-xl bg-[linear-gradient(to_top,rgba(55,92,157,0.1),rgba(22,33,84,0.8))] opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                    </div>
                    <div className='absolute h-full rounded-xl w-full z-10 bg-[linear-gradient(to_bottom,rgba(55,92,157,0.1),rgba(22,33,84,0.8))]'>

                    </div>
                    <Image
                        src={'/student.jpg'}
                        alt='hero image'
                        fill
                        className='object-cover rounded-xl'
                    />
                    <h3 className='absolute text-white text-xl  font-medium bottom-2 left-2 z-20'>
                        Business Photo Collection
                    </h3>
                </div>

                <div className="h-56 rounded-xl cursor-pointer relative hover:scale-[1.03] transition duration-300 ease-in-out">
                    <div
                        className="absolute z-20 h-full w-full rounded-xl bg-[linear-gradient(to_top,rgba(55,92,157,0.1),rgba(22,33,84,0.8))] opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                    </div>
                    <div className='absolute h-full rounded-xl w-full z-10 bg-[linear-gradient(to_bottom,rgba(55,92,157,0.1),rgba(22,33,84,0.8))]'>

                    </div>
                    <Image
                        src={'/student.jpg'}
                        alt='hero image'
                        fill
                        className='object-cover rounded-xl'
                    />
                    <h3 className='absolute text-white text-xl  font-medium bottom-2 left-2 z-20'>
                        Business Photo Collection
                    </h3>
                </div>

                <div className="h-56 rounded-xl cursor-pointer relative hover:scale-[1.03] transition duration-300 ease-in-out">
                    <div
                        className="absolute z-20 h-full w-full rounded-xl bg-[linear-gradient(to_top,rgba(55,92,157,0.1),rgba(22,33,84,0.8))] opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                    </div>
                    <div className='absolute h-full rounded-xl w-full z-10 bg-[linear-gradient(to_bottom,rgba(55,92,157,0.1),rgba(22,33,84,0.8))]'>

                    </div>
                    <Image
                        src={'/student.jpg'}
                        alt='hero image'
                        fill
                        className='object-cover rounded-xl'
                    />
                    <h3 className='absolute text-white text-xl  font-medium bottom-2 left-2 z-20'>
                        Business Photo Collection
                    </h3>
                </div>

                <div className="h-56 rounded-xl cursor-pointer relative hover:scale-[1.03] transition duration-300 ease-in-out">
                    <div
                        className="absolute z-20 h-full w-full rounded-xl bg-[linear-gradient(to_top,rgba(55,92,157,0.1),rgba(22,33,84,0.8))] opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                    </div>
                    <div className='absolute h-full rounded-xl w-full z-10 bg-[linear-gradient(to_bottom,rgba(55,92,157,0.1),rgba(22,33,84,0.8))]'>

                    </div>
                    <Image
                        src={'/student.jpg'}
                        alt='hero image'
                        fill
                        className='object-cover rounded-xl'
                    />
                    <h3 className='absolute text-white text-xl  font-medium bottom-2 left-2 z-20'>
                        Business Photo Collection
                    </h3>
                </div>
            </div>
        </>
    )
}

export default GalleryCard