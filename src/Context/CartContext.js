import React, { createContext, useState } from "react";


export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({children}) => {

    const [products, setProducts] = useState([])


console.log(products)

    const cantidadProducts = () => {
        let qty = 0;
        products.forEach(product => {
            qty += product.qty;
        })
        return qty;
    }

    const addProduct = (product) => {
        if (isInCart(product.id)){
            const aux = [...products]
            const found = aux.find(p => p.id === product.id);
            found.qty += product.qty;
            setProducts(aux)
        }else{
            setProducts([...products, product])
        }
    };

    
    const borrarProducts = (id) => {
        setProducts(products.filter(product => product.id !==id));
    }

    const isInCart = (id) => {
        return products.some(product => product.id === id);  
    };

    const reset = () => {
        setProducts([]);
    }


    return (
        <Provider value={{products, addProduct, borrarProducts, reset, cantidadProducts}}>
            {children}
        </Provider>
    )
}

export default CartProvider