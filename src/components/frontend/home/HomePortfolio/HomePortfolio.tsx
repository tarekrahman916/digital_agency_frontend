import PrimaryHeading from "@/components/ui/Heading/PrimaryHeading";
import PortFolioCard from "@/components/ui/Card/PortFolioCard";
import img1 from "@/assets/portfolio/folio-1.jpg";
import img2 from "@/assets/portfolio/folio-2.jpg";
import img3 from "@/assets/portfolio/folio-3.jpg";
import img4 from "@/assets/portfolio/folio-4.jpg";
import img5 from "@/assets/portfolio/folio-5.jpg";

const HomePortfolio = () => {
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
    <div className={`py-20 px-16 `}>
      <PrimaryHeading title="Check My Wonderful Works" />

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

export default HomePortfolio;
