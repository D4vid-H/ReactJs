import Navbar from "./Components/NavBar/NavBar";
import ItemListConatainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const gretens = "Listado de Productos";

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListConatainer gretens={gretens} />} />
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListConatainer gretens={gretens} />}
        />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
