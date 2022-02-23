import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail.js';

export default function ItemDetailContainer() {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        baseProductos().then(res=> setProducts(res))
    });



const baseProductos = () =>{
    let products =[{
        "id":1,
        "nombre":"MOCHILA XTREM 14354626421 GAMMA 25 B/B",
        "detalle": "Mochila de cordura con 5 cierres, porta notebook. Resfuerzo en las tiras y compartimiento para celular. Tiras regulables",
        "precio":8780,
        "stock":4,
        "img":"./img/producto1.jpg"
    },{
        "id":10,
        "nombre":"ROMPECABEZAS INKDROP MOTORCYCLES 25 PZAS",
        "detalle": "Rompecabezas de 25 piezas para armar, 100% carton reciclado.",
        "precio":300,
        "stock":5,
        "img":"./img/producto10.jpg"
    }];


    return new Promise((res, rej)=>{
    setTimeout(()=>{res(products)},2000)
    })
}

    return (
        <div>  
            <h1>Detalle de producto</h1>
            {!products?.length ? <p>Cargando...</p> : <>{<ItemDetail producto={products[0]}/>}</>}
            
        </div>
    )}

