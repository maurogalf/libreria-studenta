import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.js'
import './ItemList.css'


export default function ItemList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        baseProductos().then(res=> setProducts(res))
    });



const baseProductos = () =>{
    let products =[{
        "id":1,
        "nombre":"MOCHILA XTREM 14354626421 GAMMA 25 B/B",
        "precio":8780,
        "stock":4,
        "img":"./img/producto1.jpg"
    },{
        "id":2,
        "nombre":"MOCHILA ELF I6429B CARRO 1DIV.AZUL B/GOM",
        "precio":13798,
        "stock":5,
        "img":"./img/producto2.jpg"
    },{
        "id":3,
        "nombre":"COMBO CARTUCHO HP 664 ORIG NEGRO+COLOR+4 RESALTADORES REGALO",
        "precio":3207,
        "stock":3,
        "img":"./img/producto3.jpg"
    },{
        "id":4,
        "nombre":"PISTA LANZADOR BL3721",
        "precio":2365,
        "stock":4,
        "img":"./img/producto4.jpg"
    },{
        "id":5,
        "nombre":"REPUESTO AGENDA ONIX N*8 S/V 16X22",
        "precio":290,
        "stock":2,
        "img":"./img/producto5.jpg"
    },{
        "id":6,
        "nombre":"MARCADOR SHARPIE MISTICOS CAJA X 30",
        "precio":6099,
        "stock":1,
        "img":"./img/producto6.jpg"
    },{
        "id":7,
        "nombre":"MARCADOR SHARPIE MISTICOS BLISTER X 12",
        "precio":2069,
        "stock":3,
        "img":"./img/producto7.jpg"
    },{
        "id":8,
        "nombre":"MARCADOR SHARPIE MISTICOS BLISTER X 24",
        "precio":3949,
        "stock":2,
        "img":"./img/producto8.jpg"
    },{
        "id":9,
        "nombre":"ROMPECABEZAS INKDROP CARS 25 PZAS",
        "precio":300,
        "stock":6,
        "img":"./img/producto9.jpg"
    },{
        "id":10,
        "nombre":"ROMPECABEZAS INKDROP MOTORCYCLES 25 PZAS",
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
        <h2 className='catalogo__titulo'>Catálogo</h2>
        <div className='catalogo'>
        {!products?.length ? <p>Cargando...</p> : <>{products.map(product =>(<Item key={product.id} product= {product}/>))}</>}
        </div>
    </div>
);

}