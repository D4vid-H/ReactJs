import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../service/firebase/firestore";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    getProduct(id)
      .then((product) => {
        setProduct(product);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      {product ? <ItemDetail {...product} /> : <h2>No Existe el Producto</h2>}
    </>
  );
}

export default ItemDetailContainer;
