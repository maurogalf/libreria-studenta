import React, {createContext, useState} from 'react'

export const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qCart, setQCart] = useState(0);
    const cleanCart = ()=> {
        setCart([]);
        setQCart(0);
    }

    const removeItem = (id, cant)=>{
        setQCart(qCart - cant)
        const aux = cart.filter(product=>product.id !== id)
        setCart(aux);
    }


    const addItem = (producto, cant) =>{
        setQCart(qCart + cant);
        if (cart.some(product=>product.id === producto.id)){
            const aux = [...cart];
            const indice = cart.findIndex(product => product.id === producto.id);
            aux[indice] = {...aux[indice], cant: aux[indice].cant + cant}
            setCart(aux);
        }else {
            setCart([...cart, {...producto, cant}]);
        }
    };

    return (
        <CartContext.Provider value={{cart, qCart, addItem, removeItem, cleanCart}}>{children}</CartContext.Provider>
    )   
}