import React from 'react'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'

const AboutPage = () => {
    return (
        <div className='text-xl'>
            <Navbar />
            <SubHeader subTitle={'Know More About Us'} img={'school.jpg'} />
        </div>
    )
}

export default AboutPage