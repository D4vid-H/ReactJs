import Navbar from "./Components/NavBar/NavBar";
import ItemListConatainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

export default function App() {
  const gretens = "Desafio clase 2";

  const agregarProd = (stock, count) => {
    stock - count >= 0 &&
      count !== 0 &&
      console.log(`Se agregaron ${count} productos`);
  };

  return (
    <>
      <Navbar />
      <ItemCount stock={9} inicio={1} onAdd={agregarProd} />
      <ItemListConatainer gretens={gretens} />
      <ItemDetailContainer />
    </>
  );
}
