"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import FourthSlide from './FourthSlide';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><FirstSlide /></SwiperSlide>
        <SwiperSlide><SecondSlide /></SwiperSlide>
        <SwiperSlide><ThirdSlide /></SwiperSlide>
        <SwiperSlide><FourthSlide /></SwiperSlide>
      </Swiper>
    </>
  );
}
