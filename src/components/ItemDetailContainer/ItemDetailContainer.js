import React, { useState, useEffect} from 'react';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import { doc, getDoc} from 'firebase/firestore'
import db from '../../utils/firebase'



export default function ItemDetailContainer() {
    const [producto, setProduct] = useState({});
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
        getItem();
    },[itemId]);

    const getItem = async () => {
        try {
            const prod = doc(db, "items", itemId)
            const resp = await getDoc(prod)
            const result = {id:resp.id, ...resp.data()};
            setProduct(result);
        } catch (error) {
            console.log('error', error);
        }
    }
    

    
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

