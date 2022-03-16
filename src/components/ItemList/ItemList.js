import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.js'
import './ItemList.css'
import { collection, getDocs} from 'firebase/firestore'
import db from '../../utils/firebase'

export default function ItemList({productos, categoryId}) {

return (
    <div>
        <h2 className='catalogo__titulo'>Catálogo {categoryId}</h2>
        <div className='catalogo'>
        {!productos?.length ? <img className='loading' src='../loading.gif' alt='Loading'/> : <>{productos.map(product =>(<Item key={product.id} product= {product}/>))}</>}
        </div>
    </div>
);

}