import React, { useState, useEffect } from "react"
/* import './ItemDetailContainer.css' */
import ItemDetail from "../ItemDetail/itemDetail"
import { SpinnerCircular } from 'spinners-react';
import { useParams } from "react-router-dom";
import productos from '../ItemListContainer/productos'


const ItemDetailContainer = () => {


    const {itemId} = useParams()
    const index = itemId - 1

    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    });

    

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);
    
    useEffect(() => {
            promesa.then((data) => {
                setProduct(data[index]);
            }).catch(() => {
                console.log("mal")
            }).finally(()=>setLoaded(false))
        }, [itemId]);

    return (

        <div className="spinner">
            {loaded ? <SpinnerCircular /> : <ItemDetail producto={product} />}
        </div>
    )
}

export default ItemDetailContainer