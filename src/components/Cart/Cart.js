import './Cart.css'; 
import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function Cart() {
    const {cart, removeItem, cleanCart} = useContext(CartContext);
    return (
        <div className='carrito'>
            {cart.length === 0 ? (
                <h1>El carrito esta vacío.</h1>)
                :
                <>
                <table className="table">
                <thead>
                <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th className="tb-c" scope="col">Precio</th>
                    <th className="tb-r" scope="col">Cantidad</th>
                    <th className="tb-r" scope="col">Total</th>
                    <th className="tb-r" scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {cart.map((i) => {
            return (
                <tr className="linea-carrito">
                <td><img src={i.img} alt={i.nombre}/></td>
                <td>{i.id}</td>
                <td>{i.nombre}</td>
                <td className="tb-c">{i.precio}</td>
                <td className="tb-c">{i.cant}</td>
                <td className="tb-c">{i.precio * i.cant}</td>
                <td className="tb-c"><button className='btn-remItem' onClick={()=>removeItem(i.id, i.cant)}>X</button></td>
                </tr>)})}
                    </tbody>
                    </table>
        <button className='btn-vaciarCarrito' onClick={()=>cleanCart()}>Limiar Carrito</button>
                    </>}
        </div>);
}

