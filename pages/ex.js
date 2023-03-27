import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import Data from "./api/data.json";



// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>  {Data.map(item => (
          <div className="mt-10">
          <div className="grid grid-cols-3 place-items-center gap-0 grid-flow-row-dense max-sm:grid-cols-1">
             {/* bsrs section */}
            <div className="bg-gray-100 p-6 pl-10 pr-3 rounded-lg min-w-full">
              <h1 className="text-xl font-bold text-blue-700 text-left capitalize ">
               {item.title}
              </h1>
              <p className="text-gray-700 font-bold">{item.time} </p>
            </div>
            <div className="bg-red-600 text-gray-100 p-4 rounded-3xl font-bold">
              <p>At</p>{" "}
            </div>
  
            <div className="bg-gray-100 border-1 p-6  rounded-lg min-w-full">
              <h1 className="text-xl font-bold text-blue-700 capitalize ">
          {item.orgname}
              </h1>
              <p className="text-sm text-gray-800 font-bold">{item.location}</p>
              <p className="text-gray-900">{item.position}</p>
              <br />
  
              <p className="text-sm text-gray-700 leading-6">
               {item.body}
              </p>
            </div>
  
            {/* bsrs section */}
            
          </div>
          
        </div>
      ))}</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}