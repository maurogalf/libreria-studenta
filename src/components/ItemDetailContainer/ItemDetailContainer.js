import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { products } from '../../data/products';    
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
    const [producto, setProducts] = useState({});
    const {id} = useParams();

    useEffect(() => {
        baseProductos().then(res=> setProducts(res))
    });

const baseProductos = () =>{
    const producto = products.find((product)=>product.id === id);

    return new Promise((res, rej)=>{
    setTimeout(()=>{res(producto)},2000)
    })
}
    
    return (
        <div>  
            <h1>Detalle de producto</h1>
            {!producto ? <p>Cargando...</p> : <>{<ItemDetail producto={producto}/>}</>}
            
        </div>
    )}

