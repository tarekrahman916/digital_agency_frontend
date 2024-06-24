import { Button } from "antd";
import { Service } from "@/constant/GlobalTypes";
import Link from "next/link";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import Card from "@/components/ui/Card/Card";

import { getData } from "@/lib/getData";

const Services = async () => {
  const services: Service[] = await getData("services");

  return (
    <div className="pt-20 pb-6 lg:px-16 px-5">
      <PrimaryHeading title="Our Services" />

      <div
        data-aos="fade-right"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
      >
        {services.length > 4
          ? services
              .slice(0, 4)
              .map((service: any) => (
                <Card key={service.id} service={service} />
              ))
          : services.map((service: any) => (
              <Card key={service.id} service={service} />
            ))}
      </div>
      {services.length > 4 && (
        <div className="flex justify-center mt-6">
          <Link href="/services">
            <Button type="primary" size="large">
              See More Services
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Services;
