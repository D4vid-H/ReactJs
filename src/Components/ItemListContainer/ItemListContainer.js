import { useEffect, useState } from "react";
import { getProducts } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="itemList">
      <p className="itemListContent">{props.gretens}</p>
      <ItemList listProd={products} />
    </div>
  );
}

export default ItemListContainer;
