import './itemDetail.css'
import ItemCount from '../ItemCount/itemCount.js'
import React, { useState, useEffect, useContext } from "react"
import { Link } from  "react-router-dom";
import { cartContext } from '../../Context/CartContext'




const ItemDetail = (producto) => {
    const prod = producto.producto
    const { addProduct } = useContext(cartContext);
    const [loaded, setLoaded] = useState(true);

    const onAdd = (contador) => {
        setLoaded(false)
        addProduct({...prod, qty: contador})
    }


        return (
            <>
            <div className='divDetail'>
                <img src={prod.picture} alt="Hola"></img>
                <div className='divText'>
                    <h2>{prod.nombre}</h2>
                    <p className='descripcion'>{prod.descr}</p>
                    <h3>Precio ${prod.precio}</h3>
                    {loaded ? <ItemCount stock={5} initial={1} onAdd={onAdd} /> : <div><Link to="/">CONTINUAR COMPRA</Link><br></br><Link to="/cart">FINALIZAR COMPRA</Link></div>}


                </div>
            </div>
            </>)
}



export default ItemDetail