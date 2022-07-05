import React, { useState, useEffect } from "react"
import { SpinnerCircular } from 'spinners-react';
import Item from '../Item/item'
import './ItemList.css'
import { useParams } from "react-router-dom"

const ItemList = (productos) => {
    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(productos.productos);
        }, 5000);
    });

    const {categoryName} = useParams()
    
    const [products, setProducts] = useState([]);
    
        useEffect(() => {
            promesa.then((data) => {
                setProducts(data);
                console.log(products)
            }).catch(() => {
                console.log("mal")
            })
        }, [categoryName]);
            
    return (
        <>
        <div className="spinner">
            {products.length===0 && <SpinnerCircular />}
        </div>

        <div className="lista">
        {products.map((product) =><Item key={product.id} prop={product} />)}
        </div>
        </>
        )    
}

export default ItemList