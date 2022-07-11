import React, { useState } from "react"
import './itemCount.css'
import { Link } from  "react-router-dom";



    const ItemCount = ({stock, initial, onAdd, cart}) => {
        
        const [contador, setContador] = useState(initial);

        const sumar = () => {
            contador!=={stock}.stock && setContador(contador + 1)
        }

        const restar = () => {
            contador!==0 && setContador(contador - 1)
        }
        
        const addCart = () => {
            contador!==0 ? onAdd(contador) : alert("no se puede agregar")
            
        }




        return (
            <section>
                <p class="comp">Selecciona la cantidad que quieres agregar y luego haz click en agregar al carrito</p>
                <div className="agr">
                    <div className="counter">
                        <button onClick={restar}>◄</button>
                        <div>{contador}</div>
                        <button onClick={sumar}>►</button>
                    </div>
                    <div className="carrito" >
                        <button onClick={addCart}>AGREGAR AL CARRITO</button>
                    </div>
                </div>
            </section> )
    }

    export default ItemCount
    

    /* const [usuarios, setUsuarios] = useState([]);
    const [user, setUser] = useState({}) */
