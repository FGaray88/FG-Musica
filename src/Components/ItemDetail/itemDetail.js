import './itemDetail.css'


const ItemDetail = (producto) => {

const prod = producto.producto


    return (
        <>
        <div className='divDetail'>
            <h2>{prod.prod}</h2>
            <img src={prod.picture} alt="Hola"></img>
            <h3>Precio {prod.precio}</h3>
            <h4 className='descripcion'>{prod.descr}</h4>
        </div>
        </>)
}



export default ItemDetail