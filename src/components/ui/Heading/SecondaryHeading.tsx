import React from "react";
import style from "./Heading.module.css";

const SecondaryHeading = ({ title, des }: { title: string; des: string }) => {
  return (
    <div className={style.section_title}>
      <h2>{title}</h2>
      <p>{des}</p>
    </div>
  );
};

export default SecondaryHeading;
