import Navbar from './Components/NavBar';
import ItemListConatainer from './Components/ItemListContainer'
import ItemCount from './Components/ItemCount'

export default function App() {
  const gretens = 'Desafio clase 2';
  
  const agregarProd = (stock, count) => {    
    (((stock - count) >= 0) && (count !== 0)) && console.log(`Se agregaron ${count} productos`);
    };


  return (
    <>
      <Navbar />
      <ItemCount stock= {9} inicio= {1} onAdd= {agregarProd} />
      <ItemListConatainer gretens={gretens} />    
    </>
    
  )
}

