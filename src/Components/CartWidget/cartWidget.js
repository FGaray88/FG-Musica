import React, { useContext } from 'react';
import cart from '../../assets/carrito.png';
import './cartWidget.css'
import { cartContext } from '../../Context/CartContext';

const CartWidget = () => {

    const { cantidad } = useContext(cartContext)
    
    console.log(cantidad)

    return(
        <div className='divCont'>
            <img class="cart" src={cart} alt="carrito" />
            <p className='p'>Ver Carrito {cantidad!==0 ? <p className='n'>{cantidad}</p> : ""}</p>
        </div>

    )
}


export default CartWidget