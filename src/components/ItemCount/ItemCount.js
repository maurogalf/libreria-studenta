import './ItemCount.css'
import React, {useState} from "react";

const ItemListContainer = (props) =>{
    const [stock, setStock] = useState(1);

    const sumaCant =() => {
        if(stock < props.stock){
            setStock(stock+1);            
        }
    }
    const restaCant =() => {
        if(stock > 0){
            setStock(stock-1);            
        }
    }

    return(
        <div>
            <article className="tarjetaproducto">
                <div>
                    <img src="./img/producto1.jpg" className="tarjetaproducto__foto" alt="undefined"/>
                    <h3 className="tarjetaproducto__nombre">Lápices de color x 100 colores Supersoft Faber Castell</h3>
                    <h4 className="tarjetaproducto__precio">$8.999</h4>
                    <div className ="cant-compra">
                        <div className="cant-selec">
                            <button onClick={restaCant} className="cant-mod-bot">-</button>
                            <div className="cant-eleg">{stock}</div>
                            <button onClick={sumaCant} className="cant-mod-bot">+</button>
                        </div>
                        <button className="tarjetaproducto__boton">Comprar</button>
                    </div>
                </div>
            </article>
            
        </div>
    )
}

export default ItemListContainer