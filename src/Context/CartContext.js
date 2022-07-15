import React, { createContext, useState } from "react";


export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = () => {

    }

    const addProduct = (product) => {
        if (isInCart(product.id)){
            const aux = [...products]
            const found = aux.find(p => p.id === product.id);
            found.qty += product.qty;
            setProducts(aux)
        }else {
            setProducts([...products, product])
        }
    }

    const borrarProducts = (id) => {

    }

    const isInCart = (id) =>{
        products.some(product => product.id === id);
    }

    const reset = () => {
        setProducts([]);
    }


    return (
        <Provider value={{products, addProduct, borrarProducts, reset, qtyProducts}}>
            {children}
        </Provider>
    )
}

export default CartProvider