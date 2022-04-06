import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({ listProd }) {
  return (
    <div>
      <ul className="gridItems">
        {listProd?.map((prod) => (
          <Item key={prod?.id} {...prod} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
