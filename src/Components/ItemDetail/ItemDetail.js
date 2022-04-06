import "./ItemDetail.css";

const productImg = require.context("../../img");

function ItemDetail({ item }) {
  return (
    <div className="cardDetailContainer">
      <div className="grillaDetail">
        <div className="imgContainer">
          {item?.picturUrl ? (
            <img src={productImg(item?.picturUrl)} alt="nada" />
          ) : (
            "Cargando..."
          )}
        </div>

        <div className="infoContainer">
          <h1>{item.nombre}</h1>
          <p>Descripcion {item?.descripcion}</p>
        </div>
        <div className="priceContainer">
          <span>Precio: $ {item?.precio} </span>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
