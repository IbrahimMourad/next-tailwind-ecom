import { useShoppingCart } from "@/context/CartContext";
import { data } from "@/utils/MOCK_DATA1";
import { formatCurrency } from "@/utils/formatCurrency";

const Row = ({ id }) => {
  const {
    getItemsQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);

  const item = data.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <tr className="text-center mb-3">
      <td className="flex flex-grow items-center gap-8 py-4 pr-4">
        <div className="max-w[125px] flex items-center justify-between gap-8">
          <button
            type="button"
            className="remove-btn transition"
            onClick={() => removeFromCart(id)}
          >
            x
          </button>
          <img
            src={item.imgUrl}
            alt={item.name}
            className="w-full max-w-[125px] h-auto"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-jost font-bold">{item.name}</h4>
          <span className="text-[#0684ff]">Clothes</span>
        </div>
      </td>
      <td className="p-4">
        <span className="font-bold table-price text-[#8799a3]">
          {formatCurrency(item.price)}
        </span>
      </td>
      <td className="p-4 flex justify-center">
        <div className="quantity-input ">
          <button
            className="input-number-decrement"
            onClick={() => decreaseQuantity(id)}
          >
            –
          </button>
          <input
            className="input-number transition mx-[10px]"
            type="text"
            value={quantity}
            readOnly={true}
          />
          <button
            className="input-number-increment"
            onClick={() => increaseQuantity(id)}
          >
            +
          </button>
        </div>
      </td>
      <td>
        <span className="table-price text-[#39b54a]">
          {formatCurrency(item.price * quantity)}
        </span>
      </td>
    </tr>
  );
};

export default Row;
