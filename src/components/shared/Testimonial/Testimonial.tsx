"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "MD Of BrightFuture Solutions",
      profileImg:
        "https://st2.depositphotos.com/1037987/42002/i/450/depositphotos_420021494-stock-photo-portrait-female-owner-gift-store.jpg",
      description:
        "Working with Techneto It has been a game-changer for our business. Their team took the time to understand our unique needs and delivered a website that not only looks amazing but also functions seamlessly. The digital marketing strategies they've implemented have significantly increased our online presence and lead generation. We're thrilled with the results and highly recommend Techneto It to any business looking to elevate their digital footprint!",
    },
    {
      name: "Michael Thompson",
      title: "CEO Of UrbanStyle Interiors",
      profileImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      description:
        "Techneto It exceeded our expectations in every way. Their web development team created a stunning, user-friendly site that has received rave reviews from our clients. But they didn't stop there—their digital marketing expertise has driven a noticeable uptick in our web traffic and social media engagement. Their professionalism, creativity, and commitment to our success are unmatched. We're incredibly grateful for their partnership.",
    },
    {
      name: "Emily Parker",
      title: "MD Of GreenLeaf Organics",
      profileImg:
        "https://st.depositphotos.com/8214686/53566/i/450/depositphotos_535666422-stock-photo-studio-head-shot-of-a.jpg",
      description:
        "We couldn't be happier with the service provided by Techneto It. From the initial consultation to the final launch, their team was responsive, knowledgeable, and dedicated to making our vision a reality. The new website they built for us is not only beautiful but also optimized for performance and SEO. Their digital marketing efforts have also paid off, with a significant boost in our online sales. Techneto It is a top-notch agency, and we highly recommend them to anyone looking to grow their online presence.",
    },
  ];
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
          {testimonials.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="container max-w-5xl mx-auto">
                  <div className="flex flex-col pb-12 items-center w-full space-y-4 rounded-md lg:h-full  dark:bg-gray-50 dark:text-gray-800">
                    <Image
                      src={item.profileImg}
                      alt=""
                      width={300}
                      height={300}
                      className="w-28 h-28 rounded-full object-cover dark:bg-gray-500"
                    />
                    <div className="text-center dark:text-gray-600">
                      <p className="text-2xl font-bold text-[#37517E]">
                        {item.name}
                      </p>
                      <p className="text-gray-600">{item.title}</p>
                    </div>
                    <blockquote className="w-full text-slate-700 tracking-normal text-xl font-medium text-center">
                      {item.description}
                    </blockquote>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
