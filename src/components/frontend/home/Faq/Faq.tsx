"use client";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import { Collapse } from "antd";
import { ChevronDown, CircleHelp } from "lucide-react";
import style from "./Faq.module.css";

const Faq = () => {
  const items = [
    {
      key: "1",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            What services does Techneto It offer ?
          </h2>
        </div>
      ),
      children: (
        <p>
          Techneto It offers a wide range of services including web development,
          website design, e-commerce solutions, SEO (Search Engine
          Optimization), PPC (Pay-Per-Click) advertising, social media
          marketing, content creation, and digital strategy consulting. We
          tailor our services to meet the unique needs of each client.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            How long does it take to develop a website?
          </h2>
        </div>
      ),
      children: (
        <p>
          {" "}
          The timeline for website development can vary depending on the
          complexity and requirements of the project. On average, a standard
          website can take between 4 to 8 weeks from initial consultation to
          launch. More complex projects, such as e-commerce sites or custom
          applications, may take longer. We will provide a detailed timeline
          after discussing your specific needs.
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            What is your process for starting a new project?
          </h2>
        </div>
      ),
      children: (
        <p>
          Our process begins with an initial consultation to understand your
          goals and requirements. We then move to the planning and strategy
          phase, followed by design and development. Throughout the project, we
          maintain open communication to ensure your vision is realized. After
          development, we conduct thorough testing before launching the site.
          Post-launch, we offer support and maintenance services.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            How does Techneto It ensure my website is optimized for search
            engines?
          </h2>
        </div>
      ),
      children: (
        <p>
          At Techneto It, SEO is integrated into the web development process
          from the start. We conduct keyword research, optimize on-page elements
          such as titles, meta descriptions, and headings, and ensure fast
          loading times. We also create SEO-friendly URLs, implement internal
          linking strategies, and provide content that is valuable to your
          target audience. Our goal is to enhance your site’s visibility on
          search engines.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            Can you help with improving our current website?
          </h2>
        </div>
      ),
      children: (
        <p>
          Absolutely! Techneto It offers website audit and improvement services.
          We analyze your current website to identify areas for improvement in
          design, functionality, and SEO. Based on our findings, we provide
          recommendations and can implement changes to enhance the user
          experience, increase site performance, and boost your online presence.
        </p>
      ),
    },
  ];
  return (
    <div className={`py-20 lg:px-16 px-6 ${style.faqSection}`}>
      <PrimaryHeading title="Frequently Asked Questions" />
      <div className="flex lg:px-20 justify-center">
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          size="large"
          expandIcon={({ isActive }) =>
            isActive ? (
              <ChevronDown className="h-6 w-6 " />
            ) : (
              <ChevronDown className="h-6 w-6 " />
            )
          }
          expandIconPosition="end"
          className=" w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Faq;
