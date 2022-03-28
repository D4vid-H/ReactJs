import Navbar from './Components/NavBar';
import ItemListConatainer from './Components/ItemListContainer'
import ItemCount from './Components/ItemCount'

export default function App() {

  const gretens = 'Desafio clase 2'

  return (
    <>
      <Navbar />
      <ItemCount stock= {9} inicio= {1}/>
      <ItemListConatainer gretens={gretens} />    
    </>
    
  )
}

