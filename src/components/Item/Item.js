import ItemCount from "../ItemCount/ItemCount.js"
import './Item.css'


export default function Item({product}) {


return(
<div>
<article className="tarjetaproducto">
    <div>
        <img src={product.img} className="tarjetaproducto__foto" alt="undefined"/>
        <h3 className="tarjetaproducto__nombre">{product.nombre}</h3>
        <h4 className="tarjetaproducto__precio">${product.precio}</h4>
        <div className ="cant-compra">
            <ItemCount stock={product.stock}/>
            <button className="tarjetaproducto__boton">Comprar</button>
        </div>
    </div>
</article>
</div>)}