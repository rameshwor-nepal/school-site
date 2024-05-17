import React from 'react'
import Footer from '../component/home/Footer'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'
import FacilitiesCard from '../component/ui/card/FacilitiesCard'
import { fetchSchoolFacilities } from '../feature/schoolAbout/schoolFacilities'

const Facilities = async () => {
    const response = await fetchSchoolFacilities();
    const schoolfacilities: {
        data: FacilitiesI[];
        message: string;
    } = await response.json();

    if (!response) {
        console.error('Failed to fetch school facilities data:');
    }

    return (
        <div>
            <Navbar />
            <SubHeader subTitle={'Know About Our Facilities'} img={'classroom.jpg'} />
            <div className='h-fit grid lg:grid-cols-2 grid-cols-1 gap-8 xl:px-32 md:px-24 px-12 py-12 bg-blue-4'>
                {
                    schoolfacilities && schoolfacilities.data.length > 0 ? (
                        schoolfacilities.data.map((el, index) => (
                            <FacilitiesCard
                                key={index}
                                image={el.image}
                                title={el.title}
                                body={el.desc}
                            />
                        ))
                    ) : (
                        <h1 className='text-center text-xl font-semibold text-gray-3'>
                            There is no feature added
                        </h1>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Facilities