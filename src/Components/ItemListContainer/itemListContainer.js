import React from "react"
import './itemListContainer.css'
import ItemCount from '../ItemCount/itemCount.js'


const ItemListContainer = (props) => {

    const onAdd = (contador) => {
        alert("Agregaste "+ contador +" productos")
    }


    return (
        <>
        <p class="texto1">Bienvenido {props.name} a {props.app}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>

    )

}

export default ItemListContainer