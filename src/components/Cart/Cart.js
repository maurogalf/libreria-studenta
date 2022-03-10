import './Cart.css';
import { Link } from 'react-router-dom'; 
import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function Cart() {
    const {qCart, cart, removeItem, cleanCart} = useContext(CartContext);
    let sum = 0;
    for (let i = 0; i < cart.length; i++){
        sum += cart[i].cant * cart[i].precio;
    }
    return (
        <div className='carrito'>
            {cart.length === 0 ? (
                <>
                <h1>El carrito se encuentra vacío.</h1>
                <img className='emptyCartImage' src='./cartEmpty.png' alt='Carrito Vacio'/>
                <Link to={"/"}><button className='btn-vaciarCarrito'>Volver al inicio</button></Link>
                </>)
                :
                <>
                <table className="table">
                <thead>
                <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th className="tb-c" scope="col">Precio</th>
                    <th className="tb-c" scope="col">Cantidad</th>
                    <th className="tb-c" scope="col">Total</th>
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
                <td className="tb-c">${Intl.NumberFormat("de-DE").format(i.precio)}</td>
                <td className="tb-c">{i.cant}</td>
                <td className="tb-c">${Intl.NumberFormat("de-DE").format(i.precio * i.cant)}</td>
                <td className="tb-c"><button className='btn-remItem' onClick={()=>removeItem(i.id, i.cant)}>X</button></td>
                </tr>)})}
                <tr className="linea-carrito">
                <td></td>
                <td></td>
                <td></td>
                <td className="tb-c">Total compra:</td>
                <td className="tb-c">{qCart}</td>
                <td className="tb-c">${Intl.NumberFormat("de-DE").format(sum)}</td>
                <td className="tb-c"></td>
                </tr>
                    </tbody>
                    </table>
        <button className='btn-vaciarCarrito' onClick={()=>cleanCart()}>Limiar Carrito</button>
                    </>}
        </div>);
}

