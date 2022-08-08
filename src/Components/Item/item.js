import React from 'react';
import './item.css'
import { Link } from  "react-router-dom";



const Item = (productos) => {

    const producto = productos.prop
    const url = `/item/${producto.id}`


    return (
        <div className="div" key={producto.id}>
            <div className='img'>
                <img src={producto.picture} alt="Hola"></img>
            </div>
            <div className='text'>
                <h3>{producto.nombre}</h3>
                <h3>Precio: ${producto.precio}</h3>
                <Link to={url}>Ver detalle</Link>
            </div>
        </div>
    )
}


export default Item