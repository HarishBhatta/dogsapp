"use client";

// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import BrandsCard from './brandscard';

export default function BrandSlider() {
    const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper group hover:cursor-pointer"
      >
        <SwiperSlide><BrandsCard /></SwiperSlide>
        <SwiperSlide><BrandsCard /></SwiperSlide>
        <SwiperSlide><BrandsCard /></SwiperSlide>
        <SwiperSlide><BrandsCard /></SwiperSlide>
        <SwiperSlide><BrandsCard /></SwiperSlide>
        <SwiperSlide><BrandsCard /></SwiperSlide>
        <SwiperSlide><BrandsCard /></SwiperSlide>
      </Swiper>
    </>
  );
}
