import React, { useState, useEffect} from 'react';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { products } from '../../data/products';    
import { useParams } from 'react-router-dom';



export default function ItemDetailContainer() {
    const [producto, setProducts] = useState({});
    const {itemId} = useParams();
    const [count, setCount] = useState(0);
    const [visibleCount, setVisibleCount] = useState(true);

    const agregaCarrito =()=>{
        setVisibleCount(false);
    }

    const sumaCant =() => {
        setCount(count + 1);
    }
    const restaCant =() => {
        setCount(count - 1);
    }




    useEffect(() => {
        baseProductos().then(res=> setProducts(res))
    },[]);

    const baseProductos = () =>{
        const producto = products.find((product)=>product.id === itemId);
        return new Promise((res, rej)=>{
        setTimeout(()=>{res(producto)},2000)})}

    
    return (
        <div className='itemDetailContainer'>  
            <h1>Detalle de producto</h1>
            {!producto ? <p>Cargando...</p> : <>{<ItemDetail    producto={producto}
                                                                sum={sumaCant}
                                                                rest={restaCant}
                                                                count={count}
                                                                agregaCarrito={agregaCarrito}
                                                                visibleCount={visibleCount}/>}</>}
            
        </div>
    )}

