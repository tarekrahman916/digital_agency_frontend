import Testimonial from "@/components/shared/Testimonial/Testimonial";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import React from "react";

const HomeTestimonial = () => {
  return (
    <div className="pt-20 lg:px-16 px-5 pb-8">
      <PrimaryHeading title="What People Say About Us" />
      <Testimonial />
    </div>
  );
};

export default HomeTestimonial;
