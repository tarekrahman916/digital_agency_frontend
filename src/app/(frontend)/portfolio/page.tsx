import PortFolioCard from "@/components/ui/Card/PortFolioCard";
import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import React from "react";

const page = () => {
  const portfolios = [
    {
      id: 1,
      title: "Efy Mart",
      short_des: "Lorem ipsum, dolor sit",
      des: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
      url: "https://www.efymart.com",
      tech: ["Next JS", "Node Js", "Express Js", "MongoDB"],
      img: [
        "https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg",
      ],
    },
    {
      id: 2,
      title: "Signature Constructions",
      short_des: "Lorem ipsum, dolor sit",
      des: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
      url: "https://builder.technetoit.com/",
      tech: ["Next JS", "Node Js", "Express Js", "MongoDB"],
      img: [
        "https://assets.markup.io/app/uploads/2023/03/website-mockup-examples-candy.png",
      ],
    },
    {
      id: 3,
      title: "Efy Mart",
      short_des: "https://www.efymart.com",
      des: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
      url: "www.efymart.com",
      tech: ["Next JS", "Node Js", "Express Js", "MongoDB"],
      img: [
        "https://www.mockupworld.co/wp-content/uploads/2017/05/free-showcasing-header-mockup.jpg",
      ],
    },
    {
      id: 4,
      title: "Efy Mart",
      short_des: "Lorem ipsum, dolor sit",
      des: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
      url: "https://www.efymart.com",
      tech: ["Next JS", "Node Js", "Express Js", "MongoDB"],
      img: [
        "https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg",
      ],
    },
    {
      id: 5,
      title: "Efy Mart",
      short_des: "Lorem ipsum, dolor sit",
      des: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
      url: "https://www.efymart.com",
      tech: ["Next JS", "Node Js", "Express Js", "MongoDB"],
      img: [
        "https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg",
      ],
    },
    {
      id: 6,
      title: "Efy Mart",
      short_des: "Lorem ipsum, dolor sit",
      des: "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
      url: "https://www.efymart.com",
      tech: ["Next JS", "Node Js", "Express Js", "MongoDB"],
      img: [
        "https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg",
      ],
    },
  ];
  return (
    <div className="pt-40 lg:px-16 px-5 mb-6">
      <PrimaryHeading title="Portfolio" des="CHECK MY WONDERFUL WORKS" />
      <div className="grid  lg:grid-cols-3 grid-cols-1 gap-5 ">
        {portfolios.map((portfolio) => {
          return (
            <PortFolioCard
              key={portfolio.id}
              portfolio={portfolio}
              className={`h-64 mb-0`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
