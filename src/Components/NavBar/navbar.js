import React from "react"
import logo from '../../assets/LogoFG.jpg';
import './navbar.css'
import { Link, NavLink } from  "react-router-dom";
import CartWidget from "../CartWidget/cartWidget";




const NavBar = () => {

    const categorias = [
        { name: "Guitarras", id:1, route:"/categoria/guitarras"},
        { name: "Bajos", id:2, route:"/categoria/bajos"},
        { name: "Pianos Digitales", id:3, route:"/categoria/pianos"},
    ];

    return (
        <header >
            <div className="title">
                <Link to="/" className="logo"><img src={logo} alt="logo" className="imgLogo" /></Link>
                <h1>TIENDA DE MUSICA</h1>
            </div>
            <div>
                <nav>
                    {categorias.map((categoria) => <NavLink key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}
                    <Link to="/cart" className="carr"><CartWidget /></Link>
                </nav>
            </div>
        </header>
    )
}

export default NavBar