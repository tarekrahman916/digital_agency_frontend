import { Service } from "@/constant/GlobalTypes";
import image from "@/assets/slide1.jpg";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SecondaryButton from "../Button/SecondaryButton";
import style from "./Card.module.css";

const Card = ({ service }: { service: any }) => {
  return (
    <div
      className={` rounded-md shadow-lg  h-[420px] relative text-gray-800 ${style.card}`}
    >
      <Image
        src={service.imageUrl ? service.imageUrl : image}
        alt=""
        className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500"
        width={500}
        height={200}
      />
      <div className="flex flex-col   space-y-4 w-full  ">
        <div className="space-y-2 px-2 text-center">
          <h2 className="text-xl  font-semibold ">{service.title}</h2>
          <p className="dark:text-gray-100 text-base   w-full">
            {service.shortDescription.length > 80
              ? service.shortDescription.slice(0, 80) + "..."
              : service.shortDescription}
          </p>
        </div>

        <div>
          <SecondaryButton
            title="See Details"
            href={`services/${service.slug}`}
            icon={<ExternalLink />}
            className="w-full flex items-center space-x-2 justify-center absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
