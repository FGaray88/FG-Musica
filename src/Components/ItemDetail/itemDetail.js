import './itemDetail.css'
import { Link } from "react-router-dom";


const ItemDetail = (producto) => {

const prod = producto.producto


    return (
        <>
        <div className='divDetail'>
            <img src={prod.picture} alt="Hola"></img>
            <div className='divText'>
                <h2>{prod.prod}</h2>
                <p className='descripcion'>{prod.descr}</p>
                <h3>Precio {prod.precio}</h3>
                <Link to="./cart">Agregar al carrito</Link>
            </div>
        </div>
        </>)
}



export default ItemDetail