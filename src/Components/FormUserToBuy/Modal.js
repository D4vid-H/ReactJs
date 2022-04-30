import CartContext from "../../Context/CartContext";
import NotificationContext from "../ToastMessegs/ToastMessage";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { firestoreDb } from "../../service/firebase";
import {
  getDocs,
  addDoc,
  writeBatch,
  collection,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { XIcon } from "@heroicons/react/outline";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { getCart, getTotalPurchase, clear } = useContext(CartContext);
  const { setNotification } = useContext(NotificationContext);

  const navigate = useNavigate();
  const buyer = {
    name: name,
    surname: surname,
    email: email,
    phone: phone,
  };

  const CartOrder = (buyer) => {
    const objOrder = {
      items: getCart(),
      buyer: buyer,
      total: getTotalPurchase(),
      date: new Date(),
    };

    const ids = getCart().map((prod) => prod.id);
    const batch = writeBatch(firestoreDb);
    const collectionsRef = collection(firestoreDb, "products");
    const outOfStock = [];

    getDocs(query(collectionsRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = getCart().find(
            (prod) => prod.id === doc.id
          )?.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionsRef = collection(firestoreDb, "orders");
          return addDoc(collectionsRef, objOrder);
        } else {
          return Promise.reject({
            name: "outOfStockError",
            products: outOfStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();
        setNotification("success", `Se realizo la compra: ${id}`);
      })
      .catch((error) => {
        setNotification(
          "error",
          `No se pudieron agregar por falata de stock: ${error}`
        );
      })
      .finally(() => {
        setShowModal(false);
        clear();
        navigate("/");
      });
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mb-6 mt-32 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-1 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Datos Comprador</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => (setShowModal(false), navigate("/cart"))}
                  >
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Nombre
                    </label>
                    <input
                      onChange={(evt) => setName(evt.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Apellido
                    </label>
                    <input
                      onChange={(evt) => setSurName(evt.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    <input
                      onChange={(evt) => setEmail(evt.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Telefono
                    </label>
                    <input
                      onChange={(evt) => setPhone(evt.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => CartOrder(buyer)}
                  >
                    Cargar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
