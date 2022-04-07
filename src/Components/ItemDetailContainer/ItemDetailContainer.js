import { useEffect, useState } from "react";
import { getItem } from "../AsyncMock/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((prod) => {
        setProduct(prod);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {product ? <ItemDetail {...product} /> : <h2>No Existe el Producto</h2>}
    </>
  );
}

export default ItemDetailContainer;
