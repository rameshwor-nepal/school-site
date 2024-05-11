import * as React from "react"
import Image from "next/image"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function Certificate() {
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
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="md:h-[18rem]  h-[14rem] w-full relative">
                            <Image
                                src={'/plumbing-home.jpg'}
                                alt='hero image'
                                fill
                                className='object-cover rounded-xl'
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="md:h-[18rem]  h-[14rem] w-full relative">
                            <Image
                                src={'/p5.jpg'}
                                alt='hero image'
                                fill
                                className='object-cover rounded-xl'
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="md:h-[18rem] h-[14rem] w-full relative">
                            <Image
                                src={'/p6.jpg'}
                                alt='hero image'
                                fill
                                className='object-cover rounded-xl'
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="md:h-[18rem]  h-[14rem] w-full relative">
                            <Image
                                src={'/plumbing-home.jpg'}
                                alt='hero image'
                                fill
                                className='object-cover rounded-xl'
                            />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>

    )
}
