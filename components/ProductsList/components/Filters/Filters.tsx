import React from "react";
import sofaImg from "@/assets/imgs/sofa_single.png";
import chairImg from "@/assets/imgs/chair.png";
import lampImg from "@/assets/imgs/lamp.png";
const Filters = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-2 mt-8 md:mt-0">
      <li className="filter-btn">
        <img src={chairImg.src} alt="" />
        <button>chair</button>
      </li>
      <li className="filter-btn">
        <img src={sofaImg.src} alt="" />
        <button>sofa</button>
      </li>
      <li className="filter-btn">
        <img src={lampImg.src} alt="" />
        <button>lamps</button>
      </li>
      <li>
        <button className="uppercase">all products</button>
      </li>
    </ul>
  );
};

export default Filters;
