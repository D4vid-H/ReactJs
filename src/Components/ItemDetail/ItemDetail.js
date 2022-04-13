import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Select from "../SelectOptions/Select";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const productImg = require.context("../../img");

function ItemDetail({ nombre, picturUrl, informacion, categoriName, descripcion, precio }) {
  const [quantity, setQuantity] = useState(0);
  
  const options = [{id: 1, value: "#00f", text: "Azul"}, {id:2, value: "#f00", text: "Rojo"}];

  const handleSelec = (text) => {
    console.log(`El color es ${text}`);
  }
  
  const agregarProd = (stock, count) => {
    (stock - count >= 0 &&
      count !== 0) && setQuantity(count);
  };
    

  return (
    <div className="cardDetailContainer">
      <div className="grillaDetail">
        <div className="imgContainer">
          {picturUrl ? (
            <img src={productImg(picturUrl)} alt="nada" />
          ) : (
            "Cargando..."
          )}
        </div>

        <div className="infoContainer">
          <h1>{nombre}</h1>
            <span>Categoria: {categoriName}</span>
          <p>Descripcion: {descripcion}</p>
          <p>Mas informacion: {informacion}</p>
        </div>
        <div className="priceContainer">
          <span>Precio: $ {precio} </span>
        </div>               
        { quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount stock={9} inicio={1} onAdd={agregarProd} />} 
        <Select options={options} onSelect={handleSelec} />      
      </div>
    </div>
  );
}

export default ItemDetail;
