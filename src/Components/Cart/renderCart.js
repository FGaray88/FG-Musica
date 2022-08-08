import React, { useContext } from 'react';
import { cartContext } from "../../Context/CartContext";
import './renderCart.css';


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
                <div className='titulo'>
                    <h2>Producto</h2><h2>Cantidad</h2><h2>Precio unitario</h2><h2>Precio Total</h2><h3> </h3>
                </div>
                {products.map(product =><div className='products' key={product.id} ><p>{product.nombre}</p><p>{product.qty}</p><p>${product.precio}</p><p>${product.precio*product.qty}</p><button className='itemButton' onClick={() => borrar(product.id)}>Eliminar Item</button></div>)}
                <div className='vaciarCart'>
                    <button onClick={vaciarCart}>Vaciar Carrito</button>
                </div>
                <div className='footer'>
                    <p className='text'>Total de {cantidad} productos agregados</p>
                    <p className='price'>Precio total: ${total}</p>
                </div>
            </div>
    )
}

export default RenderCart


