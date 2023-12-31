import { useState } from 'react';
import './Campo.css';
const Campo = (props) =>{
    const {type = "text"} = props


    const manejarCambio = (e)=>{
        //console.log("cambio",e.target.value)
        props.actualizarValor(e.target.value)
    }
    const placeholderModificado = `${props.placeholder}...`
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo;