import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../service/firebase";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { categoryId, nombreSrc } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("categoria", "==", categoryId)
        )
      : nombreSrc
      ? query(
          collection(firestoreDb, "products"),
          where("nombre", ">=", nombreSrc)
        )
      : query(collection(firestoreDb, "products"), orderBy("nombre", "asc"));

    getDocs(collectionRef).then((response) => {
      const products = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    });
  }, [categoryId, nombreSrc]);

  return (
    <div className="itemList">
      <p className="itemListContent">{props.gretens}</p>
      <ItemList listProd={products} />
    </div>
  );
}

export default ItemListContainer;
