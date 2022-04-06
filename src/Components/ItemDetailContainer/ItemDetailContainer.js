import { useEffect, useState } from "react";
import { getItem } from "../AsyncMock/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getItem()
      .then((prod) => {
        setProduct(prod);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ItemDetail item={product} />
    </>
  );
}

export default ItemDetailContainer;
