import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function Cart() {
    const {cart} = useContext(CartContext);
    return (
        <div className='carrito'>
        {cart.length === 0 ? (
            <h1>El carrito esta vacío.</h1>)
            :
            (cart.map((i) => {
        return (
            <div className='carritoLinea'>
            <p>
                {i.nombre} x {i.cant}
            </p>
            <button className="btn btn-warning">
                Limpiar
            </button>
            </div>
        );
        })
    )}
    </div>
    )
}

