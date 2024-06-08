import Image from "next/image";
import heroImg from "@/assets/hero-img.png";

import style from "./Banner.module.css";
import SecondaryButton from "@/components/ui/Button/SecondaryButton";
import WatchBtn from "@/components/ui/Button/WatchBtn";

const Banner = () => {
  return (
    <div className="lg:px-24 px-10 pt-40 pb-10 bg-[#37517e] grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      <div className="">
        <h1 className="text-5xl text-white">
          Better Solutions For Your Business
        </h1>
        <p className={`${style.para} `}>
          We are team of talented designers making websites with Bootstrap
        </p>

        <div className="flex gap-6 items-center">
          {" "}
          <SecondaryButton title="Get Started" href="/" />
          <WatchBtn />
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end ">
        <Image
          src={heroImg}
          alt="hero image"
          width={400}
          height={400}
          className={` ${style.heroImage} w-full`}
        />
      </div>
    </div>
  );
};

export default Banner;
