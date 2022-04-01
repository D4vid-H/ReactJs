import { useEffect, useState } from 'react';
import { getProducts } from './Asyncmock';
import ItemList from './ItemList';
import './ItemListContainer.css'


function ItemListContainer(props) {
const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts().then(prods => {
        setProducts(prods);
    }).catch(error => {
        console.log(error);
    })
},[])

return(
        <div className='itemList'>
           <p className='itemListContent'>{props.gretens}</p>
        <ItemList listProd= {products}/>           
        </div>
);
}

export default ItemListContainer