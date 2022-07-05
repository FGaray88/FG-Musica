import React from "react"
import logo from '../../assets/LogoFG.jpg';
import './navbar.css'
import { Link, NavLink } from  "react-router-dom";
import CartWidget from "../CartWidget/cartWidget";




const NavBar = () => {

    const categorias = [
        { name: "Instrumentos Musicales", id:0, route:"/categoria/instruments"},
        { name: "Placas de audio", id:0, route:"/categoria/placasAudio"},
        { name: "Accesorios", id:0, route:"/categoria/accesorios"},
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