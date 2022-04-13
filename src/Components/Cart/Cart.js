import { Link } from "react-router-dom";
import "./Cart.css"

function Cart() {

    return(
        <div>
            <h1 className="text-3xl font-bold font-mono text-center">Estamos en el Carrito</h1>
            <Link to='/' ><p className=" underline text-right text-inherit mr-12 text-">Seguir COMPRANDO</p></Link>
        </div>
    )
}

export default Cart;