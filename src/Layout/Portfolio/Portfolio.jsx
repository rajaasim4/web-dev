import React from "react";
import Portfolio1 from "../../assets/Portfolio1.png";
import Portfolio2 from "../../assets/Portfolio2.png";
import Portfolio3 from "../../assets/Portfolio3.png";
import Portfolio4 from "../../assets/Portfolio4.png";
import Heading from "../../Components/Heading/Heading";
const Portfolio = () => {
  return (
    <div className="w-full py-20">
      <Heading title={"Our Portfolio"} subtitle={"Our Work"} />
      <div className=" w-9/12 mt-12 mx-auto lg:w-full flex md:flex-col ">
        <div
          className="w-full flex justify-evenly flex-col items-center mb-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <PortfolioCard imgsrc={Portfolio1} title={"Fashion Landing Page"} />

          <PortfolioCard imgsrc={Portfolio2} title={"Health & Fitness"} />
        </div>

        <div
          className="w-full flex justify-evenly flex-col items-center mt-24 md:mt-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <PortfolioCard imgsrc={Portfolio3} title={"Furniture Shop"} />
          <PortfolioCard imgsrc={Portfolio4} title={"IT Solution Provider"} />
        </div>
      </div>
      <button className="rounded-md block mx-auto py-4 text-white bg-[#49AD09] px-8 mt-20">
        All Projects
      </button>
    </div>
  );
};

const PortfolioCard = (props) => {
  return (
    <>
      <div className="w-[480px] mt-5 lg:w-[420px] sm:w-11/12">
        <img src={props.imgsrc} alt="" />
        <div className="flex justify-between mt-6">
          <h3 className="text-2xl font-medium">{props.title}</h3>
          <a href="/#" className="text-[#49AD09]">
            View Details
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
