import { useState } from "react";

const InputCount = ({ init, onAdd, product }) => {
  const [count, setCount] = useState(init);

  const handleChange = ({ target }) => {
    if (target.value <= product.stock && target.value >= init) {
      setCount(target.value);
    }
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={count} />
      <span className="mr-1" onClick={() => onAdd(product, count)}>
        Agregar
      </span>
      <span className="ml-1" onClick={() => onAdd(product, count, "delete")}>
        Eliminar
      </span>
    </div>
  );
};

export default InputCount;
