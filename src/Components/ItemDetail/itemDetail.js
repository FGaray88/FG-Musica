import './itemDetail.css'
import ItemCount from '../ItemCount/itemCount.js'
import React, { useState, useEffect } from "react"
import { Link } from  "react-router-dom";


class instrument{
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.cantidad = cantidad;
    }
}




const ItemDetail = (producto) => {

const prod = producto.producto

const [products, setProducts] = useState([]);
const [loaded, setLoaded] = useState(true);

const onAdd = (contador) => {
    const productsCart = []    
    productsCart.push(new instrument (prod.nombre, prod.precio, contador))
    setProducts(productsCart)
    setLoaded(false)
}










    return (
        <>
        <div className='divDetail'>
            <img src={prod.picture} alt="Hola"></img>
            <div className='divText'>
                <h2>{prod.nombre}</h2>
                <p className='descripcion'>{prod.descr}</p>
                <h3>Precio ${prod.precio}</h3>
                {loaded ? <ItemCount stock={5} initial={1} onAdd={onAdd} /> : <Link to="/cart">FINALIZAR COMPRA</Link>}
            </div>
        </div>
        </>)
}



export default ItemDetail