import Link from "next/link";
import style from "./button.module.css";

const SecondaryButton = ({
  title,
  href,
  className,
  icon,
}: {
  title: string;
  href: string;
  className?: any;
  icon?: any;
}) => {
  return (
    <Link href={href} className="no-underline">
      <button className={`${style.secondaryBtn} ${className && className} `}>
        <span className="flex items-center space-x-3 justify-center gap-2">
          {title}
          {icon && icon}
        </span>
      </button>
    </Link>
  );
};

export default SecondaryButton;
