import React, { useContext } from 'react';
import cart from '../../assets/carrito.png';
import './cartWidget.css'
import { cartContext } from '../../Context/CartContext';

const CartWidget = () => {

    const { cantidadProducts } = useContext(cartContext)
    const numero = cantidadProducts();

    return(
        <div className='divCont'>
            <img class="cart" src={cart} alt="carrito" />
            <p className='p'>Ver Carrito {numero!==0 ? <p className='n'>{numero}</p> : ""}</p>
        </div>

    )
}


export default CartWidget