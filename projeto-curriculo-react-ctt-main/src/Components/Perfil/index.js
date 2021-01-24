import React from "react"
import avatar from "../../image/avatar.jpg"

function Perfil(props) {

    const { perfilProfissional } = props.perfil


    return (
        <>
            <div className="perfil">
                <img src={avatar} alt="Perfil" />
            </div>
            <div className="perfil-profissional">
                <p>{perfilProfissional} </p>
            </div>
        </>
    )
}

export default Perfil