import ContactInfoCard from "@/components/ui/Card/ContactInfoCard";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import SocialLinks from "@/components/ui/SocialLinks/SocialLinks";
import { Mail, MapPin, Phone } from "lucide-react";
import style from "./ContactSection.module.css";
import ContactForm from "@/components/shared/ContactForm/ContactForm";
import SecondaryHeading from "@/components/ui/Heading/SecondaryHeading";

const ContactSection = () => {
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
    <div className={`pt-20 lg:px-16 px-5 pb-8 ${style.contactSection}`}>
      <PrimaryHeading title="Contact" />
      {/* <SecondaryHeading title="Contact" des="Get in touch" /> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {/* Contact Inform */}
        <div
          className={` px-3 rounded-md  border-l-4 border-[#1aa150] ${style.infoSection}`}
        >
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
          <div className="ml-8">
            <SocialLinks className={`bg-gray-700 hover:bg-green-600 `} />
          </div>
        </div>
        {/* Contact Form */}
        <div
          className={` px-3 rounded-md lg:border-l-4 lg:border-[#1aa150] ${style.infoSection}`}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
