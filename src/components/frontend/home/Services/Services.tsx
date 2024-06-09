import { Button } from "antd";
import { Service } from "@/constant/GlobalTypes";
import Link from "next/link";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import Card from "@/components/ui/Card/Card";

const Services = async () => {
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
    <div className="pt-20 pb-6">
      <PrimaryHeading title="Our Services" />

      <div
        data-aos="fade-right"
        className="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-16 "
      >
        {services.length > 4
          ? services
              .slice(0, 4)
              .map((service: Service) => (
                <Card key={service._id} service={service} />
              ))
          : services.map((service: Service) => (
              <Card key={service._id} service={service} />
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
