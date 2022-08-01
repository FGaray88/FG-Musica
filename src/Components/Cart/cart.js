import React, { useContext, useState } from 'react';
import { cartContext } from "../../Context/CartContext";
import './cart.css';
import { db } from "../../firebase/firebase"
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"
import RenderCart from './renderCart'
import Form from './form'
import { Link } from "react-router-dom";

const Cart = () => {

    const { total, operationState, products, screenProvider, completed } = useContext(cartContext);
    const [dataUser, setDataUser] = useState("")
    
    


    

    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            dataUser,
            items: products,
            date:serverTimestamp(),
            total: total
        })
        .then((result) => {
            screenProvider(result.id, dataUser)
            operationState(true)
            
        })
        products.forEach(p => {
            updateDoc(doc(db, "productos", p.id), {stock: p.stock-p.qty});
        })

    }

    const getValues = (name, surname, email) => {
        setDataUser({
            name: name,
            surname: surname,
            email: email,
        })
    }

    return (
        <div>
            {products.length === 0 || completed
            ? <h1 className='emptyCart'>Carrito Vacio, compra algo <Link to="/">aquí</Link></h1> 
            : <div>
                <div className='contenedorCart'>
                    <RenderCart />
                    <div className='formulario'>
                        <h2>Para confirmar la compra complete sus datos</h2>
                        <Form prop={getValues} />
                    </div>
                        {dataUser !== ""
                        ? <button className="but" onClick={finalizarCompra}><Link to="/confirm" className='link'>Confirmar Compra</Link></button>
                        : <button className="butDis" disabled>Confirmar Compra</button>}
                </div>
            </div>
            }
        </div>
    )
}

export default Cart