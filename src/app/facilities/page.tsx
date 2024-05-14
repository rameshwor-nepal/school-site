import React from 'react'
import Footer from '../component/home/Footer'
import Navbar from '../component/ui/Header/Navbar'
import SubHeader from '../component/ui/Header/SubHeader'
import FacilitiesCard from '../component/ui/card/FacilitiesCard'

const Facilities = () => {
    return (
        <div>
            <Navbar />
            <SubHeader subTitle={'Know About Our Facilities'} img={'classroom.jpg'} />
            <div className='h-fit grid lg:grid-cols-2 grid-cols-1 gap-8 xl:px-32 md:px-24 px-12 py-12 bg-blue-4'>
                <FacilitiesCard
                    image='student.jpg'
                    title='Transportation'
                    body=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?'
                />
                <FacilitiesCard
                    image='student.jpg'
                    title='Transportation'
                    body=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?'
                />
                <FacilitiesCard
                    image='student.jpg'
                    title='Transportation'
                    body=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?'
                />
                <FacilitiesCard
                    image='student.jpg'
                    title='Transportation'
                    body=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?'
                />
                <FacilitiesCard
                    image='student.jpg'
                    title='Transportation'
                    body=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?'
                />
                <FacilitiesCard
                    image='student.jpg'
                    title='Transportation'
                    body=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?'
                />
            </div>
            <Footer />
        </div>
    )
}

export default Facilities