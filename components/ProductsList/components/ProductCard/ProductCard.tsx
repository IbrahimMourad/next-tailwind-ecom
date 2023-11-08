import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

import { useShoppingCart } from "@/context/CartContext";
import { CartItemType } from "@/context/CartContext.types";
import { formatCurrency } from "@/utils/formatCurrency";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  imgUrl: string;
};
const ProductCard = ({
  id,
  name,
  price,
  imgUrl,
  oldPrice,
}: ProductCardProps) => {
  const {
    getItemsQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);

  return (
    <div className="relative flex w-full md:w-[25%] flex-col overflow-hidden p-[1.563rem] border border-gray-100 bg-white shadow-md font-poppins hover-effect">
      <div className="flex justify-between  w-full px-3">
        <ReactStars
          count={5}
          value={3.5}
          size={13}
          activeColor="#FDCC0D"
          edit={false}
          isHalf
        />
        {oldPrice && (
          <div className="h-[24px] px-2 leading-[1] py-1 bg-[#ff5656] text-white font-semibold flex items-center justify-center">
            Sale
          </div>
        )}
      </div>
      <div className="flex items-center justify-center min-h-[350px] relative p-4 py-6 ">
        <img
          src={imgUrl}
          alt=" product"
          // width={600}
          // height={600}
          className="max-w-[100%] h-auto "
        />
        <ButtonGroup id={id} />
      </div>
      <div>
        <Link
          href="#"
          className="link text-black   text-center block font-semibold	text-[1.375rem] mb-[1.25rem] "
        >
          {name}
        </Link>
        <span className="  text-lg font-normal text-center block">
          <strong className="text-black  font-semibold text-[1.375rem]">
            {formatCurrency(price)}
          </strong>{" "}
          {oldPrice && (
            <del className="text-black   text-base">
              {formatCurrency(oldPrice)}
            </del>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
