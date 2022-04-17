import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

function ItemCount({ inicio, stock, onAdd }) {
  const [count, setCount] = useState(inicio);

  const countIncrement = () => {
    count < stock && setCount(count + 1);
  };

  const countDecrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div className="btnContain">
      <div className="btnCountContain">
        <button
          className="btnCount"
          type=""
          onClick={countIncrement}
        >
          +
        </button>
        <span className="counter">{count}</span>
        <button
          className="btnCount"
          type=""
          onClick={ countDecrement }
        >
          -
        </button>
      </div>
      <Link 
        to='/cart'
        className="bg-blue-700 opacity-100 hover:opacity-80 text-gray-100 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
        /* className="btnOnAdd" */
        onClick={() => {
          onAdd(stock, count);
        }}
      >
        <p>Agregar al Carrito</p>
      </Link>
    </div>
  );
}

export default ItemCount;
