import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.js'
import './ItemList.css'

export default function ItemList() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        baseProductos().then(res=> setProducts(res))
    },[]);

class Producto {
    constructor(id, nombre, precio, stock, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

const baseProductos = () =>{
    let products =[];
    const producto1 = new Producto(1, 'MOCHILA XTREM 14354626421 GAMMA 25 B/B', 8780, 4,'./img/producto1.jpg');
    const producto2 = new Producto(2, 'MOCHILA ELF I6429B CARRO 1DIV.AZUL B/GOM', 13798, 5,'./img/producto2.jpg');
    const producto3 = new Producto(3, 'COMBO CARTUCHO HP 664 ORIG NEGRO+COLOR+4 RESALTADORES REGALO', 3207, 3,'./img/producto3.jpg');
    const producto4 = new Producto(4, 'PISTA LANZADOR BL3721', 2365, 4,'./img/producto4.jpg');
    const producto5 = new Producto(5, 'REPUESTO AGENDA ONIX N*8 S/V 16X22', 290, 2,'./img/producto5.jpg');
    const producto6 = new Producto(6, 'MARCADOR SHARPIE MISTICOS CAJA X 30', 6099, 1,'./img/producto6.jpg');
    const producto7 = new Producto(7, 'MARCADOR SHARPIE MISTICOS BLISTER X 12', 2069, 3,'./img/producto7.jpg');
    const producto8 = new Producto(8, 'MARCADOR SHARPIE MISTICOS BLISTER X 24', 3949, 2,'./img/producto8.jpg');
    const producto9 = new Producto(9, 'ROMPECABEZAS INKDROP CARS 25 PZAS', 300, 6,'./img/producto9.jpg');
    const producto10 = new Producto(10, 'ROMPECABEZAS INKDROP MOTORCYCLES 25 PZAS', 300, 5,'./img/producto10.jpg');

    products.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10)

    return new Promise((res, rej)=>{
    setTimeout(()=>{res(products)},2000)
    })
}

return (
    <div>
        <h2 className='catalogo__titulo'>Catálogo</h2>
        <div className='catalogo'>
        {products?.length === 0 ? <p>Cargando...</p> : <>{products.map(product =>(<Item product= {product}/>))}</>}
        </div>
    </div>
);

}