import { createContext, useEffect, useState } from "react";

const CartContext = createContext();


export function CartContextProvaider ({children}){
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("carritoCompra");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
        
    });

    useEffect(() =>{

        localStorage.setItem("carritoCompra", JSON.stringify(cart));        
        
    }, [cart]) 

  
    const addItem = (item) => {      
        isInCart(item) ? addQuantity(item) : setCart([...cart, item]);        
    };

    const getCart = () => {
        return cart;
    };
   
    const addQuantity = (item) => {        
        const objeto = (cart.find(prod => prod.id === item.id && (prod.quantity += item.quantity)));

        setCart(...cart.filter(prod => prod.id !== item.id), objeto);
    }; 

    const getQuantity = () =>{
        let total = 0;
        cart.forEach(prod => total += prod.quantity);
        return total;
    };

    const totalCompra = () => {
        
        /* const aux = cart.map(prod => {

        })
         */
    };

    const removeItem = (item) => {
        setCart(cart.filter(prod => prod.id !== item.id));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (item) => {
        return cart.some(prod => prod.id === item.id);
    };

    return(

        <CartContext.Provider value={{
            isInCart, 
            clear, 
            removeItem, 
            addItem,
            getCart,
            getQuantity,
            addQuantity,
            totalCompra
             }} >
            {children}
        </CartContext.Provider>
    )


}

export default CartContext;