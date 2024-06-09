import ContactForm from "@/components/shared/ContactForm/ContactForm";
import ContactInfoCard from "@/components/ui/Card/ContactInfoCard";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import SocialLinks from "@/components/ui/SocialLinks/SocialLinks";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const page = () => {
  const infos = [
    {
      title: "Location",
      icon: MapPin,
      des: "A108 Adam Street, New York, NY 535022",
    },
    {
      title: "Email",
      icon: Mail,
      des: "info@example.com",
    },
    {
      title: "Call",
      icon: Phone,
      des: "+1 5589 55488 55s",
    },
  ];
  return (
    <div className="pt-40 lg:px-16 px-6">
      <PrimaryHeading
        title="Get in touch"
        des="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="">
        <div className="grid lg:grid-cols-4 grid-cols-2">
          {infos.map((info, i) => {
            return (
              <ContactInfoCard
                key={i}
                title={info.title}
                icon={info.icon}
                des={info.des}
              />
            );
          })}

          <SocialLinks className={`bg-gray-700 hover:bg-green-600`} />
        </div>
        {/* Contact Form */}
        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
