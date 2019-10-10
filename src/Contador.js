import React from 'react';

const Contador= ()=>{
    const [contador, SetContador]= useState(0);
    const [pastel, setPastel]= useState("queijo");

    const incrementar = ()=>{
        SetContador(Contador+ 1);
    }



    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Contador;    