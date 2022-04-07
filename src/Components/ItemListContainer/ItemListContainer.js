import { useEffect, useState } from "react";
import { getProducts } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    getProducts(categoriaId)
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        console.log(error);
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
