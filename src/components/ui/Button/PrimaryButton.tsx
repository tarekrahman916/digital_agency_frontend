import Link from "next/link";
import style from "./button.module.css";

const PrimaryButton = ({
  title,
  href,
  className,
}: {
  title: string;
  href: string;
  className?: any;
}) => {
  return (
    <Link
      href={href}
      className={`${style.getstartedBtn} m-0 text-[18px] font-medium tracking-wider ${className} `}
    >
      {title}
    </Link>
  );
};

export default PrimaryButton;
