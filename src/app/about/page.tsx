import React from 'react'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'
import SchoolInfo from '../component/about/SchoolInfo'
import Footer from '../component/home/Footer'

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <SubHeader subTitle={'Know More About Us'} img={'school.jpg'} />
            <SchoolInfo />
            <Footer />
        </div>
    )
}

export default AboutPage