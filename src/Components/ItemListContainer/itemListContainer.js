import React from "react"
import './itemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <p class="texto1">Bienvenido {props.name} a {props.app}</p>
    )

}

export default ItemListContainer