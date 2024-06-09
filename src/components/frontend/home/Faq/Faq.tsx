"use client";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import { Collapse } from "antd";
import { ChevronDown, CircleHelp } from "lucide-react";
import style from "./Faq.module.css";

const Faq = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items = [
    {
      key: "1",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            This is panel header 1
          </h2>
        </div>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            This is panel header 1
          </h2>
        </div>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            This is panel header 1
          </h2>
        </div>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            This is panel header 1
          </h2>
        </div>
      ),
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: (
        <div className="flex space-x-3">
          <CircleHelp className="h-6 w-6 text-green-600" />
          <h2 className="text-[18px] font-semibold tracking-wide text-slate-700 hover:text-green-600">
            This is panel header 1
          </h2>
        </div>
      ),
      children: <p>{text}</p>,
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
