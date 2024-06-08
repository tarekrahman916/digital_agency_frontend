"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
    });
  }, []);

  return <>{children}</>;
};

export default AosProvider;
