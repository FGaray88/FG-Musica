import './itemDetail.css'
import ItemCount from '../ItemCount/itemCount.js'


const ItemDetail = (producto) => {

const prod = producto.producto

const onAdd = (contador) => {
    alert("Agregaste "+ contador +" productos")
}


    return (
        <>
        <div className='divDetail'>
            <img src={prod.picture} alt="Hola"></img>
            <div className='divText'>
                <h2>{prod.nombre}</h2>
                <p className='descripcion'>{prod.descr}</p>
                <h3>Precio {prod.precio}</h3>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        </div>
        </>)
}



export default ItemDetail