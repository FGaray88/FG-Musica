import React, { useContext } from 'react';
import cart from '../../assets/carrito.png';
import './cartWidget.css'
import { cartContext } from '../../Context/CartContext';

const CartWidget = () => {

    const { cantidad, completed } = useContext(cartContext)

    return(
        <div className='divCont'>
            <img className="cart" src={cart} alt="carrito" />
            <h2 className='p'>Ver Carrito {cantidad!==0 && completed===false ? <p className='n'>{cantidad}</p> : ""}</h2>
        </div>
    )
}


export default CartWidget