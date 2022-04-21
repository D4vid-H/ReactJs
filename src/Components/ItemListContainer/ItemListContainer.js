import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../service/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const collectionRef = categoriaId
      ? query(
          collection(firestoreDb, "products"),
          where("categoria", "==", categoriaId)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef).then((response) => {
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    });
  }, [categoriaId]);

  return (
    <div className="itemList">
      <p className="itemListContent">{props.gretens}</p>
      <ItemList listProd={products} />
    </div>
  );
}

export default ItemListContainer;
