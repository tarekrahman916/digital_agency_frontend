import { MapPin } from "lucide-react";
import style from "./ContactInfoCard.module.css";

const ContactInfoCard = ({
  title,
  icon,
  des,
}: {
  title: string;
  icon: any;
  des: string;
}) => {
  const Icon = icon;
  return (
    <div
      className={`${style.infoCard} flex items-center mb-5 space-x-3   p-3 rounded-md`}
    >
      <Icon
        className={`${style.infoIcon} w-12 h-12 p-2 flex items-center rounded-full`}
      />

      <div className="">
        <h3 className="text-2xl text-[#37517E] tracking-wide">{title}:</h3>
        <p className="text-base text-slate-800">{des}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
