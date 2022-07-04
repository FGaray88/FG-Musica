import React, { useState, useEffect } from "react"
/* import './ItemDetailContainer.css' */
import ItemDetail from "../ItemDetail/itemDetail"





const productos = [
    {id:"1", prod: "Guitarra Electrica", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_700461-MLA48123320539_112021-F.webp", precio:"$62.000", descr:"Fabricada en aliso con acabado brillante. Con 6 cuerdas y 22 trastes de tamaño medium jumbo. El largo de escala es de 625 mm. El puente es fijo. Incluye 2 micrófonos humbucker. Controles de selector de micrófonos, tono y volumen. Sonidos fuertes y firmes con un estilo propio."},
    {id:"2", prod: "Bajo electrico", picture:"../../assets/bass.jpg", precio:"$12.000"},
    {id:"3", prod: "Ukulele", picture:"../../assets/ukulele.jpg", precio:"$5.000"},
    {id:"4", prod: "Piano digital", picture:"../../assets/piano.jpg", precio:"$50.000"},
    {id:"5", prod: "Guitarra Acustica", picture:"../../assets/acGuitar.jpg", precio:"$15.000"}, 
]





    

const ItemDetailContainer = () => {

    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(productos);
        }, 5000);
    });

    

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
            promesa.then((data) => {
                setProducts(data);
            }).catch(() => {
                console.log("mal")
            })
        });
            
        

    return (
        <>
        
        <ItemDetail producto={products[0]} />
        </>

    )

}

export default ItemDetailContainer