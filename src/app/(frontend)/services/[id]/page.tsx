import Image from "next/image";
import imageUrl from "@/assets/services/web.jpg";
import SecondaryButton from "@/components/ui/Button/SecondaryButton";
import WorkFlow from "@/components/frontend/home/WorkFlow/WorkFlow";
import { CircleCheck, CircleCheckBig } from "lucide-react";
import BreadCrump from "@/components/ui/BreadCrump";

const page = () => {
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
        <div className=" ">
          <h3 className="text-3xl font-bold mb-6 text-[#37517E]">
            Web Development
          </h3>
          <p className="lg:mb-6 text-[15px] text-slate-800">
            Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia
            aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia
            illum tempore corrupti sed eum reiciendis. Maxime modi rerum.
          </p>
          <div className="flex">
            <SecondaryButton
              title="Hire Us"
              href="/contact-us"
              className="mt-8 px-14"
            />
          </div>
        </div>
        <div className="">
          <Image
            src={imageUrl}
            alt="service_image"
            width={500}
            height={500}
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <p className="text-[15px] tracking-wider text-gray-700 text-justify mt-12">
        Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
        illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur
        itaque nesciunt fuga. Sunt rem odit accusantium omnis perspiciatis
        officia. Laboriosam aut consequuntur recusandae mollitia doloremque est
        architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
        repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis
        ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto
        cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at
        consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt
        qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
      </p>
      <div className="mb-6 mt-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="">
            <h5 className="text-xl font-semibold mb-4">
              What Service we provide in Web Development :
            </h5>
            <ul className=" space-y-2  text-gray-500 list-inside dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CircleCheck className="w-6 h-6 text-green-600" />
                E-commerce website
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="w-6 h-6 text-green-600" />
                Business website
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="w-6 h-6 text-green-600" />
                Portfolio website
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="w-6 h-6 text-green-600" />
                Online News Portal website
              </li>
              <li className="flex items-center gap-2">
                <CircleCheck className="w-6 h-6 text-green-600" />
                All Types of Website
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="text-xl font-semibold mb-4">Features :</h5>
            <ul className=" space-y-2  text-gray-500 list-inside dark:text-gray-400">
              <li className="flex items-center gap-2">
                <CircleCheckBig className="w-5 h-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig className="w-5 h-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig className="w-5 h-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig className="w-5 h-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig className="w-5 h-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig className="w-5 h-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
        <WorkFlow />
      </div>
    </div>
  );
};

export default page;
