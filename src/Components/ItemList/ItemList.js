import Item from "../Item/Item";

function ItemList({ listProd }) {
  return (
    <div>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-12 ml-12 mr-12 mb-12">
        {listProd?.map((prod) => (
          <Item key={prod?.id} {...prod} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
