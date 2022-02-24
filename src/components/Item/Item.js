import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({product}) {


return(
<div>
<article className="tarjetaproducto">
    <div>
        <img src={product.img} className="tarjetaproducto__foto" alt="undefined"/>
        <h3 className="tarjetaproducto__nombre">{product.nombre}</h3>
        <h4 className="tarjetaproducto__precio">${product.precio}</h4>
        <div className ="cant-compra">
            <Link to ={`/item/${product.id}`}><button className="tarjetaproducto__boton">Comprar</button></Link>
        </div>
    </div>
</article>
</div>)}