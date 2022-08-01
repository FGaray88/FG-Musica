import React, { useState, useEffect } from "react"
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/itemDetail"
import { SpinnerCircular } from 'spinners-react';
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDoc, collection, doc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const {itemId} = useParams()
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);
    
    useEffect(() => {
        const productCollection = collection(db,"productos");
        const refDoc = doc(productCollection, itemId);
        getDoc(refDoc)
        .then (result => {
            const producto = {
                id: result.id,
                ...result.data(),
            }
            setProduct(producto)
        })
        .catch(err=>console.log(err))
        .finally(()=>setLoaded(false))
        }, [itemId]);

    return (
        <div className="spinner">
            {loaded ? <SpinnerCircular /> : <ItemDetail producto={product} />}
        </div>
    )
}

export default ItemDetailContainer