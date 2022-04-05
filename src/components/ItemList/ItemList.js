import Item from '../Item/Item.js'
import './ItemList.css'

export default function ItemList({productos, categoryId}) {

return (
    <div>
        <h2 className='catalogo__titulo'>Catálogo {categoryId}</h2>
        <div className='catalogo'>
        {!productos?.length ? <img className='loading' src='https://firebasestorage.googleapis.com/v0/b/libreria-studenta.appspot.com/o/img%2Floading.gif?alt=media&token=cd9e0cdf-dc55-42fe-8ce4-9e346847875d' alt='Loading'/> : <>{productos.map(product =>(<Item key={product.id} product= {product}/>))}</>}
        </div>
    </div>
);

}