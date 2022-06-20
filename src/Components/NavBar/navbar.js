import React from "react"
import logo from '../../assets/LogoFG.jpg';
import './navbar.css'
import CartWidget from '../CartWidget/cartWidget'


const NavBar = () => {
    return (
        <header >
            <img src={logo} alt="logo" />
            <h1>FABIAN GARAY | TIENDA DE MUSICA</h1>
            <nav>
                <a href="#!">Audios</a>
                <a href="#!">Letras</a>
                <a href="#!">Partituras</a>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar