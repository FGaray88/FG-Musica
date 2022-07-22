import React from "react"
import { SpinnerCircular } from 'spinners-react';
import Item from '../Item/item'
import './ItemList.css'




const ItemList = (prop) => {

    const data = prop.prop
    
    return (
        <>
        <div className="spinner">
            {data.length===0 && <SpinnerCircular />}
        </div>

        <div className="lista">
        {data.map((product) =><Item key={product.id} prop={product} />)}
        </div>
        </>
        )    
}

export default ItemList