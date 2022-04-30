import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../../service/firebase/firestore";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId, nameSrc } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId, nameSrc)
      .then((products) => {
        setProducts(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, nameSrc]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (products.length === 0) {
    return (
      <div className="itemList">
        <p className="itemListContent">{props.gretens}</p>
        <h2>No Hay Productos Disponible</h2>
      </div>
    );
  }

  return (
    <div className="itemList">
      <p className="itemListContent">{props.gretens}</p>
      <ItemList listProd={products} />
    </div>
  );
}

export default ItemListContainer;
