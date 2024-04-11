import React from "react";

import yourlogo from "../assets/img/yourlogo.svg";

const Logos = ({ className }) => {
  const Logos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people creae beautiful content at
      </h5>
      <ul className="flex">
        {Logos.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={item} alt={item} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logos;
