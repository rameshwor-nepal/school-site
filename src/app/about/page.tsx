import React from 'react'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'
import SchoolInfo from '../component/about/SchoolInfo'
import Footer from '../component/home/Footer'
import { fetchFAQData, fetchSchoolCertificate, fetchSchoolFeatures, fetchSchoolHistory } from '../feature/schoolAbout/aboutSchool'

const AboutPage = async () => {
    const response = await fetchSchoolHistory();
    const schoolHistory = await response.json();
    if (!response) {
        console.error('Failed to fetch school history data:');
    }

    const certificateResponse = await fetchSchoolCertificate();
    const certificateData = await certificateResponse.json();
    if (!certificateResponse) {
        console.log("Failed to fetch Certificate images")
    }

    const schoolFeaturesResponse = await fetchSchoolFeatures();
    const schoolFeaturesData = await schoolFeaturesResponse.json();
    if (!schoolFeaturesResponse) {
        console.log("Failed to load school features data")
    }

    const faqResponse = await fetchFAQData();
    const faqDatas = await faqResponse.json();
    if (!faqResponse) {
        console.log("Failed to load school features data")
    }

    return (
        <div>
            <Navbar />
            <SubHeader subTitle={'Know More About Us'} img={'school.jpg'} />
            <SchoolInfo
                schoolHistory={schoolHistory}
                certificateImages={certificateData}
                schoolFeatures={schoolFeaturesData}
                faqData={faqDatas}
            />
            <Footer />
        </div>
    )
}

export default AboutPage