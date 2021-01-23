import React, { useState } from 'react'

function MostraGif(props) {
    const [gif, addGif] = useState(false)

    const showGif = () => {
        addGif(true)
    }

    const escondeGif = () => {
        addGif(false)
    }


    return (
    <>
        <button onClick={showGif}>mostra</button>
        {
            gif && <img onClick={escondeGif} src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" />
        }

        </>
    )

}
export default MostraGif;
