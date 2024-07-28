"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveSlide((prevIndex) => (prevIndex + 1) % 4);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);
    const handleSlideClick = (index: number) => {
        setActiveSlide(index);
    };

    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 md:h-[40rem]">
                    <div className={` duration-800 ease-in-out opacity-${activeSlide === 0 ? '100' : '0'} transition-opacity`} data-carousel-item style={{ display: activeSlide === 0 ? 'block' : 'none' }}>
                        <Image src={"/boys.jpg"} fill alt="..." className='object-cover' />
                    </div>
                    <div className={`duration-800 ease-in-out opacity-${activeSlide === 1 ? '100' : '0'} transition-opacity`} data-carousel-item style={{ display: activeSlide === 1 ? 'block' : 'none' }}>
                        <Image src={"/handwriting.jpg"} fill alt="..." className='object-cover' />
                    </div>
                    <div className={`duration-800 ease-in-out opacity-${activeSlide === 2 ? '100' : '0'} transition-opacity`} data-carousel-item style={{ display: activeSlide === 2 ? 'block' : 'none' }}>
                        <Image src={"/dancing.jpg"} fill alt="..." className='object-cover' />
                    </div>
                    <div className={`duration-800 ease-in-out opacity-${activeSlide === 3 ? '100' : '0'} transition-opacity`} data-carousel-item style={{ display: activeSlide === 3 ? 'block' : 'none' }}>
                        <Image src={"/computer-lab.jpeg"} fill alt="..." className='object-cover' />
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className={`w-3 h-3 bg-gray-3 rounded-full ${activeSlide === 0 ? 'active' : ''}`} aria-current="true" aria-label="Slide 1" onClick={() => handleSlideClick(0)}></button>
                    <button type="button" className={`w-3 h-3 bg-gray-3 rounded-full ${activeSlide === 1 ? 'active' : ''}`} aria-current="false" aria-label="Slide 2" onClick={() => handleSlideClick(1)}></button>
                    <button type="button" className={`w-3 h-3 bg-gray-3 rounded-full ${activeSlide === 2 ? 'active' : ''}`} aria-current="false" aria-label="Slide 3" onClick={() => handleSlideClick(2)}></button>
                    <button type="button" className={`w-3 h-3 bg-gray-3 rounded-full ${activeSlide === 3 ? 'active' : ''}`} aria-current="false" aria-label="Slide 4" onClick={() => handleSlideClick(3)}></button>
                </div>
            </div>
        </>
    );
};

export default Carousel;
