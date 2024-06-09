"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
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
          type: "bullets",
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="flex items-center justify-center">
          <SwiperSlide>
            <div className="container max-w-2xl mx-auto">
              <div className="flex flex-col pb-12 items-center w-full space-y-4 rounded-md lg:h-full  dark:bg-gray-50 dark:text-gray-800">
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-32 h-32 rounded-full dark:bg-gray-500"
                />
                <div className="text-center dark:text-gray-600">
                  <p className="text-2xl font-bold text-[#37517E]">
                    Leroy Jenkins
                  </p>
                  <p className="text-gray-600">E-commerce Owner </p>
                </div>
                <blockquote className="w-full text-slate-700 tracking-normal text-xl font-medium text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  culpa iusto fugiat vel quidem recusandae sint exercitationem
                  aut illum mollitia!
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container max-w-2xl mx-auto">
              <div className="flex flex-col pb-12 items-center w-full space-y-4 rounded-md lg:h-full  dark:bg-gray-50 dark:text-gray-800">
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-32 h-32 rounded-full dark:bg-gray-500"
                />
                <div className="text-center dark:text-gray-600">
                  <p className="text-2xl font-bold text-[#37517E]">
                    Bill Gates
                  </p>
                  <p className="text-gray-600">E-commerce Owner </p>
                </div>
                <blockquote className="w-full text-slate-700 tracking-normal text-xl font-medium text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  culpa iusto fugiat vel quidem recusandae sint exercitationem
                  aut illum mollitia!
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container max-w-2xl mx-auto">
              <div className="flex flex-col pb-12 items-center w-full space-y-4 rounded-md lg:h-full  dark:bg-gray-50 dark:text-gray-800">
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-32 h-32 rounded-full dark:bg-gray-500"
                />
                <div className="text-center dark:text-gray-600">
                  <p className="text-2xl font-bold text-[#37517E]">Elon Mask</p>
                  <p className="text-gray-600">E-commerce Owner </p>
                </div>
                <blockquote className="w-full text-slate-700 tracking-normal text-xl font-medium text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  culpa iusto fugiat vel quidem recusandae sint exercitationem
                  aut illum mollitia!
                </blockquote>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      {/* <div className="container max-w-2xl mx-auto">
        <div className="flex flex-col pb-12 items-center w-full space-y-4 rounded-md lg:h-full  dark:bg-gray-50 dark:text-gray-800">
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt=""
            width={100}
            height={100}
            className="w-32 h-32 rounded-full dark:bg-gray-500"
          />
          <div className="text-center dark:text-gray-600">
            <p className="text-2xl font-bold text-[#37517E]">Leroy Jenkins</p>
            <p className="text-gray-600">E-commerce Owner </p>
          </div>
          <blockquote className="w-full text-slate-700 tracking-normal text-xl font-medium text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa
            iusto fugiat vel quidem recusandae sint exercitationem aut illum
            mollitia!
          </blockquote>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonial;
