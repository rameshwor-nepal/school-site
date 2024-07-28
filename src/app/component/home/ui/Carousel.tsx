"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    "/boys.jpg",
    "/handwriting.jpg",
    "/dancing.jpg",
    "/computer-lab.jpeg",
  ];

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + items.length) % items.length;
    setActiveIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % items.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className=" w-full" data-carousel="slide">
      <div className="relative h-screen w-full rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in ${index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            data-carousel-item
          >
            <Image src={item} fill alt={`Slide ${index + 1}`} className='object-cover' />
            {/* <img
              src=
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            /> */}
          </div>
        ))}
      </div>

      <div className="absolute z-50 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-gray-200' : 'bg-gray-500'
              }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-50 flex items-center justify-center h-full px-4 cursor-pointer "
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-400 ease-in">
          <svg
            className="w-4 h-4 text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-50 flex items-center justify-center h-full px-4 cursor-pointer group"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-400 ease-in">
          <svg
            className="w-4 h-4 text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
