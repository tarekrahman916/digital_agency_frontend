"use client";
import React, { useState } from "react";
import style from "./PortfolioCard.module.css";
import Image from "next/image";
import img from "@/assets/portfolio/folio-1.jpg";
import { Link, ZoomIn } from "lucide-react";
import CustomizedModal from "../CustomizedModal/CustomizedModal";

type PortfolioState = {
  id: number;
  title: string;
  short_des: string;
  des: string;
  url: string;
  tech: string[];
  img: any[];
};

const PortFolioCard = ({
  className,
  portfolio,
}: {
  className?: any;
  portfolio: PortfolioState;
}) => {
  const [open, setOpen] = useState(false);
  const { img, url } = portfolio;
  const folioUrl = url.replace(/"/g, "");

  const handleModal = () => {
    setOpen(true);
  };

  return (
    <div className="h-auto">
      <div className={`${style.img_wrapper} ${className}`}>
        <Image
          src={portfolio.img[0]}
          alt="portfolio"
          width={500}
          height={500}
          className={`${style.folioImg} w-full h-full object-cover`}
        />
        <div className={`${style.overlay}`}>
          <div className={`${style.overlay_infos}`}>
            <h5 className="text-xl">{portfolio.title}</h5>
            <div className="flex gap-5 justify-center items-center">
              <a
                onClick={handleModal}
                className="flex items-center justify-center cursor-pointer"
              >
                <ZoomIn />
              </a>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center justify-center"
              >
                <Link />
              </a>
            </div>
          </div>
        </div>
        <CustomizedModal open={open} setOpen={setOpen} image={img[0]} />
      </div>
    </div>
  );
};

export default PortFolioCard;
