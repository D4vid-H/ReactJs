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
      const cartUpdate = cart.map((product) => {  
             
      if (product.id === item.id && string === 'delete') {
          if(product.quantity - parseInt(count) > 0){
          product.quantity -= parseInt(count);
          }
        }else if(product.quantity + parseInt(count) <= product.stock){
        product.quantity += parseInt(count);
        }
        return product;
      });
      setCart(cartUpdate);
    }
  };

  const getQuantity = () => {
    let total = 0;
    cart.forEach((product) => (total += product.quantity));
    return total;
  };

  const totalCompra = () => {
    let totalCompra = 0;
    cart.forEach(product => {
        totalCompra += (product.quantity * product.precio)
    })
        return totalCompra;
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
        totalCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
