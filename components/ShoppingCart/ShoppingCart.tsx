import { useState } from "react";
import Button from "../ProductsList/components/Button";
import { useShoppingCart } from "@/context/CartContext";
import CartItem from "./components/CartItem";

const ShoppingCart = () => {
  const {
    openCart,
    closeCart,
    isOpen,
    cartQuantity,
    cartItems,
    getItemsQuantity,
  } = useShoppingCart();

  return (
    <>
      <Button
        className="rounded-[50%] w-[65px] h-[65px] bg-[#e9e9e9] text-[#2d2d2d] relative"
        onClick={openCart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span className="text-white bg-[#da0a2c] absolute -right-[8px] -top-[5px] rounded-[50%] w-[25px] h-[25px]">
          {cartQuantity}
        </span>
      </Button>

      <aside
        className={
          " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0"
            : " transition-all delay-500 opacity-0 translate-x-full")
        }
      >
        <aside
          className={
            " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="relative w-screen max-w-lg p-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <h2 className=" font-bold text-lg">Shopping Cart</h2>

            {cartItems?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                quantity={getItemsQuantity(item.id)}
              />
            ))}
          </article>
        </aside>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={closeCart}
        ></section>
      </aside>
    </>
  );
};

export default ShoppingCart;