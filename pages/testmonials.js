import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import Data from "./api/testi.json";
import Imti from "../public/imti.png";

// import required modules
import { EffectCards } from "swiper";
import Image from "next/image";

export default function App() {
  return (
    <div className="mt-40 mx-20  max-sm:mx-5">
      <h1 className="text-center text-3xl font-bold ">Testimonials</h1>
      <p className="text-center">I work with many org what people think about me se my testmonials</p>
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 mt-40">
        <div className="rounded-lg">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-96 h-96  bg-gray-50 rounded-lg"
          >
            {Data.map((item) => (
              <SwiperSlide>
                <figure class="flex flex-col  justify-center p-8 rounded-lg text-left border-b ">
                  <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <p class="text-sm font-thin text-gray-900 ">{item.body}</p>
                  </blockquote>
                  <figcaption class="flex items-center justify-center space-x-3">
                    <Image
                      class="rounded-full w-9 h-9"
                      width={1}
                      height={1}
                      src={Imti}
                      alt="profile picture"
                    />
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                      <div>{item.name}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        {item.position}
                      </div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        {item.orgname}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
        <h1 className="text-center text-3xl font-bold ">Testimonials</h1>

          <p className="mt-20 text-justify">
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
}
