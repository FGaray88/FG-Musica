import cart from '../../assets/carrito.png';
import './cartWidget.css'

const CartWidget = () => {
    return(
        <img class="cart" src={cart} alt="carrito" />
    )
}


export default CartWidget