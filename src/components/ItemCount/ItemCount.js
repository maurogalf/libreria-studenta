import React, {useState} from "react";

const ItemCount = (props) =>{
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
        <div className="cant-selec">
            <button onClick={restaCant} className="cant-mod-bot">-</button>
            <div className="cant-eleg">{stock}</div>
            <button onClick={sumaCant} className="cant-mod-bot">+</button>
        </div>
    )
}

export default ItemCount