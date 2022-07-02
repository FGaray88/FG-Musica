import React from "react"
import './itemListContainer.css'
import ItemCount from '../ItemCount/itemCount.js'
import ItemList from '../ItemList/itemList'




const productos = [
    {id:"1", prod: "Guitarra Electrica", picture:"@assets/guitar.jpg", precio:"$20.000"},
    {id:"2", prod: "Bajo electrico", picture:"../../assets/bass.jpg", precio:"$12.000"},
    {id:"3", prod: "Ukulele", picture:"../../assets/ukulele.jpg", precio:"$5.000"},
    {id:"4", prod: "Piano digital", picture:"../../assets/piano.jpg", precio:"$50.000"},
    {id:"5", prod: "Guitarra Acustica", picture:"../../assets/acGuitar.jpg", precio:"$15.000"}, 
]


const ItemListContainer = (props) => {

    const onAdd = (contador) => {
        alert("Agregaste "+ contador +" productos")
    }


    return (
        <>
        <p class="texto1">Bienvenido {props.name} a {props.app}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        <ItemList productos={productos} />
        </>

    )

}

export default ItemListContainer