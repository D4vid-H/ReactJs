import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const productImg = require.context("../../img");

function ItemDetail({ nombre, picturUrl, informacion, categoriName, descripcion, precio }) {
  const agregarProd = (stock, count) => {
    stock - count >= 0 &&
      count !== 0 &&
      console.log(`Se agregaron ${count} productos`);
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
        <ItemCount stock={9} inicio={1} onAdd={agregarProd} />        
      </div>
    </div>
  );
}

export default ItemDetail;
