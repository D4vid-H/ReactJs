import changuito from "../../img/changuito.png";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="changuito">
      <img src={changuito} className="changuito" alt='carrito' />
    </div>
  );
}

export default CartWidget;
