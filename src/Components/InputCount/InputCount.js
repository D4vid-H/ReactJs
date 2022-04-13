import { useState } from "react";
import "./InputCount.css";

const InputCount = ({ inicio, stock, onAdd }) => {
const [count, setCount] = useState(inicio);


  const handleChange = (target) =>{
    if(target.value <= stock && target.value >= 1){
      setCount(target.value);
    }

  }

  return(
    <div>
      <input type="number" onChange={handleChange} value={count} />
      <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
    </div>
)
}

export default InputCount;