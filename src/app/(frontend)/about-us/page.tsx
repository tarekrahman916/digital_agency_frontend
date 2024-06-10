import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import Image from "next/image";
import img from "@/assets/hero.jpg";
import CountUpInfo from "@/components/shared/CountUpInfo/CountUpInfo";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

const page = () => {
  return (
    <div className="pt-28 lg:px-20">
      <PrimaryHeading
        title="About Us"
        des="Your Trusted Partners in Web Development and Digital Marketing Excellence"
      />
      {/* Information Us */}
      <div className="flex lg:flex-row flex-col-reverse  gap-6">
        <div className="shadow-lg p-5 rounded-lg lg:w-[40%]">
          <h1 className="text-xl text-center text-[#37517E] tracking-wide font-bold mb-6">
            Details about us
          </h1>
          <h1 className="text-4xl text-center text-gray-800">
            Our Dream is Global Learning Transformation.
          </h1>
          <p className="lg:mt-16 mt-10 text-[15px] font-medium text-justify tracking-wider text-gray-700">
            We are dedicated to transforming your digital presence through
            innovative web development and strategic digital marketing
            solutions. With a passionate team of experts, we pride ourselves on
            delivering customized services that drive success and growth for
            your business. nulla placeat laudantium perspiciatis odio cumque
            labore, possimus minus voluptatem reiciendis vero expedita molestiae
            enim assumenda ipsum voluptates. Recusandae quod deleniti esse,
            impedit temporibus quibusdam architecto fugit magnam iure debitis,
            nam sapiente vel dolore sit amet enim quo molestiae minus.
          </p>
        </div>
        <div className="flex flex-col  lg:w-[60%] shadow-lg p-5">
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

      <div className="shadow-lg mt-10 p-5 rounded-lg ">
        <h1 className="text-2xl  text-[#37517E] tracking-wide font-bold mb-6">
          What We Do ?
        </h1>
        <p className=" text-[15px] font-medium text-justify tracking-wider text-gray-700">
          <span className="text-[#37517E] font-bold"> Web Development:</span>{" "}
          Our skilled developers build responsive, user-friendly, and visually
          stunning websites tailored to meet your unique needs. From e-commerce
          platforms to corporate websites, we ensure a seamless online
          experience for your customers.
        </p>
        <p className=" mt-6 text-[15px] font-medium text-justify tracking-wider text-gray-700">
          <span className="text-[#37517E] font-bold">Digital Marketing:</span>{" "}
          Our digital marketing team crafts data-driven strategies to enhance
          your online visibility and engagement. We specialize in SEO, social
          media marketing, content marketing, PPC campaigns, and more, ensuring
          your message reaches the right audience at the right time.
        </p>
      </div>
      <div className="shadow-lg mt-10 p-5 rounded-lg ">
        <h1 className="text-2xl  text-[#37517E] tracking-wide font-bold mb-6">
          Our Mission
        </h1>

        <p className=" mt-6 text-[15px] font-medium text-justify tracking-wider text-gray-700">
          Our mission is to empower businesses of all sizes to thrive in the
          digital landscape. We achieve this by creating exceptional websites
          and implementing impactful digital marketing strategies that resonate
          with your target audience and elevate your brand.
        </p>
      </div>

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
