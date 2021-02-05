import React from 'react';
import {useDispatch} from 'react-redux'

const Diminui = ()=>{

    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch({ type: 'SUBTRAIR_NUMERO'})}>Subtrai</button>
        </div>
        
    )
}

export default Diminui;