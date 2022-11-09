import React from "react";
import Brands_line from "../../assets/Brands_line.png";
import BrandsData from "../../Data/BrandsData";
const Brands = () => {
  return (
    <div className="w-full py-20 relative">
      <div
        className="w-10/12  mx-auto flex justify-evenly flex-wrap  items-center"
        data-aos="flip-up"
        data-aos-delay="100"
        data-aos-once="true"
      >
        {BrandsData.map((Val) => {
          return (
            <img
              key={Val.id}
              src={Val.imgsrc}
              alt=""
              className="md:mr-10 md:my-6"
            />
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0">
        <img src={Brands_line} alt="" />
      </div>
    </div>
  );
};

export default Brands;
