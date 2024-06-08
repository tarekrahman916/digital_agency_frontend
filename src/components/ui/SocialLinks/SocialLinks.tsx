import { Facebook, Instagram, Linkedin, TwitterIcon } from "lucide-react";
import style from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div>
      <div className={`${style.socialLinks}`}>
        <a href="#" className="">
          <Facebook />
        </a>
        <a href="#" className="facebook">
          <TwitterIcon />
        </a>
        <a href="#" className="instagram">
          <Instagram />
        </a>
        <a href="#" className="google-plus">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
