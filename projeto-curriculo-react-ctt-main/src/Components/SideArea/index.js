import React, { useState } from "react"


function SideArea(prop) {

    

    const { contatos } = prop.side
    const { educacao } = prop.side


    //evento botao mostrar contatos

    const [contato, mostraContato] = useState(false)

    const showContato = () => {
        mostraContato(true)
    }

    
    return (

        <aside>
            <div className="sidebar">
                <h3>Contatos</h3>

                <button onClick={showContato}>Mostrar Contatos</button>
                {contato &&
                 <div className="lista-de-contatos">{contatos.map(item => (
                    <li key={item.id}>
                        <div className="item-contato">
                            <h4>{item.tipo}</h4>
                            <p>{item.contato}</p>
                        </div>
                    </li>
                ))}
                </div>  
                
            
            }
               
            </div>

            <div className="sidebar">
                <h3>Educação</h3>
                <div className="lista-de-formacao">{educacao.map(item => (
                    <li key={item.id}>
                        <h4>{item.instituicao}</h4>
                        <p>{item.curso}</p>
                    </li>
                ))}
                </div>
            </div>
        </aside>
    )
}
export default SideArea