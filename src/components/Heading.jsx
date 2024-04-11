import React from "react";

const Heading = ({ className, title }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mt-10 mb-10 lg:mb-2O lg:mt-0`}
    >
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
