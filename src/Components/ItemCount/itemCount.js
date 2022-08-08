import React, { useState } from "react"
import './itemCount.css'



    const ItemCount = ({stock, initial, onAdd,}) => {
        
        const [contador, setContador] = useState(initial);
        

        const sumar = () => {
            contador!=={stock}.stock && setContador(contador + 1)
        }

        const restar = () => {
            contador!==0 && setContador(contador - 1)
        }
        
        const addCart = () => {
            contador!==0 && onAdd(contador)
            
        }

        return (
            <section>
                <p className="comp">Selecciona la cantidad que quieres agregar y luego haz click en agregar al carrito</p>
                <div className="agr">
                    <div className="counter">
                        <button onClick={restar}>◄</button>
                        <div>{contador}</div>
                        <button onClick={sumar}>►</button>
                    </div>
                    <div className="carrito" >
                        {contador!==0
                        ? <button onClick={addCart}>AGREGAR AL CARRITO</button>
                        : <button disabled>AGREGAR AL CARRITO</button>}
                    </div>
                </div>
            </section>
            )
    }

    export default ItemCount
