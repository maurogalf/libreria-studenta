import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) =>{
    const categoryId = useParams();
    let categoria = categoryId.categoryId;
    return(
        <div>
            <h1 className="titulo">{props.greeting}</h1>
            
            <ItemList categoria={categoria}/>
        </div>
    )
}

export default ItemListContainer