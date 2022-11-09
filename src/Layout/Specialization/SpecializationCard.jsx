import React from "react";

const SpecializationCard = (props) => {
  return (
    <div className="w-[384px] rounded-lg border-gray-200 bg-white px-10 py-8 border h-[332px] cursor-pointer hover:shadow-2xl duration-300 sm:h-max">
      <h3 className="text-2xl flex mb-6">
        <img src={props.imgsrc} alt="" />
        <span className="ml-6 font-semibold">{props.title}</span>
      </h3>
      <p className="mb-6">
        Really boy law county she unable her sister. Feet you off its like like
        six. Among sex are leave law built now. In built table in an rapid
        blush. Merits behind on afraid or warmly.
      </p>
      <a href="/#" className="underline    hover:text-green-600 ">
        Read More
      </a>
    </div>
  );
};

export default SpecializationCard;
