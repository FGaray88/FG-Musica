import cart from '../../assets/carrito.png';
import './cartWidget.css'

const CartWidget = () => {
    return(
        <div className='divCont'>
            <img class="cart" src={cart} alt="carrito" />
            <p className='p'>Ver Carrito</p>
        </div>

    )
}


export default CartWidget