import './item.css'


const Item = (productos) => {

const producto = productos.prop

    return (
        <>
        <div className="div" key={producto.id}>
            <h2>{producto.prod}</h2>
            <img src={producto.picture} alt="Hola"></img>
            <h3>{producto.precio}</h3>
        </div>
        </>)
}



export default Item