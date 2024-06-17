import Image from "next/image";
import imageUrl from "@/assets/services/web.jpg";
import SecondaryButton from "@/components/ui/Button/SecondaryButton";
import WorkFlow from "@/components/frontend/home/WorkFlow/WorkFlow";

const page = () => {
  return (
    <div className="lg:px-24 px-5 pt-28">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-10 mb-5">
        <div className="">
          <h3 className="text-3xl font-bold mb-6 text-[#37517E]">
            Web Development
          </h3>
          <p className="mb-6 text-[15px] text-slate-800">
            Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia
            aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia
            illum tempore corrupti sed eum reiciendis. Maxime modi rerum.
          </p>
          <SecondaryButton
            title="Hire Us"
            href="/contact-us"
            className="mt-8 w-1/2"
          />
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
      <p className="text-[15px] tracking-wider text-gray-700 mt-4 text-justify">
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
      <div className="my-6">
        <h5 className="text-xl mb-2">Features</h5>
        <ul className=" space-y-1 grid sm:grid-cols-2 grid-cols-1 text-gray-500 list-inside dark:text-gray-400">
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </li>
          <li className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Lorem ipsum dolor sit amet consectetur adipisicing elit..
          </li>
        </ul>
        <WorkFlow />
      </div>
    </div>
  );
};

export default page;
