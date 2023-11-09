import { createContext, useContext, useState } from "react";
import { CartItemType, ContextType } from "./CartContext.types";
import { useLocalStorage } from "hooks/useLocalStorage";

export const CartContext = createContext({} as ContextType);

export const useShoppingCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const getItemsQuantity = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id: string) => {
    setCartItems((currentItems: CartItemType[]) => {
      if (currentItems.find((item) => item.id == id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((currentItems: CartItemType[]) => {
      if (currentItems.find((item) => item.id == id)?.quantity === 1) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((currentItems: CartItemType[]) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  return (
    <CartContext.Provider
      value={{
        getItemsQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
