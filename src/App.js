import Navbar from './Components/NavBar';
import ItemListConatainer from './Components/ItemListContainer'


export default function App() {

  const gretens = 'Desafio clase 2'

  return (
    <>
      <Navbar />
      <ItemListConatainer gretens={gretens} />    
    </>
    
  )
}

