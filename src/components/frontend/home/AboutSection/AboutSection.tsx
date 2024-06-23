import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import style from "./AboutSection.module.css";
import img from "@/assets/Revenue-bro.png";
import Image from "next/image";
import { CirclePlus, MoveRight } from "lucide-react";
import SecondaryButton from "@/components/ui/Button/SecondaryButton";
import CountUpInfo from "@/components/shared/CountUpInfo/CountUpInfo";

const AboutSection = () => {
  return (
    <div className={`${style.about} pt-8 lg:px-16 px-5`}>
      {/* <PrimaryHeading title="About Us" /> */}
      {/* <CountUpInfo /> */}
      <div className="flex flex-col lg:flex-row space-x-8 items-center">
        <div className="lg:w-[40%] w-full">
          <Image
            src={img}
            alt="about"
            width={500}
            height={500}
            className="w-full  h-auto "
          />
        </div>
        <div className="lg:w-[60%]">
          <p className="text-gray-800 text-[17px] font-medium tracking-wide text-justify">
            At Techneto It, we are dedicated to transforming your digital
            presence through innovative web development and strategic digital
            marketing solutions. With a passionate team of experts, we pride
            ourselves on delivering customized services that drive success and
            growth for your business.
          </p>
          <ul className=" space-y-3 text-gray-700 mt-6 list-inside dark:text-gray-400">
            <li className="flex items-center space-x-2 ">
              <CirclePlus className="text-[#1AA150] shrink-0" />
              <span className="tracking-wide">
                We stay ahead of industry trends to provide cutting-edge
                solutions.
              </span>
            </li>
            <li className="flex items-center space-x-2 ">
              <CirclePlus className="text-[#1AA150] shrink-0" />
              <span className="tracking-wide">
                We build trust through transparency and honest communication.
              </span>
            </li>
            <li className="flex items-center space-x-2 ">
              <CirclePlus className="text-[#1AA150] shrink-0" />
              <span className="tracking-wide">
                We believe in the power of teamwork and partnership.
              </span>
            </li>
            <li className="flex items-center space-x-2  ">
              <CirclePlus className="text-[#1AA150] shrink-0" />
              <span className="tracking-wide">
                We strive for excellence in everything we do, ensuring
                high-quality outcomes.
              </span>
            </li>
          </ul>
          <SecondaryButton
            title="Read More"
            href="/about-us"
            className={`mt-10 `}
            icon={<MoveRight />}
          />
        </div>
      </div>
      <CountUpInfo />
    </div>
  );
};

export default AboutSection;
