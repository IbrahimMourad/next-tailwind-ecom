import React from "react";
import { useShoppingCart } from "@/context/CartContext";
import Row from "./components/Row";

const Table = () => {
  const { cartItems } = useShoppingCart();

  return (
    <div className="cart-table max-w-[1200px] mx-auto pt-[150px] overflow-x-scroll">
      <table className="text-[#6b6b6b] w-[820px] lg:w-full  ">
        <thead className="bg-[#f5f5f5] uppercase font-jost font-extrabold">
          <tr>
            <th className="text-left pl-[77px!important]">Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((cartItem) => (
            <Row key={cartItem.id} {...cartItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
