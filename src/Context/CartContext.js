import React, { createContext, useState } from "react";


export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [precio, setPrecio] = useState(0)


console.log(products)

    const cantidadProducts = () => {
        let qty = 0;
        products.forEach(product => {
            qty += product.qty;
        })
        return qty;
    }

    const addProduct = (product) => {
        const totalPrice = precio + product.precio
        setPrecio(totalPrice)
        console.log(precio)
        console.log(totalPrice)


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
        
                
        const productTrash = products.find(p => p.id === id);
        console.log(precio)
        const reducePrice = precio - productTrash.precio
        console.log(reducePrice)
        setPrecio(reducePrice)
        console.log(precio)
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