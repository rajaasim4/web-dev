import React from "react";
import Figma from "../../assets/Figma.svg";
import Navbar_ellipse from "../../assets/navbar_ellipse.svg";
import Php from "../../assets/Php.svg";
import Shopify from "../../assets/Shopify.svg";
import Webflow from "../../assets/Webflow.svg";
import Heading from "../../Components/Heading/Heading";
import SpecializationCard from "./SpecializationCard";
const Specialization = () => {
  return (
    <div className="w-full pt-10 relative">
      <img src={Navbar_ellipse} className="absolute top-50 right-0" alt="" />
      <Heading title={"Our Specialization"} subtitle={"What We Do?"} />

      <div
        className=" mt-16 w-7/12 mx-auto flex justify-evenly flex-wrap gap-y-10 mb-16 lg:w-10/12"
        data-aos="zoom-in-right"
        data-aos-delay="500"
        data-aos-offset="200"
        data-aos-once="true"
        data-aos-easing="ease-in-cubic"
        data-aos-duration="2000"
      >
        <SpecializationCard title={"Webflow Developnment"} imgsrc={Webflow} />
        <SpecializationCard title={"Shopify Developnment"} imgsrc={Shopify} />
        <SpecializationCard title={"Figma Web Designing"} imgsrc={Figma} />
        <SpecializationCard title={"Php Developnment"} imgsrc={Php} />
      </div>

      <button className="rounded-md block mx-auto py-4 text-white bg-[#49AD09] px-8 ">
        Learn More
      </button>
    </div>
  );
};

export default Specialization;
