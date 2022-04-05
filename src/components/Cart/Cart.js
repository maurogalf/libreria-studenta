import './Cart.css';
import { Link } from 'react-router-dom'; 
import React, {useContext, useState} from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';
import Swal from 'sweetalert2'
import { generateOrder } from '../../utils/firebase';

const initialBuyer = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: ""
}

export default function Cart() {
    const {qCart, cart, removeItem, cleanCart} = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialBuyer)
    
    const handlerChange = (e)=> {
        setBuyer({...buyer,[e.target.name]:e.target.value})
    }
    const handlerSubmit = (e)=>{
        e.preventDefault();
        if(buyer.nombre !== "" && buyer.apellido !== "" && buyer.telefono !== "" && buyer.email !== ""){
            generateOrder(orden)
            .then((res)=>{
                new Swal({
                    title: `Felicitaciones ${buyer.nombre}! Tu orden fue enviada con exito.`,
                    text: `Numero de identificador de orden es: ${res.id}`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                }).then(cleanCart())
            })
        }else {
            new Swal({
                title: 'Atencion!',
                text: 'Debe completar todos los campos',
                icon: 'error'
            })}
    }

    let sum = 0;
    for (let i = 0; i < cart.length; i++){
        sum += cart[i].cant * cart[i].precio;
    }

    const orden = {
        buyer,
        cart,
        sum
    }


    return (
        <div className='carrito'>
            
            {cart.length === 0 ? (
                <>
                <h1>El carrito se encuentra vacío.</h1>
                <img className='emptyCartImage' src='https://firebasestorage.googleapis.com/v0/b/libreria-studenta.appspot.com/o/img%2FcartEmpty.png?alt=media&token=ec63e9b3-3dbb-47a7-9d2b-99cf057895a9' alt='Carrito Vacio'/>
                <Link to={"/libreria-studenta"}><button className='btn-vaciarCarrito'>Volver al inicio</button></Link>
                </>)
                :
                <>
                <h2>Carrito de compras</h2>
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
                <td><Link to ={`/item/${i.id}`}><spam className='verArticulo'>{i.nombre}</spam></Link></td>
                <td className="tb-c">${Intl.NumberFormat("de-DE").format(i.precio)}</td>
                <td className="tb-c">{i.cant}</td>
                <td className="tb-c">${Intl.NumberFormat("de-DE").format(i.precio * i.cant)}</td>
                <td className="tb-c"><button className='btn-remItem' onClick={()=>removeItem(i.id, i.cant)}>X</button></td>
                </tr>
                )})}
                <tr className="linea-carrito  linea-total">
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
        <form 
            onSubmit={handlerSubmit}
            onChange={handlerChange}
            className='formulario'>
                <div><h2 className='formulario__titulo'>Ingrese sus datos</h2></div>
            <div className="formulario__campos">
                <div className="formulario__campos--izq">
                    <label>Nombre: </label><input type="text" name="nombre"/>
                </div>
                <div className="formulario__campos--izq">
                    <label>Apellido: </label><input type="text" name="apellido"/>
                </div>
            </div>
            <div className="formulario__campos">
                <div className="formulario__campos--izq">
                    <label>Teléfono: </label><input type="number" name="telefono"/>
                </div>
                <div className="formulario__campos--izq">
                    <label>Email: </label><input type="text" name="email"/>
                </div>
            </div>
            <div className="formulario__campos">
                <div className="formulario__campos--cen"><button className='btn-vaciarCarrito'>Enviar Orden</button></div>
                <div className="formulario__campos--cen"><button className='btn-vaciarCarrito' onClick={()=>cleanCart()}>Vaciar Carrito</button></div>
            </div>
        </form>
        </>}
        </div>);
}

