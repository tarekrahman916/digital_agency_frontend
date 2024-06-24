// @ts-nocheck
import Services from "@/components/frontend/home/Services/Services";
import Card from "@/components/ui/Card/Card";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import { Service } from "@/constant/GlobalTypes";
import { getData } from "@/lib/getData";

import React from "react";

export default async function page() {
  // const services: [] = await getData("services");
  return (
    <div className="pt-40 lg:px-20 px-5">
      <PrimaryHeading title="Our Services" />
      {/* <div
        data-aos="fade-right"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10"
      >
        {services.map((service: any) => (
          <Card key={service._id} service={service} />
        ))}
      </div> */}
    </div>
  );
}
