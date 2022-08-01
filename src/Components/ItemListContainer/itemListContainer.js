import React, { useState, useEffect } from "react"
import './itemListContainer.css'
import { SpinnerCircular } from 'spinners-react';
import ItemList from '../ItemList/itemList'
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"



const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const {categoryName} = useParams()
    
    
    useEffect(() => {

            const productos = categoryName ?
                query(collection(db, "productos"), where('categoria', '==', categoryName))
                : collection(db, "productos");

            getDocs(productos)
            .then(result => {
                
                const lista = result.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProducts(lista)
            }).catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [categoryName]);

        



    return (
        <div>
            <div className="contenedorILC">
                <p className="texto1">Bienvenido {props.name} a {props.app}</p>
                {loaded ? <div className="spinner"><SpinnerCircular /></div>
                        : <div><ItemList prop={products} /></div>}
            </div>
        </div>
    )

}

export default ItemListContainer