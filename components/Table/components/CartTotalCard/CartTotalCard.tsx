import { useShoppingCart } from "@/context/CartContext";
import { data } from "@/utils/MOCK_DATA1";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";

const CartTotalCard = () => {
  const { cartItems } = useShoppingCart();

  const subtotal = cartItems.reduce((total, cartItem) => {
    const item = data.find((i) => i.id == cartItem.id);
    return total + item.price * cartItem.quantity;
  }, 0);
  const VAT = subtotal * 0.05;
  return (
    <div className="max-w-[1200px] font-openSans">
      <div className="mt-[35px] bg-[#f2f3f5] w-full md:max-w[45%] lg:max-w-[33%] ml-auto pb-[30px] ">
        <h2 className="bg-[#ededed] px-[15px] md:px-[35px] py-[30px] text-center font-jost text-[25px] font-bold uppercase">
          cart total
        </h2>
        <ul className="px-[15px] md:px-[35px] py-[30px]">
          <li className="flex justify-between  font-extrabold mb-1">
            <span className="uppercase">Subtotal: </span>
            <span className="text-[18px] text-[#8799a3]">
              {formatCurrency(subtotal)}
            </span>
          </li>
          <li className="flex justify-between  font-extrabold mb-1">
            <span className="uppercase">Vat 5%: </span>
            <span className="text-[18px] text-[#8799a3]">
              {formatCurrency(VAT)}
            </span>
          </li>
          <li className="flex justify-between  font-extrabold ">
            <span className="uppercase">Total: </span>
            <span className="text-[18px] text-[#39b54a]">
              {formatCurrency(subtotal + VAT)}
            </span>
          </li>
        </ul>
        <div className="px-[15px] md:px-[35px]">
          {" "}
          <Link
            href="#"
            className=" block font-bold uppercase text-center text-white bg-[#39b54a] px-[35px] py-[10px] "
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotalCard;
