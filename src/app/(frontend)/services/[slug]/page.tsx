import Image from "next/image";
import imageUrl from "@/assets/services/web.jpg";
import SecondaryButton from "@/components/ui/Button/SecondaryButton";
import WorkFlow from "@/components/frontend/home/WorkFlow/WorkFlow";
import { CircleCheck, CircleCheckBig } from "lucide-react";
import BreadCrump from "@/components/ui/BreadCrump";
import { getData } from "@/lib/getData";
import { Key } from "react";

const page = async ({ params: { slug } }: { params: { slug: any } }) => {
  const service = await getData(`services/${slug}`);
  console.log(service);
  const breadCrumpLinks = [
    {
      label: "Services",
      href: "/services",
    },
  ];
  return (
    <div className="lg:px-24 px-5 pt-28">
      <BreadCrump breadCrumpLinks={breadCrumpLinks} title="Service" />
      <div className="flex flex-col-reverse sm:flex-row items-center gap-10 mb-5 shadow-md  h-full p-4 rounded-lg">
        <div className=" lg:w-1/2">
          <h3 className="text-3xl font-bold mb-6 text-[#37517E]">
            {service.title}
          </h3>
          <p className="lg:mb-6 text-[15px] text-slate-800">
            {service.shortDescription}
          </p>
          <div className="flex">
            <SecondaryButton
              title="Hire Us"
              href="/contact-us"
              className="mt-8 px-14"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={service.imageUrl}
            alt="service_image"
            width={500}
            height={500}
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <p className="text-[15px] tracking-wider text-gray-700 text-justify mt-12">
        {service.description}
      </p>
      <div className="mb-6 mt-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="">
            <h5 className="text-xl font-semibold mb-4">
              What Service we provide in {service.title} :
            </h5>
            <ul className=" space-y-2   text-gray-500 list-inside dark:text-gray-400">
              {service.provideServices.map((item: any, i: Key) => {
                return (
                  <li key={i} className="flex items-center gap-2">
                    <CircleCheck className="w-6 h-6 text-green-600" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <h5 className="text-xl font-semibold mb-4">Features :</h5>
            <ul className=" space-y-2  text-gray-500 list-inside dark:text-gray-400">
              {service.features.map((item: any, i: Key) => {
                return (
                  <li key={i} className="flex items-center gap-2">
                    <CircleCheckBig className="w-5 h-5 text-green-600" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <WorkFlow />
      </div>
    </div>
  );
};

export default page;
