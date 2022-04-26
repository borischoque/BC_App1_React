import React, { createContext, useState } from 'react';

// Procedemos a crear el contexto
export const CartContext = createContext();

// Creamos el componente con el contenido del contexto

const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState([]);

    const AddToCart = (item) => {
        const indice = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (indice !== -1) {
        const arrayAux = [...cart];
        arrayAux[indice].initialValue = arrayAux[indice].initialValue + item.initialValue;
        setCart(arrayAux);
        } else {
        setCart([...cart, item]);
        }
    };

    const RemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const RemoveAll = () => {
        setCart([]);
    }

    const totalPrice = (item) => {

        return item.reduce((total, item) => total + item.initialValue*item.price, 0)
    }

    const buyAll = () => {
        console.log('COMPRA FINALIZADA');
        setCart([]);
    }

  return (
    <CartContext.Provider value={{cart, AddToCart, RemoveFromCart,RemoveAll,totalPrice,buyAll}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider