import React from "react"
import logo from '../../assets/LogoFG.jpg';
import CartWidget from '../CartWidget/cartWidget'

const NavBar = () => {
    return (
        <header style={styles.header}>
            <img style={styles.img} src={logo} alt="logo" />
            <h1 style={styles.h1}>FABIAN GARAY | TIENDA DE MUSICA</h1>
            <nav style={styles.nav}>
                <a style={styles.a} href="#!">Audios</a>
                <a style={styles.a} href="#!">Letras</a>
                <a style={styles.a} href="#!">Partituras</a>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar

const styles = {
    header:{
        backgroundColor: "rgb(247, 138, 66)",
        border: "2px solid black",
        boxShadow: "3px 3px black",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,    
        textAlign: "center",
        margin: 'auto',
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    h1: {
            fontFamily:"Verdana, Geneva, Tahoma, sans-serif",
            color: "black",            
    },
    
    nav: {
        display: "flex",
        justifyContent: "space-between",
    },
    
    img :{
        margin: 10,
        width: "6%",
        height: "100%",
        borderRadius: 10,
        border: "2px solid black",
        boxShadow: "1px 1px black",
    },
    
    a:{
        margin: 10,
        fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: 20,
        color:"rgb(247, 138, 66)",
        backgroundColor:"rgb(255, 255, 255)",
        padding: 7,
        border: "2px solid black",
        boxShadow: "3px 3px black",
        borderTopRightRadius: 20,
    },
}