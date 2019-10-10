import React from 'react';

import './Input.scss'

const Input = ({label, type, placeholder, value, atualizarStat, obrigatorio}) =>{
    const atualizar = (event)
    return(
        <div className="Input">
            <label>{label}{obrigatorio ? "*" : ""}</label>
            <input type={type}placeholder={placeholder}> </input>
        </div>
    )
}

export default Input;