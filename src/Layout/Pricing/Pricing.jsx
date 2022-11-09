import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Box from "../../assets/Box.svg";
import Heading from "../../Components/Heading/Heading";
const Pricing = () => {
  return (
    <div className=" w-full py-10 relative">
      <img src={Box} className="absolute left-0 top-50" alt="" />
      <Heading title={"Pricing Policy"} subtitle={"Pricing"} />
      <div
        className="w-full flex flex-wrap justify-evenly mt-16 lg:gap-y-8"
        data-aos="flip-right"
        data-aos-delay="100"
        data-aos-duration="3000"
        data-aos-once="true"
      >
        <PricingCard packgname={"For Starters"} price={"1499"} />
        <PricingCard packgname={"For Teams"} price={"2999"} />
        <PricingCard packgname={"For Enterprise"} price={"5000"} />
      </div>
    </div>
  );
};
const PricingCard = (props) => {
  return (
    <>
      <div className="w-[342px] sm:w-11/12  flex flex-col items-center rounded-md border border-gray-300 py-8 h-[500px] hover:shadow-2xl cursor-pointer">
        <h5 className="text-2xl left">{props.packgname}</h5>
        <h3 className="text-4xl font-medium mb-3">${props.price}</h3>
        <ul className="my-4">
          <li className="flex items-center my-2">
            <BsCheckCircleFill />
            <span className="ml-5">Feedback Categorization</span>
          </li>
          <li className="flex items-center my-2">
            <BsCheckCircleFill />
            <span className="ml-5">Features prioritization</span>
          </li>
          <li className="flex items-center my-2">
            <BsCheckCircleFill />
            <span className="ml-5">Real-time collaboration</span>
          </li>
          <li className="flex items-center my-2">
            <BsCheckCircleFill />
            <span className="ml-5">Feedback loop notifications</span>
          </li>
          <li className="flex items-center my-2">
            <BsCheckCircleFill />
            <span className="ml-5">Essential dev tools integrations</span>
          </li>
        </ul>
        <button className="mx-auto block border border-gray-500 px-9 rounded-sm py-3 mt-6 hover:bg-[#49AD09] duration-500 hover:text-white">
          Request Demo
        </button>
      </div>
    </>
  );
};
export default Pricing;
