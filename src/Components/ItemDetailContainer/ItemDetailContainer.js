import { useEffect, useState } from "react";
/* import { getItem } from "../AsyncMock/AsyncMock"; */
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../service/firebase";
import { getDoc, doc } from "firebase/firestore";

function ItemDetailContainer(/* { setCart, cart } */) {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getDoc(doc(firestoreDb, "products", id)).then((response) => {
      const product = { id: response.id, ...response.data() };
      setProduct(product);
    });
  }, [id]);

  return (
    <>
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <h2>No Existe el Producto</h2>
      )}
    </>
  );
}

export default ItemDetailContainer;
