import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { collection, getDocs} from 'firebase/firestore'
import db from '../../utils/firebase'
import { useEffect, useState } from 'react'

const ItemListContainer = (props) =>{
    const {categoryId} = useParams();
    console.log(categoryId)
    const [productos, setProducts] = useState([]);

    useEffect(() => { categoryId !== undefined ? getDataCategory(): getData()},[categoryId]);

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
            setProducts(result.filter(e=>e.categoria == categoryId))
        } catch (error) {
            console.log('error', error);
        }
    }


    return(
        <div>
            <h1 className="titulo">{props.greeting}</h1>
            <ItemList productos={productos} categoryId={categoryId}/>
        </div>
    )
}

export default ItemListContainer