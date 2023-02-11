import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import Aruddho from "../public/Aruddho.png";
import School from "../public/school.png";
import BSRS from "../public/bsrs.png";
import Quanta from "../public/quanta.png";
import Nababs from "../public/nabab.png";
import Margine from "../public/margin.png";
import Cyber from "../public/cyber.png";
import Artas from '../public/artas.png'; 
import Softulas from '../public/softulas.png'; 
import BS from "../public/bs.png"




export default function Clients() {
  return (

    <div className="mt-40 opacity-75 flex justify-around max-sm:hidden">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        Mousewheel={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div className="flex justify-around text-center ">
          
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
              <Image src={Quanta} alt="Quanta robotics"/>
            <h1 className="text-2xl font-bold">Quanta robotics</h1>
           
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
              <Image  src={Artas} alt="artas "/>
              <h1 className="text-2xl font-bold">Artas Construction</h1>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
            <Image src={Softulas} alt="Softulas"/>
              <h1 className="text-2xl font-bold">Softulas</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
            <Image src={BSRS} alt="BSRS"/>
              <h1 className="text-2xl font-bold">BSRS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
              <Image src={Aruddho} alt="Aruddho 71"/>
              <h1 className="text-xl font-bold">Aruddho ekattor</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
            <Image src={Cyber} alt="Cyberteens"/>
              <h1 className="text-2xl font-bold">Cyber teens</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
            <Image  src={BS} alt="BS"/>
              <h1 className="text-2xl font-bold">Behind the study</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
            <Image src={Margine} alt="Margine"/>
              <h1 className="text-2xl font-bold">Ascend</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
            <Image src={School} alt="School"/>
              <h1 className="text-2xl font-bold">School of robotics</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
            <Image src={Nababs} alt="Nababs"/>
              <h1 className="text-2xl font-bold">Nababs dine</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
              <h1 className="text-2xl font-bold">Boi bodol</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-9 rounded-lg h-32 bg-red-200 shadow-sm flex space-x-4">
              <h1 className="text-2xl font-bold">Mental healtch care BD</h1>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
