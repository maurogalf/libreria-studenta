import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js"

export default function ItemDetail({producto}) {
    const {id, nombre, detalle, precio, stock, img} = producto
    
    return (
        <div className="detalleProducto-pagina">  
            <div className="detalleProducto-contenedor">
                <img src={img}/>
                <div className="detalleProducto-descripcion">
                    <h2>{nombre}</h2>
                    <p>{detalle}</p>
                    <h2>${precio}</h2>
                    <ItemCount stock={stock}/>
                    <button className="botonProducto-comprar">Comprar</button>
                </div>
            </div>
            
        </div>
    )}
