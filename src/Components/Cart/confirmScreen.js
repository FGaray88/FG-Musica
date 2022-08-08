import React, { useContext } from 'react';
import { cartContext } from "../../Context/CartContext";
import { SpinnerCircular } from 'spinners-react';
import { Link } from "react-router-dom";
import './confirmScreen.css'






const ConfirmScreen = () => {
    const { idVenta, dataUser, completed, total, operationState, reset } = useContext(cartContext)

    const reinit = () => {
        operationState(false)
        reset()
    }

    return (
        <div>
            {completed
            ? <div className='contenedorCS'>   
                <h1>Muchas gracias por tu compra {dataUser.name}  </h1>
                <h2>El dinero lo tenemos, los productos no sabemos</h2>
                <h2>Datos de la operacion:
                    <p>Nombre del comprador: {dataUser.name} </p>
                    <p>Apellido del comprador: {dataUser.surname} </p>
                    <p>Monto Total de la operacion: ${total}</p>
                    <p>ID de la operacion: "{idVenta}"</p>
                </h2>
                <button className='botonNuevaCompra' onClick={reinit}><Link to="/">Realizar otra compra</Link></button>
            </div>
            :<div className='spinner'><SpinnerCircular /></div>}
        </div>
    )
}

export default ConfirmScreen
