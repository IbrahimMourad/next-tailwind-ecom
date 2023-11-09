import React from "react";
import sofaImg from "@/assets/imgs/sofa_single.png";
import chairImg from "@/assets/imgs/chair.png";
import lampImg from "@/assets/imgs/lamp.png";
const Filters = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-2 mt-8 md:mt-0">
      <li className="filter-btn transition">
        <img src={chairImg.src} alt="" className="mb-[5px]" />
        <button className="uppercase ">chair</button>
      </li>
      <li className="filter-btn transition">
        <img src={sofaImg.src} alt="" className="mb-[5px]" />
        <button className="uppercase ">sofa</button>
      </li>
      <li className="filter-btn transition">
        <img src={lampImg.src} alt="" className="mb-[5px]" />
        <button className="uppercase ">lamps</button>
      </li>
      <li>
        <button className="uppercase border-[3px] border-solid border-[#efefef] px-[15px] py-[15px] ml-[25px] text-[15px] font-poppins font-semibold">
          all products
        </button>
      </li>
    </ul>
  );
};

export default Filters;
