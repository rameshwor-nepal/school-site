import React from 'react'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'
import ProgramCard from '../component/ui/card/ProgramCard'
import Footer from '../component/home/Footer'
import { fetchSchoolProgram } from '../feature/schoolAbout/schoolProgram'

const ProgramPage = async () => {
    const response = await fetchSchoolProgram();
    const schoolProgram = await response.json();
    if (!response) {
        console.error('Failed to fetch school program data:');
    }

    return (
        <div>
            <Navbar />
            <SubHeader subTitle={'Know About Our Program'} img={'classroom.jpg'} />
            <div className='mt-6'>
                <ProgramCard schoolProgram={schoolProgram} />
            </div>
            <Footer />
        </div>
    )
}

export default ProgramPage