import Navbar from "./Components/NavBar/NavBar";
import ItemListConatainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Components/Form/Form";
import Cart from "./Components/Cart/Cart";
import { CartContextProvaider } from "./Context/CartContext";
import { NotificationProvaider } from "./Components/ToastMessegs/ToastMessage";

export default function App() {
  const gretens = "Listado de Productos";

  return (
    <NotificationProvaider>
      <CartContextProvaider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListConatainer gretens={gretens} />}
            />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListConatainer gretens={gretens} />}
            />
            <Route
              path="/categoria/0"
              element={<ItemListConatainer gretens={gretens} />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/opcion/contacto" element={<Form />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>Not Found 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvaider>
    </NotificationProvaider>
  );
}
