"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import img1 from "@/assets/clients/client-1.png";
import img2 from "@/assets/clients/client-2.png";
import img3 from "@/assets/clients/client-3.png";
import img4 from "@/assets/clients/client-4.png";
import img5 from "@/assets/clients/client-5.png";
import img6 from "@/assets/clients/client-6.png";
import img7 from "@/assets/clients/client-7.png";
import img8 from "@/assets/clients/client-8.png";
import Image from "next/image";
import style from "./Client.module.css";

const Client = () => {
  const clients = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div>
      <Swiper
        spaceBetween={10}
        loop={true}
        speed={600}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className={`flex items-center  justify-center pr-20  h-auto ${style.clients}`}
      >
        <div className="w-[90%] mx-auto">
          {clients.map((clientImg, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={clientImg}
                  alt="client"
                  width={100}
                  height={100}
                  className={`${style.slideImg} h-auto`}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Client;
