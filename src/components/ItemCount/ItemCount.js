import React, {useState} from "react";


const ItemCount = (_stock) =>{
    const [stock, setStock] = useState(1);

    const sumaCant =() => {
        if(stock < _stock.stock){
            setStock(stock+1);            
        }
    }
    const restaCant =() => {
        if(stock > 0){
            setStock(stock-1);            
        }
    }

    return(
        <div className="cant-selec">
            <button onClick={restaCant} className="cant-mod-bot">-</button>
            <div className="cant-eleg">{stock}</div>
            <button onClick={sumaCant} className="cant-mod-bot">+</button>
        </div>
    )
}

export default ItemCount