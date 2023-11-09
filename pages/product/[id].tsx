"use client";
import Layout from "@/components/Layout";
import { useShoppingCart } from "@/context/CartContext";
import { data } from "@/utils/MOCK_DATA1";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const {
    query: { id },
  } = useRouter();
  const { increaseQuantity, decreaseQuantity, getItemsQuantity } =
    useShoppingCart();

  if (!id) return;

  const item = data.find((item) => item.id === id) ?? null;
  const quantity = getItemsQuantity(id);
  return (
    <Layout title={item.name}>
      <div className="container pt-[121px] mx-auto">
        <div className="px-[30px] sm:px-0 grid sm:grid-cols-2 gap-[30px] my-[35px] font-poppins text-[#040404]">
          <div className="flex justify-center sm:block">
            <img
              src={item.imgUrl}
              alt={item.name}
              className="width-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-[24px] font-normal mb-[15px]">{item.name}</h2>
            <p className="text-[18px] mb-[30px] flex items-center gap-2 capitalize">
              <ReactStars
                count={5}
                value={3.5}
                size={14}
                activeColor="#FDCC0D"
                edit={false}
                isHalf
              />
              (12 reviews)
            </p>
            <span className="block text-[30px] font-medium text-[#ce0b2b] mb-[15px]">
              {formatCurrency(item.price)}
            </span>
            <p className="text-[18px] mb-[30px]">
              Best Electronic Digital Thermometer adipiscing elit, sed do
              eiusmod teincididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse us ultrices gravidaes.
            </p>

            <div className="flex items-center gap-2  mb-[30px]">
              <span className="font-medium capitalize text-[18px]">
                quantity:
              </span>
              <div className="quantity-input grow-[0!important] w-[230px] text-[#ced9df]">
                <button
                  className="input-number-decrement transition hover:text-[#ce0b2b]"
                  onClick={() => decreaseQuantity(id)}
                >
                  –
                </button>
                <input
                  className="input-number transition mx-[10px]  text-[#040404]"
                  type="text"
                  value={quantity}
                  readOnly={true}
                />
                <button
                  className="input-number-increment transition hover:text-[#ce0b2b]"
                  onClick={() => increaseQuantity(id)}
                >
                  +
                </button>
              </div>
            </div>

            <ul className="flex gap-4 mb-[30px]">
              <li className="">
                <button
                  className="details-btn add-to-cart"
                  onClick={() => increaseQuantity(id)}
                >
                  Add to cart
                </button>
              </li>
              <li className="">
                <button className="details-btn"></button>
              </li>
              <li className="">
                <button className="details-btn"></button>
              </li>
            </ul>

            <div className="flex items-center gap-2  mb-[30px]">
              <span className="font-medium capitalize text-[18px]">
                category:
              </span>
              <Link
                href="#"
                className="capitalize text-[#6b6b6b] text-[18px] font-base transition hover:text-[#ce0b2b]"
              >
                Medical Equipment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
