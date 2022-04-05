import "../../Styles/styles.css"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js"
import { Link } from "react-router-dom"
import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function ItemDetail({producto, sum, rest, count, agregaCarrito, visibleCount}) {
    const {id, nombre, desc, precio, stock, img} = producto
    const {addItem} = useContext(CartContext);
    return (
        <>
            {
            id 
            ?  
        <div className="detalleProducto-pagina">
            <div className="detalleProducto-contenedor">
                <img src={img} alt={nombre}/>
                <div className="detalleProducto-descripcion">
                    <h2>{nombre}</h2>
                    <p>{desc}</p>
                    <h2>${Intl.NumberFormat("de-DE").format(precio)}</h2>                    
                    <h4>{stock} disponibles.</h4>
                    {
                        visibleCount ?
                        <>
                        <ItemCount stock={stock} sum={sum} rest={rest} count={count}/>
                        <button disabled={count === 0} onClick={()=>{addItem(producto, count); agregaCarrito()}} className="botonProducto-comprar">Agregar</button>
                        </>
                        :
                        <>
                        <p className="agregadoCarrito">Se han agregado {count} unidades al carrito.</p>
                        <Link to={"/cart"}><button className="botonProducto-comprar">Terminar mi compra</button></Link>
                        </>
                    }   
                </div>
            </div>
        </div>
            :
            <img className='loading' src='https://firebasestorage.googleapis.com/v0/b/libreria-studenta.appspot.com/o/img%2Floading.gif?alt=media&token=cd9e0cdf-dc55-42fe-8ce4-9e346847875d' alt='Loading'/>
            }
            </>
    )}
