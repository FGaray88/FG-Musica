import React, { useState } from "react"
import './itemCount.css'
import CartWidget from '../CartWidget/cartWidget'




    const ItemCount = ({stock, initial, onAdd}) => {
        
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
                <div class="comp">ItemCount</div>
                <div class="counter">
                    <button onClick={restar}>◄</button>
                    <div>{contador}</div>
                    <button onClick={sumar}>►</button>
                </div>
                <button class="carrito" onClick={addCart}><CartWidget />AGREGAR AL CARRITO</button>
            </section> )
    }

    export default ItemCount
    

    /* const [usuarios, setUsuarios] = useState([]);
    const [user, setUser] = useState({}) */
