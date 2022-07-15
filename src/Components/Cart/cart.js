import React, { useContext } from 'react';
import { cartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const {products} = useContext(cartContext)

    
    /* const productsInCart =  []
    
    for (let i = 0; i < products.length; i+=1) {
        products[i].producto
        }
    } */

    console.log(products[0].producto)


    return (
        <div>
        {products.length === 0
            ? <h1>Carrito Vacio, no seas zopenco y compra algo <Link to="/">aquí</Link></h1>
            : <>{products.map(product => <div><h2>Hola</h2><h1 key={product.id}>product.nombre</h1></div>)}</>
        }
        </div>

    )
}

export default Cart