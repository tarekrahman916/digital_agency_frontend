"use client";
import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const CustomizedModal = ({
  open = false,
  setOpen,
  image,
}: {
  open: boolean;
  setOpen: any;
  image: string;
}) => {
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        className="lg:w-[50%] h-full"
        open={open}
        onCancel={handleCancel}
        footer
      >
        <Image
          src={image}
          alt="image"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </Modal>
    </div>
  );
};

export default CustomizedModal;
