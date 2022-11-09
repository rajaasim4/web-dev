import React from "react";

const Heading = (props) => {
  return (
    <>
      <h5 className="text-center">{props.subtitle}</h5>
      <h1 className="text-center text-5xl mt-8">{props.title}</h1>
    </>
  );
};

export default Heading;
