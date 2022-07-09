import React, { useState, useEffect } from "react"
import { SpinnerCircular } from 'spinners-react';
import Item from '../Item/item'
import './ItemList.css'
import { useParams } from "react-router-dom"

const ItemList = (productos) => {
    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(productos.productos);
        }, 2000);
    });

    const {categoryName} = useParams()

    //aca tengo que aplicar el filter a productos categoryName trae guitarras o bajos o pianos
    
    
    const [products, setProducts] = useState([]);
    
        useEffect(() => {
            promesa.then((data) => {
                /* categoryName ? setProducts(data) : setProducts(data[index].categoria) */
                const filtro = []
                for (let i = 0; i < data.length; i+=1) {
                    if (data[i].categoria===categoryName) { filtro.push(data[i]) }
                    console.log(filtro)    
                    }

                categoryName ? setProducts(filtro) : setProducts(data)
                
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