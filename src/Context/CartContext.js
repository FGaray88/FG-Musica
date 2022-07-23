import React, { createContext, useState } from "react";


export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    const [idVenta, setIdVenta] = useState("")
    const [dataUser, setDataUser] = useState("")
    const [completed, setCompleted ] = useState(false)

    const operationState = (prop) => {
        setCompleted(prop)
    }


    const screenProvider = (vt, dat) => {
        setIdVenta(vt);
        setDataUser(dat);
    }

    const cantidadProducts = (qty) => {
        products.forEach(product => {
            qty += product.qty;
        })
        setCantidad(qty)
    }

    const addProduct = (product) => {
        const totalPrice = total + product.precio*product.qty
        setTotal(totalPrice)
        cantidadProducts(product.qty)

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
        const reducePrice = total - productTrash.precio*productTrash.qty
        const reduceQty = cantidad - productTrash.qty
        setTotal(reducePrice)
        setCantidad(reduceQty)
    }

    const isInCart = (id) => {
        return products.some(product => product.id === id);  
    };

    const reset = () => {
        setProducts([]);
        setCantidad(0)
        setTotal(0)
    }


    return (
        <Provider value={{products, addProduct, borrarProducts, reset, cantidad, total, idVenta, dataUser, screenProvider, operationState, completed}}>
            {children}
        </Provider>
    )
}

export default CartProvider