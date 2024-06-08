import Link from "next/link";
import style from "./button.module.css";

const PrimaryButton = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      className={`${style.getstartedBtn} m-0 text-[18px] font-medium tracking-wider  `}
    >
      {title}
    </Link>
  );
};

export default PrimaryButton;
