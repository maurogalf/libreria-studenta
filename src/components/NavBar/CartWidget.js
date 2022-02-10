import './CartWidget.css'

const CartWidget = () =>{
    return(
        <button id="btn-carrito" type="button" className="btn-carrito">
        🛒
        <span className="burbuja-carrito">
            5
        </span>
        </button>
    )
}

export default CartWidget