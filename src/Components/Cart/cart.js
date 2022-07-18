import React, { useContext } from 'react';
import { cartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const {products} = useContext(cartContext)
    const { reset } = useContext(cartContext);
    const { borrarProducts } = useContext(cartContext);

    

    const vaciarCart = () => {
        reset()
    }

    const borrar = (id) => {
        borrarProducts(id)
    }

    return (
        <div>
        {products.length === 0
            ? <h1>Carrito Vacio, no seas zopenco y compra algo <Link to="/">aquí</Link></h1>
            : <div>
                {products.map(product =><div key={product.id} ><h1>Producto: {product.nombre}</h1><h2>Precio: ${product.precio}</h2><h3>Cantidad: {product.qty}</h3><button onClick={() => borrar(product.id)}>Eliminar Item</button></div>)}
                <div>
                    <button onClick={vaciarCart}>Vaciar Carrito</button>
                </div>
            </div>

        }
        </div>

    )
}

export default Cart