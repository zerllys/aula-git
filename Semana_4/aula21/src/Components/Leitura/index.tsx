import React from 'react';
import {useSelector} from 'react-redux'

const Leitura = () => {

    const valorNumero = useSelector((state: any) => state.numero)
    
    return(
        <p>Leitura: {valorNumero}</p>
    );
}

export default Leitura;