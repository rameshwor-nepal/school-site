import * as React from "react"
import Image from "next/image"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function Certificate({ schoolCertificates }: { schoolCertificates: CertificateI[] }) {
    return (
        <>
            <h1 className='text-3xl text-blue-2 font-extrabold leading-extra-tight border-b-4 w-fit pb-3 border-cyan-1'>
                Certifications
            </h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full pt-12"
            >
                <CarouselContent>
                    {
                        schoolCertificates.map((el) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={el.id}>
                                <div className="md:h-[18rem] rounded-xl  h-[14rem] w-full shadow-[0_2px_5px_3px_rgba(0,0,0,0.1)] relative">
                                    <Image
                                        src={el?.image || '/default-certificate.png'}
                                        alt='hero image'
                                        fill
                                        className='object-cover rounded-xl'
                                    />
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>

    )
}
