export type CartItemType = {
  id: string;
  quantity?: number;
};

export type ContextType = {
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
  getItemsQuantity: (id: string) => number;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItemType[];
};
