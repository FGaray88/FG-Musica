import cart from '../../assets/carrito.png';

const CartWidget = () => {
    return(
        <img style={styles.img} src={cart} alt="carrito" />
    )
}

const styles = {
    img :{
        margin: 10,
        width: "6%",
        borderRadius: 8,
        border: "2px solid black",
        boxShadow: "3px 3px black",
    },
}


export default CartWidget