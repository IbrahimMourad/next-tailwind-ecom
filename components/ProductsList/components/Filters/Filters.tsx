import React from "react";
import sofaImg from "@/assets/imgs/sofa_single.png";
import chairImg from "@/assets/imgs/chair.png";
import lampImg from "@/assets/imgs/lamp.png";
const Filters = () => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-2 mt-8 pc:mt-0">
      <li className="filter-btn transition">
        <img
          src={chairImg.src}
          alt=""
          className=" max-h-[30px] xl:max-h-auto mb-[5px]"
        />
        <button className="uppercase  ">chair</button>
      </li>
      <li className="filter-btn transition">
        <img src={sofaImg.src} alt="" className=" max-h-[30px] mb-[5px]" />
        <button className="uppercase  ">sofa</button>
      </li>
      <li className="filter-btn transition">
        <img src={lampImg.src} alt="" className=" max-h-[30px] mb-[5px]" />
        <button className="uppercase  ">lamps</button>
      </li>
      <li>
        <button className="uppercase transition border-[3px] border-solid mt-2 pc:mt-0 border-[#efefef] hover:border-[#2e2e2e] px-[15px] py-[15px] pc:ml-[15px] font-poppins font-semibold text-[12px] xl:text-[15px] ">
          all products
        </button>
      </li>
    </ul>
  );
};

export default Filters;
