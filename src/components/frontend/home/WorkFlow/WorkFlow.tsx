/* eslint-disable react/no-unescaped-entities */
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import {
  BookCheck,
  Component,
  MessageCircleMore,
  NotepadText,
  PackageCheck,
  Send,
} from "lucide-react";
import React from "react";

const WorkFlow = () => {
  const works = [
    {
      title: "Discussion",
      descriptions:
        " To understand that project needs & requirements it's very importantfor us,for that i discuss with every detail to related projects.",
      icon: MessageCircleMore,
    },
    {
      title: "Planning",
      descriptions:
        "Then We can create a plan for the whole project. Planning gives the high potential to every project to do successful.",
      icon: NotepadText,
    },
    {
      title: "Design",
      descriptions:
        " We give highly concentration to website design, every time I try to give my best to do clean and services related awesome design for the website.",
      icon: Component,
    },
    {
      title: "Complete Project",
      descriptions:
        " We need to code for every website. it’s very important to have hand coding, clean and developer friendly coding.",
      icon: PackageCheck,
    },
    {
      title: "Submit for Review",
      descriptions:
        " After design and coding, I send for review to client. After client’s checking, If have to change or revision I again do this",
      icon: Send,
    },
    {
      title: "Project Is Ready!",
      descriptions:
        " After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone.",
      icon: BookCheck,
    },
  ];
  return (
    <section className="lg:px-16 px-5 my-6 py-6 rounded-xl bg-gray-100 text-gray-800">
      <PrimaryHeading title="What Do We Work ?" />
      <div className=" grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
        {works.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center text-center  flex-col px-3 py-5 shadow-md   space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800 hover:-translate-y-1 duration-300 transition-all"
            >
              <Icon className="w-12 h-12 mb-3 text-green-600" />
              <h3 className="text-center text-xl mb-3">{item.title}</h3>
              <p className="text-[15px] text-slate-700 ">{item.descriptions}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkFlow;
