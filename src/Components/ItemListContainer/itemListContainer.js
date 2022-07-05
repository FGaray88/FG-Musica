import React from "react"
import './itemListContainer.css'
import ItemCount from '../ItemCount/itemCount.js'
import ItemList from '../ItemList/itemList'





const productos = [
        {id:"1", prod: "Guitarra Electrica", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_700461-MLA48123320539_112021-F.webp", precio:"$62.000", descr:"Fabricada en aliso con acabado brillante. Con 6 cuerdas y 22 trastes de tamaño medium jumbo. El largo de escala es de 625 mm. El puente es fijo. Incluye 2 micrófonos humbucker. Controles de selector de micrófonos, tono y volumen. Sonidos fuertes y firmes con un estilo propio."},
        {id:"2", prod: "Bajo electrico", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_737203-MLA44042380974_112020-F.webp", precio:"$52.000", descr:"Bajo electrico 5 cuerdas precision sx modelo fpb-62 - 5 Caracteristicas: Escala: 864mm Cuerpo: Basswood  Mastil:Canadian Maple Diapason: Rosewood Trastes: 20 Nickel Clavijas: Open-Gear, Chrome Puente: Chrome Pickups: 2 x Single Coil Controles: 2V. 1T. Accessorio: SX BB400 Gig Bag"},
        {id:"3", prod: "Ukulele", picture:"https://http2.mlstatic.com/D_NQ_NP_840357-MLA48264988185_112021-W.webp", precio:"$7.000", descr:"QUE INCLUYE ESTA PUBLICACION? 1- UKELELE SOPRANO JIMY 1- FUNDA FISELINA 1 - ENCORDADO AQUILA Caracteristicas Generales Marca: jimy/ sunset Modelo : pro21 sd Tipo : Soprano 21 pulgadas Cuerdas de Nylon Tapa: ABETO Aro y fondo: CAOBA Trastes: Alpaca Diapasón: Rosewood Puente: Rosewood Clavijero: blindado Medidas: 54x18x6,2 cm"},
        {id:"4", prod: "Piano digital", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_688882-MLA46440127793_062021-F.webp", precio:"$50.000", descr:"Con 400 tonos y 77 ritmos. Tipo de alimentación: corriente eléctrica y pilas. Terminales de entrada y salida: conector de teléfonos, entrada de audio, pedal, usb. Tiene puerto USB. Posee 60 canciones cargadas. Suenan hasta 48 notas simultáneamente. Con pantalla LCD. Tiene control de afinamiento de 465.9 Hz. Con metrónomo. Posee teclado sensitivo. Incluye pedales. Tiene interfaz MIDI. Incluye: base. Componé e interpretá todas las canciones que quieras."},
        {id:"5", prod: "Guitarra Acustica", picture:"https://http2.mlstatic.com/D_NQ_NP_2X_771060-MLA46250076960_062021-F.webp", precio:"$52.000", descr:"Tapa de abeto. Acabado de brillo. Forma del cuerpo: dreadnought. El largo de escala es 643mm. Tiene 6 cuerdas de metal. Incluye estuche. Guitarra versátil que se adapta a una gran variedad de estilos musicales."},
]










const ItemListContainer = (props) => {

    const onAdd = (contador) => {
        alert("Agregaste "+ contador +" productos")
    }


    return (
        <>
            <p class="texto1">Bienvenido {props.name} a {props.app}</p>
                <ItemList productos={productos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        
        </>

    )

}

export default ItemListContainer