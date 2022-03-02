const ItemCount = ({stock, sum, rest, count}) =>{
    
    return(
        <div className="cant-selec">
            <button disabled={count === 0} onClick={rest} className="cant-mod-bot">-</button>
            <div className="cant-eleg">{count}</div>
            <button disabled={count === stock} onClick={sum} className="cant-mod-bot">+</button>
        </div>
    )
}

export default ItemCount