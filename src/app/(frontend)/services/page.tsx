import Card from "@/components/ui/Card/Card";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import { Service } from "@/constant/GlobalTypes";
import { getData } from "@/lib/getData";

export default async function page() {
  const services: Service[] = await getData("services");
  console.log(services);
  return (
    <div className="pt-40 lg:px-20 px-5">
      <PrimaryHeading title="Our Services" />
      <div
        data-aos="fade-right"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10"
      >
        {services.map((service: Service) => (
          // <Card key={service.id} service={service} />
          <h1 key={service.id}>hello</h1>
        ))}
      </div>
      {/* <h1>Service page</h1> */}
    </div>
  );
}
