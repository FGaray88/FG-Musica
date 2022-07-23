import React, { useContext } from 'react';
import { cartContext } from "../../Context/CartContext";


const RenderCart = ()  => {

    const { products } = useContext(cartContext)
    const { reset } = useContext(cartContext);
    const { borrarProducts } = useContext(cartContext);
    const { cantidad } = useContext(cartContext);
    const { total } = useContext(cartContext);
    

    const vaciarCart = () => {
        reset()
    }

    const borrar = (id) => {
        borrarProducts(id)
    }

    return (
        <div className='table'>
            <div>
                <div className='title'>
                    <h1>Producto</h1><h1>Cantidad</h1><h1>Precio unitario</h1><h1>Precio Total</h1>
                </div >
                {products.map(product =><div className='products' key={product.id} ><p>{product.nombre}</p><p>{product.qty}</p><p>${product.precio}</p><p>${product.precio*product.qty}</p><button onClick={() => borrar(product.id)}>Eliminar Item</button></div>)}
                <div className='footer'>
                    <p>Cantidad de productos agregados: {cantidad}</p>
                    <p>Precio total: ${total}</p>
                </div>
                <div className='vaciarCart'>
                    <button onClick={vaciarCart}>Vaciar Carrito</button>
                </div>
            </div>
        </div>

    )
}

export default RenderCart


