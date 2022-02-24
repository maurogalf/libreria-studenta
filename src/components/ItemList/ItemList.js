import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.js'
import './ItemList.css'
import { products } from '../../data/products'

export default function ItemList({categoria}) {
    const [productos, setProducts] = useState([]);

    useEffect(() => {
        if(categoria!=undefined){
            const filtroProductos = products.filter((filtro)=>filtro.categoria === categoria);
            baseProductos(filtroProductos).then(res=> setProducts(res))
        } else {
            baseProductos(products).then(res=> setProducts(res))
        };
    
    });
    
    const baseProductos = (productos) =>{
    return new Promise((res, rej)=>{
    setTimeout(()=>{res(productos)},2000)
    })
}

return (
    <div>
        <h2 className='catalogo__titulo'>Catálogo {categoria}</h2>
        <div className='catalogo'>
        {!productos?.length ? <p>Cargando...</p> : <>{productos.map(product =>(<Item key={product.id} product= {product}/>))}</>}
        </div>
    </div>
);

}