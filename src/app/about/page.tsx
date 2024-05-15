import React from 'react'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'
import SchoolInfo from '../component/about/SchoolInfo'
import Footer from '../component/home/Footer'
import { fetchSchoolHistory } from '../feature/schoolHistory/schoolHistory'

const AboutPage = async () => {
    const response = await fetchSchoolHistory();
    const schoolHistory = await response.json();
    if (!response) {
        console.error('Failed to fetch school history data:');
    }

    return (
        <div>
            <Navbar />
            <SubHeader subTitle={'Know More About Us'} img={'school.jpg'} />
            <SchoolInfo schoolHistory={schoolHistory} />
            <Footer />
        </div>
    )
}

export default AboutPage