import Image from "next/image";
import style from "./Footer.module.css";
import logo from "@/assets/main-logo.png";
import { Divider } from "antd";
import SocialLinks from "@/components/ui/SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <div className="pt-14 pb-5 bg-[#001529]">
      <div className="flex flex-col text-white justify-center px-6">
        <div className="text-center lg:w-[50%] mx-auto space-y-5">
          <Image
            src={logo}
            alt="logo"
            width={160}
            height={70}
            className="w-auto h-auto"
          />
          <p className="text-[16px] tracking-wider text-slate-300">
            we specialize in transforming businesses through cutting-edge web
            development, dynamic digital marketing, and innovative UI/UX design.
          </p>
        </div>
        <div className="lg:w-[50%] mx-auto">
          <div className="flex"></div>
        </div>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
        <Divider />
        <div className="flex items-center justify-center px-6  text-sm">
          <span className="dark:text-gray-600">
            © Copyright 2024. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
