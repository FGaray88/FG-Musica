import React, { useContext } from 'react';
import { cartContext } from "../../Context/CartContext";
import { SpinnerCircular } from 'spinners-react';
import { Link } from "react-router-dom";





const ConfirmScreen = () => {
    const { idVenta, dataUser, completed, total } = useContext(cartContext)
            
    return (
        <div>
            {completed
            ? <div>   
                <h1>Muchas gracias por tu compra {dataUser.name}  </h1>
                <h2>El dinero lo tenemos, los productos no sabemos</h2>
                <h2>Datos de la operacion:
                    <p>Nombre del comprador: {dataUser.name} </p>
                    <p>Apellido del comprador: {dataUser.surname} </p>
                    <p>Monto Total de la operacion: ${total}</p>
                    <p>ID de la operacion: "{idVenta}"</p>
                </h2>
                <Link to="/">Realizar otra compra</Link>
            </div>
            : <SpinnerCircular />}
        </div>
    )

}

export default ConfirmScreen
