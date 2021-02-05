import React from 'react';
import {useDispatch} from 'react-redux'

const Aumenta = ()=>{

    const dispatch = useDispatch()

       return(
        <div>
            <button onClick={() => dispatch({ type: 'ADICIONAR_NUMERO'})}>Adiciona</button>
        </div>
        
    )
}

export default Aumenta;