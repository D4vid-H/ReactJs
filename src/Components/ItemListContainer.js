import './ItemListContainer.css'

function ItemListContainer(props) {

return(
        <div className='itemList'>
           <p className='itemListContent'>{props.gretens}</p>
        </div>

);

}

export default ItemListContainer