import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.js'
import './ItemList.css'
import { collection, getDocs} from 'firebase/firestore'
import db from '../../utils/firebase'

export default function ItemList({categoria}) {
    const [productos, setProducts] = useState([]);

    useEffect(() => { categoria !== undefined ? getDataCategory(): getData()},[categoria]);

    const getData = async () => {
        try {
            const itemsCollection = collection(db, "items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            setProducts(result)
        } catch (error) {
            console.log('error', error);
        }
    }

    const getDataCategory = async () => {
        try {
            const itemsCollection = collection(db, "items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            setProducts(result.filter(e=>e.categoria === categoria))
        } catch (error) {
            console.log('error', error);
        }
    }




return (
    <div>
        <h2 className='catalogo__titulo'>Catálogo {categoria}</h2>
        <div className='catalogo'>
        {!productos?.length ? <img className='loading' src='../loading.gif' alt='Loading'/> : <>{productos.map(product =>(<Item key={product.id} product= {product}/>))}</>}
        </div>
    </div>
);

}