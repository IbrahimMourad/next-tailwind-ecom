import React from "react";
import ShoppingCart from "../ShoppingCart";
import Container from "../Container";
import { useShoppingCart } from "@/context/CartContext";
import Link from "next/link";
import logo from "@/assets/imgs/logo_06_2x.png";
const Navbar = () => {
  return (
    <header className="bg-[#efefef] fixed z-10 w-full mx-auto px-30px xl:px-[60px] 2xl:px-[90px] py-[15px] flex justify-between items-center">
      <Link href="#" className="max-w-[200px] relative block cursor-pointer ">
        <img
          src={logo.src}
          alt="company logo"
          className=" object-cover w-[100%] h-auto"
        />
      </Link>
      <div className={``}>
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Navbar;
