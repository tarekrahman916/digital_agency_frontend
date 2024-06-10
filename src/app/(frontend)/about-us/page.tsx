import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import Image from "next/image";
import img from "@/assets/hero.jpg";
import CountUpInfo from "@/components/shared/CountUpInfo/CountUpInfo";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

const page = () => {
  return (
    <div className="pt-28 lg:px-32 px-5">
      <PrimaryHeading
        title="About Us"
        des="Your Trusted Partners in Web Development and Digital Marketing Excellence"
      />
      {/* Information Us */}
      <div className="flex lg:flex-row flex-col-reverse  gap-6">
        <div className="shadow-2xl p-5 rounded-lg lg:w-[40%]">
          <h1 className="text-2xl text-[#37517E] tracking-wide font-bold mb-6">
            Details about us
          </h1>
          <h1 className="text-4xl text-gray-800">
            Our Dream is Global Learning Transformation.
          </h1>
          <p className="lg:mt-16 mt-10 text-[18px] tracking-wide text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            sequi veritatis ducimus unde tenetur? Aliquam suscipit molestiae
            quaerat enim fugiat in ratione dolorum qui, dignissimos doloribus
            rerum odit velit possimus commodi minima est officiis dolores iusto
            eius deserunt? Optio eveniet harum perferendis aliquam et veritatis
            ut nisi suscipit dignissimos. Suscipit similique quia deleniti
            blanditiis earum facere fuga consequuntur laboriosam. Sunt nulla
            placeat laudantium perspiciatis odio cumque labore, possimus minus
            voluptatem reiciendis vero expedita molestiae enim assumenda ipsum
            voluptates. Recusandae quod deleniti esse, impedit temporibus
            quibusdam architecto fugit magnam iure debitis, nam sapiente vel
            dolore sit amet enim quo molestiae minus.
          </p>
        </div>
        <div className="flex flex-col  lg:w-[60%] shadow-2xl p-5">
          <div className="">
            <Image
              src={img}
              width={400}
              height={300}
              alt="about_image"
              className="w-full object-cover  rounded-lg"
            />
          </div>
          <div className="">
            <CountUpInfo />
          </div>
        </div>
      </div>
      {/* Vision and mission */}
      {/* Contact Form */}
      <div className="mt-10 ">
        <h1 className="text-3xl text-gray-800 mb-5 text-center">
          If You Like Us. Please Contact{" "}
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
