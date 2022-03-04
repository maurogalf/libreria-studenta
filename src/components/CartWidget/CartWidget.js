import './CartWidget.css'
import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import { Link } from "react-router-dom"


const CartWidget = () =>{
    const {qCart} = useContext(CartContext);
    return(
        <Link to={"/cart"}><button id="btn-carrito" type="button" className="btn-carrito">
        🛒
        <span className="burbuja-carrito">
            {qCart}
        </span>
        </button>
        </Link>
    )
}

export default CartWidget