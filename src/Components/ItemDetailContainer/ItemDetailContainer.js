import React, { useState, useEffect } from "react"
/* import './ItemDetailContainer.css' */
import ItemDetail from "../ItemDetail/itemDetail"
import { SpinnerCircular } from 'spinners-react';

const ItemDetailContainer = () => {

    const productos = [
        {id:"1", prod: "Guitarra Electrica", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_700461-MLA48123320539_112021-F.webp", precio:"$62.000", descr:"Fabricada en aliso con acabado brillante. Con 6 cuerdas y 22 trastes de tamaño medium jumbo. El largo de escala es de 625 mm. El puente es fijo. Incluye 2 micrófonos humbucker. Controles de selector de micrófonos, tono y volumen. Sonidos fuertes y firmes con un estilo propio."},
        {id:"2", prod: "Bajo electrico", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_737203-MLA44042380974_112020-F.webp", precio:"$52.000", descr:"Bajo electrico 5 cuerdas precision sx modelo fpb-62 - 5 Caracteristicas: Escala: 864mm Cuerpo: Basswood  Mastil:Canadian Maple Diapason: Rosewood Trastes: 20 Nickel Clavijas: Open-Gear, Chrome Puente: Chrome Pickups: 2 x Single Coil Controles: 2V. 1T. Accessorio: SX BB400 Gig Bag"},
        {id:"3", prod: "Guitarra Electrica", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_700461-MLA48123320539_112021-F.webp", precio:"$62.000", descr:"Fabricada en aliso con acabado brillante. Con 6 cuerdas y 22 trastes de tamaño medium jumbo. El largo de escala es de 625 mm. El puente es fijo. Incluye 2 micrófonos humbucker. Controles de selector de micrófonos, tono y volumen. Sonidos fuertes y firmes con un estilo propio."},
        {id:"4", prod: "Piano digital", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_737203-MLA44042380974_112020-F.webp", descr:"Bajo electrico 5 cuerdas precision sx modelo fpb-62 - 5 Caracteristicas: Escala: 864mm Cuerpo: Basswood  Mastil:Canadian Maple Diapason: Rosewood Trastes: 20 Nickel Clavijas: Open-Gear, Chrome Puente: Chrome Pickups: 2 x Single Coil Controles: 2V. 1T. Accessorio: SX BB400 Gig Bag"},
        {id:"5", prod: "Guitarra Acustica", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_737203-MLA44042380974_112020-F.webp", precio:"$52.000", descr:"Bajo electrico 5 cuerdas precision sx modelo fpb-62 - 5 Caracteristicas: Escala: 864mm Cuerpo: Basswood  Mastil:Canadian Maple Diapason: Rosewood Trastes: 20 Nickel Clavijas: Open-Gear, Chrome Puente: Chrome Pickups: 2 x Single Coil Controles: 2V. 1T. Accessorio: SX BB400 Gig Bag"},
    ]






    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(productos);
        }, 5000);
    });

    

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);
    
    useEffect(() => {
            promesa.then((data) => {
                setProduct(data[0]);
            }).catch(() => {
                console.log("mal")
            }).finally(()=>setLoaded(false))
        },);
        
            
        

    return (

        <div className="spinner">
            {loaded ? <SpinnerCircular /> : <ItemDetail producto={product} />}
        </div>
    )

}

export default ItemDetailContainer