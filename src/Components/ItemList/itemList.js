import React, { useState, useEffect } from "react"
import { SpinnerCircular } from 'spinners-react';
import Item from '../Item/item'
import './ItemList.css'

const ItemList = (productos) => {
    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(productos.productos);
        }, 5000);
    });
    
    const [products, setProducts] = useState([]);
    
        useEffect(() => {
            promesa.then((data) => {
                setProducts(data);
                console.log(products)
            }).catch(() => {
                console.log("mal")
            })
        });
            
    return (
        <>
        <div className="spinner">
            {products.length===0 && <SpinnerCircular />}
        </div>
        {products.map((product) =>
            <>
                <Item key={product.id} prop={product} />
            </>)}
        </>
        )    
}

export default ItemList