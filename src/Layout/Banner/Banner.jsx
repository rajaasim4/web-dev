import React from "react";
import Banner_left from "../../assets/Banner_left.png";
import Banner_right from "../../assets/Banner_right.png";
const Banner = () => {
  return (
    <div className="w-full py-20 h-full bg-maincolor flex content-between md:py-16">
      <div className="sm:hidden md:block">
        <img src={Banner_left} alt="" />
      </div>
      <div
        className="w-7/12  sm:w-full py-10 px-5 "
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <h1 className="text-7xl lg:text-5xl lg:leading-tight sm:text-5xl font-bold text-center">
          We Develop
          <br />
          <span className="text-[#49AD09]">Shopify sites</span>
        </h1>
        <div className=" mx-auto lg:w-5/5 w-4/5 text-center mt-7 text-lg px-5 lg:px-0">
          Slingback fabric heels. Thin wraparound ankle strap. Squared heel and
          toe. Pointed toes. Padded insole with geometrical design.
        </div>
        <div className="w-3/5 mx-auto flex justify-evenly  mt-8 md:w-11/12 sm:w-5/5 sm:justify-between">
          <button className="text-[#fff] bg-[#49AD09] py-4 px-6 rounded-md shadow-2xl">
            Contact Us
          </button>
          <button className="underline w-34">Watch Video</button>
        </div>
      </div>
      <div className="sm:hidden md:block">
        <img src={Banner_right} alt="" />
      </div>
    </div>
  );
};

export default Banner;
