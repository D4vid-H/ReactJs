import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartContextProvaider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("carritoCompra");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("carritoCompra", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    isInCart(item) ? addQuantity(item) : setCart([...cart, item]);
  };

  const getCart = () => {
    return cart;
  };

  const addQuantity = (item, count, string) => {
    if (cart.some((product) => product.id === item.id)) {
      const UpdateQuantity = cart.map((product) => {
        if (product.id === item.id) {
          if (
            string === "add" &&
            product.quantity + parseInt(count) <= product.stock
          ) {
            const update = {
              ...product,
              quantity: product.quantity += parseInt(count),
            };
            return update;
          } else if (
            string === "delete" &&
            product.quantity - parseInt(count) > 0
          ) {
            const update = {
              ...product,
              quantity: product.quantity -= parseInt(count),
            };
            return update;
          }
        }
        return product;
      });
      setCart(UpdateQuantity);
    }
  };

  const getQuantity = () => {
    let total = 0;
    cart.forEach((product) => (total += product.quantity));
    return total;
  };

  const getTotalPurchase = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total;
  };

  const removeItem = (item) => {
    setCart(cart.filter((product) => product.id !== item.id));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    return cart.some((product) => product.id === item.id);
  };

  return (
    <CartContext.Provider
      value={{
        isInCart,
        clear,
        removeItem,
        addItem,
        getCart,
        getQuantity,
        addQuantity,
        getTotalPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
