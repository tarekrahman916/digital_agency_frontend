import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import style from "./AboutSection.module.css";
import img from "@/assets/Revenue-bro.png";
import Image from "next/image";
import { CirclePlus, MoveRight } from "lucide-react";
import SecondaryButton from "@/components/ui/Button/SecondaryButton";
import CountUpInfo from "@/components/shared/CountUpInfo/CountUpInfo";

const AboutSection = () => {
  return (
    <div className={`${style.about} pt-20 lg:px-16 px-5`}>
      <PrimaryHeading title="About Us" />
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
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <ul className=" space-y-3 text-gray-700 mt-6 list-inside dark:text-gray-400">
            <li className="flex items-center space-x-2 ">
              <CirclePlus className="text-[#1AA150]" />
              <span className="tracking-wide">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
            <li className="flex items-center space-x-2 ">
              <CirclePlus className="text-[#1AA150]" />
              <span className="tracking-wide">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
            <li className="flex items-center space-x-2 ">
              <CirclePlus className="text-[#1AA150]" />
              <span className="tracking-wide">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
            <li className="flex items-center space-x-2  ">
              <CirclePlus className="text-[#1AA150]" />
              <span className="tracking-wide">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
