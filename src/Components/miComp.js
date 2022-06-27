import React, {useState} from "react"

export const miComp = () => {
    const [contador, setContador] = useState(0)

    const handlerClick = () => {
        setContador(contador + 1);
    }

    return (
        <>
            <div>MiComponente</div>
            <div>{contador}</div>
            <button onClick={handlerClick}>Click me</button>
        </>

    )


    /* const [usuarios, setUsuarios] = useState([]);
    const [user, setUser] = useState({}) */

}