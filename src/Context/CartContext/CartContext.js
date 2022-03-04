import React, {createContext, useState} from 'react'

export const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qCart, setQCart] = useState(0);
    const [visibleCount, setVisibleCount] = useState(true);


    const agregaCarrito =()=>{
        setVisibleCount(false);
        console.log("se agrega al carrito")
    }

    const addItem = (producto, cant) =>{
        agregaCarrito();
        setQCart(qCart + cant);
        if (cart.some(product=>product.id === producto.id)){
            const aux = [...cart];
            const indice = cart.findIndex(product => product.id === producto.id);
            aux[indice] = {...aux[indice], cant: aux[indice].cant + cant}
            setCart(aux);
        }else {
            setCart([...cart, {...producto, cant}]);
            console.log("no esta el mismo")
        }
        console.log(cart);
        console.log(qCart);

    };

    return (
        <CartContext.Provider value={{visibleCount, cart, qCart, addItem}}>{children}</CartContext.Provider>
    )   
}