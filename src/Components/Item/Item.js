import { Link } from "react-router-dom";
import "./Item.css";

const productImg = require.context("../../img");

function Item({ id, nombre, precio, picturUrl }) {
  return (
    <div className="cardContainer">
      <div className="cardHead">
        <span className="cardTitel">{nombre}</span>
      </div>
      <div className="cardImage">
        <img
          src={productImg(picturUrl)}
          className="cardImg "
          alt="Imagen del producto"
        />
      </div>
      <div className="cardBtnContent">
        <Link
          to={`/detail/${id}`}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cardBtn"
        >
          Ver Producto
        </Link>
      </div>
      <div className="cardFooter">
        <span className="cardStock product-price">
          Precio:<b>$</b>
          <b>{precio}</b>
        </span>
      </div>
    </div>
  );
}

export default Item;
