import { Button } from "antd";
import Image from "next/image";
import React from "react";

const SocialLoginButton = () => {
  return (
    <Button
      type="primary"
      block
      size="large"
      htmlType="submit"
      className="mb-4 lg:mb-0 flex items-center justify-center gap-2 font-semibold w-full text-black"
      ghost
    >
      <Image
        src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png"
        sizes="100vw"
        width={30}
        height={30}
        alt="product image"
      />
      <p>Continue With Google</p>
    </Button>
  );
};

export default SocialLoginButton;
