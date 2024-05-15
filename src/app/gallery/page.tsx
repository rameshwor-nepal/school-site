import React from 'react'
import Footer from '../component/home/Footer'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'
import GalleryCard from '../component/ui/card/GalleryCard'

const GalleryPage = () => {
    return (
        <div>
            <Navbar />
            <SubHeader subTitle={'Our Gallery'} img={'classroom.jpg'} />
            <div className='xl:px-32 md:px-24 px-12 py-12'>
                <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight border-b-4 w-fit px-1 py-2 border-cyan-1'>
                    Our Memories
                </h1>
                <GalleryCard />
            </div>
            <Footer />
        </div>
    )
}

export default GalleryPage