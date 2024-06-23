import Services from "@/components/frontend/home/Services/Services";
import Card from "@/components/ui/Card/Card";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import { Service } from "@/constant/GlobalTypes";

import React from "react";

export default async function page() {
  const res = await fetch(
    "https://service-provider-backend.vercel.app/api/v1/services",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: services } = await res.json();
  return (
    <div className="pt-40 lg:px-32 px-5">
      <PrimaryHeading title="Our Services" />
      <div
        data-aos="fade-right"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10"
      >
        {services.map((service: Service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}
