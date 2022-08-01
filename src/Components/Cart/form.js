import React, { useState } from 'react';
import './form.css';

const Form = ( getValues ) => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')

    const submit = (e) => {
        e.preventDefault();
        getValues.prop(nombre, apellido, email)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>
                        Nombre
                        <input type="text" name="nombre" onChange={event => setNombre(event.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Apellido
                        <input type="text" name="apellido" onChange={event => setApellido(event.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                    Dirección de correo
                        <input type="email" name="mail" onChange={event => setEmail(event.target.value)} required />
                    </label>
                </div>      
                <input type="submit" value="Enviar" />          
            </form>
        </div> 
        )
}

export default Form