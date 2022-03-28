import { useState } from 'react';
import './ItemCount.css';

function ItemCount({inicio, stock}){
  const [count, setCount] = useState(inicio);

  const countIncrement = (stock) => {
    (count < stock) && setCount(count+1);   
    };

  const countDecrement = () => {
    (count > 0) && setCount(count-1);
    };

  const onAdd = (stock) => {
    (stock > 0) && console.log(`Se agregaron ${count} productos`);
    };

    return(
        <div className='btnContain'>
            <div className='btnCountContain'>
                <button className='btnCount' type="" onClick={() => {countIncrement(stock)}}
                >
                +
                </button>
                <span className='counter'>{count}</span>
                <button className='btnCount' type="" onClick={() => {countDecrement()}}
                >
                -
                </button>
            </div> 
            <button className='btnOnAdd' onClick={() => {onAdd(stock)}}><p>Agregar al Carrito</p></button>
        </div>  
    )
        
}

export default ItemCount;