import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ init, stock, onAdd }) {
  const [count, setCount] = useState(init);

  const countIncrement = () => {
    count < stock && setCount(count + 1);
  };

  const countDecrement = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className="btnContain">
      <div className="btnCountContain">
        <button className="btnCount" type="" onClick={countDecrement}>
          -
        </button>
        <span className="counter">{count}</span>
        <button className="btnCount" type="" onClick={countIncrement}>
          +
        </button>
      </div>
      <button
        className="bg-blue-700 opacity-100 hover:opacity-80 text-gray-100 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
        onClick={() => {
          onAdd(stock, count);
        }}
      >
        <p>Agregar al Carrito</p>
      </button>
    </div>
  );
}

export default ItemCount;
