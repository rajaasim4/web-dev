import React from "react";
import Heading from "../../Components/Heading/Heading";

const Contact = () => {
  return (
    <div className="w-full py-4">
      <Heading title={" Need A Little More Home To Grow"} />
      <button className="rounded-md block mx-auto py-4 text-white bg-[#49AD09] px-8 my-16 hover:shadow-2xl duration-300">
        Contact Us
      </button>
    </div>
  );
};

export default Contact;
