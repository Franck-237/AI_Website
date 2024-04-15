import React from "react";

import brackets from "../../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div>
      <div className={`tagline flex items-center ${className || ""}`}>
        {brackets("left")}
        <div className="mx-3 text-n-3">{children}</div>
        {brackets("right")}
      </div>
    </div>
  );
};

export default Tagline;
