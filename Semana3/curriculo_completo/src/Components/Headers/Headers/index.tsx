import React from 'react'
import {HeaderInfo} from '../types/perfil'
import image from '../../image/image.jpeg'

function Headers (props:HeaderInfo){

    return(
        <div>
            <div className="titulo">Perfil Profissional</div>
            <div className="perfil">
                <img src={image} alt="Perfil" />
            </div>
            <div className="perfil-profissional">
                <p>{props.info} </p>
            </div>
        
        </div>
    )

}

export default Headers ;