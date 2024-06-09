import { Facebook, Instagram, Linkedin, TwitterIcon } from "lucide-react";
import style from "./SocialLinks.module.css";

const SocialLinks = ({ className }: { className?: any }) => {
  return (
    <div>
      <div className={`${style.socialLinks}`}>
        <a href="#" className={className && className}>
          <Facebook />
        </a>
        <a href="#" className={className && className}>
          <TwitterIcon />
        </a>
        <a href="#" className={className && className}>
          <Instagram />
        </a>
        <a href="#" className={className && className}>
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
