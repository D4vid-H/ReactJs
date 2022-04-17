import changuito from "../../img/changuito.png";
import "./CartWidget.css";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";

function CartWidget() {  
  const {getQuantity} = useContext(CartContext);

  return (
      <>
    <div className="changuito">
      <img src={changuito} className="changuito" alt='carrito' />
    </div>
      <div className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {getQuantity()}
      </div>
        </>
  );
}

export default CartWidget;
