import React from 'react'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'
import ProgramCard from '../component/ui/card/ProgramCard'
import Footer from '../component/home/Footer'

const ProgramPage = () => {
    return (
        <div>
            <Navbar />
            <SubHeader subTitle={'Know About Our Program'} img={'classroom.jpg'} />
            <div className='mt-6'>
                <ProgramCard />
            </div>
            <Footer />
        </div>
    )
}

export default ProgramPage