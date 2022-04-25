import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import InputCount from "../InputCount/InputCount";

const productImg = require.context("../../img");

function ItemCart({ product }) {
  const { removeItem, addQuantity } = useContext(CartContext);

  return (
    <>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={productImg(product.picturUrl)}
          alt="{product.imageAlt}"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/detail/${product.id}`}>{product.name}</Link>
            </h3>
            <p className="ml-4">$ {product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Cantidad: {product.quantity}
          </p>
          <InputCount product={product} init={1} onAdd={addQuantity} />
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            Sub Total $ {product.quantity * product.price}
          </p>

          <div className="flex">
            <button
              type="button"
              onClick={() => removeItem(product)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
