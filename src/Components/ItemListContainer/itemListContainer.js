import React from "react"
import './itemListContainer.css'
import ItemList from '../ItemList/itemList'
import productos from './productos'



const ItemListContainer = (props) => {
    return (
        <>
            <p class="texto1">Bienvenido {props.name} a {props.app}</p>
                <ItemList productos={productos} />
        </>
    )

}

export default ItemListContainer